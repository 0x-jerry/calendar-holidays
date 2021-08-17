import path from 'path';
import { promises as fs } from 'fs';
import { calendar_v3, google } from 'googleapis';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';
import dotEnv from 'dotenv';

dotEnv.config();

tryGenerate();

async function tryGenerate() {
    const { items } = await getAPIResult();

    const events: ICalendarEvent[] = getCalendarEvent(items);

    const holidays = ['BEGIN:VCALENDAR'];
    holidays.push('VERSION:2.0');

    events.forEach((item) => {
        const event = ['BEGIN:VEVENT'];

        event.push(`UID:${uuid().toUpperCase()}`);

        event.push(
            `DTSTART;VALUE=DATE:${dayjs(item.start).format('YYYYMMDD')}`
        );
        event.push(`DTEND;VALUE=DATE:${dayjs(item.end).format('YYYYMMDD')}`);

        event.push(`SUMMARY:${item.summary}`);

        event.push('END:VEVENT');

        holidays.push(event.join('\n'));
    });

    holidays.push('END:VCALENDAR');

    fs.writeFile(
        path.join(__dirname, '..', 'holidays-in-china.ics'),
        holidays.join('\n')
    );
}

function getCalendarEvent(items: calendar_v3.Schema$Event[]) {
    const events: ICalendarEvent[] = [];

    items.forEach((item) => {
        const isContinue = (i: ICalendarEvent) =>
            i.summary === item.summary && isEq(i.end, item.start.date, 0, 'd');

        const continueEvent = events.find(isContinue);

        if (continueEvent) {
            continueEvent.end = item.end.date;
            return;
        }

        events.push({
            summary: item.summary,
            start: item.start.date,
            end: item.end.date,
        });
    });
    return events;
}

function formatDate(dateStr: string) {
    return dayjs(dateStr).format('YYYYMMDD');
}

/**
 * Return true if two date string is equal with a specified amount of time.
 * @example
 * 
 * ```js
 * isEq('2021-02-02', '2021-02-03', 1, 'd') // => true
 * ```
 * 
 * @param startDate 
 * @param endDate 
 * @param count 
 * @param unit 
 * @returns 
 */
function isEq(
    startDate: string,
    endDate: string,
    count: number,
    unit: dayjs.OpUnitType
) {
    return (
        dayjs(startDate).add(count, unit).format('YYYYMMDD') ===
        formatDate(endDate)
    );
}

async function getAPIResult(): Promise<calendar_v3.Schema$Events> {
    const cachePath = path.join(__dirname, '../temp', 'calendar.json');

    try {
        const content = await fs.readFile(cachePath, { encoding: 'utf-8' });
        return JSON.parse(content);
    } catch (error) {
        //
    }

    const calendar = google.calendar({
        version: 'v3',
        auth: process.env.GOOGLE_API_KEY,
    });

    const { data } = await calendar.events.list({
        calendarId: 'zh.china#holiday@group.v.calendar.google.com',
    });


    await fs.mkdir(path.parse(cachePath).dir)
    await fs.writeFile(cachePath, JSON.stringify(data, null, 2));

    return data;
}

interface ICalendarEvent {
    start: string;
    end: string;
    summary: string;
}
