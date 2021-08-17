export interface LunarOption {
  lYear: number
  lMonth: number
  lDay: number
  Animal: string
  IMonthCn: string
  IDayCn: string
  cYear: number
  cMonth: number
  cDay: number
  gzYear: string
  gzMonth: string
  gzDay: string
  isToday: boolean
  isLeap: boolean
  nWeek: number
  ncWeek: string
  isTerm: boolean
  Term?: string
  astro: string
}

export interface Calendar {
  solar2lunar(y: number, m: number, d: number): LunarOption
}

export const calendar: Calendar
