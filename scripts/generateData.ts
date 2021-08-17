import dayjs from 'dayjs'
import { calendar } from './calendar'
import fs from 'fs/promises'
import { LunarOption } from '../src/typings'

const now = new Date()

const yearInfo: Record<string, LunarOption> = {}

const oneD = 1 * 24 * 60 * 60 * 1000

const end = new Date(now.getFullYear() + 1, 0)
let start = new Date(now.getFullYear(), 0)

while (start < end) {
  const r = calendar.solar2lunar(start.getFullYear(), start.getMonth() + 1, start.getDate())

  yearInfo[`${dayjs(start).format('YYYY-MM-DD')}`] = {
    cYear: r.cYear,
    cMonth: r.IMonthCn,
    cDay: r.IDayCn,
    week: r.nWeek,
    cWeek: r.ncWeek,
    term: r.Term,
  }

  start = new Date(start.getTime() + oneD)
}

fs.writeFile('src/data.json', JSON.stringify(yearInfo, null, 2))
