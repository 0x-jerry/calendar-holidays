import data from "./data.json";
import { LunarOption } from "./typings";
import { langs } from "./lang";
import dayjs from "dayjs";

type DateData = Record<string, LunarOption>;
const dateData: DateData = data;

interface CalendarData {
  language: string;
  describe: string;
  code: string;

  today: string;

  theme: string;

  cMonth: string;
  cWeek: string;
  cDay: string;

  week: Week[];
}

interface Week {
  cMonth: string;
  date: string;
  cDay: string;
  theme: string;
}

function getRandomLang() {
  const idx = Math.random() * langs.length;

  return langs[~~idx];
}

export function getWeekInfo(): CalendarData {
  const today = dayjs();

  const dayInfo = dateData[today.format("YYYY-MM-DD")];

  const lang = getRandomLang();

  const info: CalendarData = {
    ...lang,
    cDay: dayInfo.term || dayInfo.cDay,
    theme: dayInfo.term || [6, 7].includes(dayInfo.week) ? "red" : "",
    cMonth: dayInfo.cMonth,
    cWeek: dayInfo.cWeek,
    today: today.format("YYYY-MM-DD"),
    week: [],
  };

  const start = dayjs().startOf("week").add(1, "d");
  for (let idx = 0; idx < 7; idx++) {
    const day = start.add(idx, "d");
    const i = dateData[day.format("YYYY-MM-DD")];

    info.week.push({
      date: day.format("MM-DD"),
      cMonth: i.cMonth,

      cDay: i.term || i.cDay,
      theme: i.term || [6, 7].includes(i.week) ? "red" : "",
    });
  }

  return info;
}
