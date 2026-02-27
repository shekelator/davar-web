import { schedule, parashaWeeks, type DayReading, type ParashaWeek } from '../data/schedule'

/** Returns today's date as YYYY-MM-DD in local time. */
export function todayKey(): string {
  const d = new Date()
  const yyyy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

export function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number)
  const date = new Date(y, m - 1, d)
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}

/** Returns the reading for a given YYYY-MM-DD date, or null if not found. */
export function getReading(date: string): DayReading | null {
  return schedule.find((r) => r.date === date) ?? null
}

/** Returns today's reading, or null if not in the schedule. */
export function getTodayReading(): DayReading | null {
  return getReading(todayKey())
}

/** Returns all readings for a parasha week by slug. */
export function getWeekReadings(slug: string): DayReading[] {
  return schedule.filter((r) => r.parashaSlug === slug)
}

/** Returns the ParashaWeek metadata for a given slug, or null. */
export function getParashaWeek(slug: string): ParashaWeek | null {
  return parashaWeeks.find((w) => w.slug === slug) ?? null
}

/** Returns the ParashaWeek for a given date, or null. */
export function getParashaWeekForDate(date: string): ParashaWeek | null {
  const day = getReading(date)
  if (!day) return null
  return getParashaWeek(day.parashaSlug)
}

/** Returns the previous and next parasha weeks relative to a slug. */
export function getPrevNextWeeks(slug: string): { prev: ParashaWeek | null; next: ParashaWeek | null } {
  const idx = parashaWeeks.findIndex((w) => w.slug === slug)
  if (idx === -1) return { prev: null, next: null }
  return {
    prev: idx > 0 ? parashaWeeks[idx - 1] : null,
    next: idx < parashaWeeks.length - 1 ? parashaWeeks[idx + 1] : null,
  }
}

/** Formats a YYYY-MM-DD string to a human-readable date. */
export function getPrevNextReadings(date: string): { prev: DayReading | null, next: DayReading | null } {
  const idx = schedule.findIndex((r) => r.date === date)
  if (idx === -1) return { prev: null, next: null }
  return {
    prev: idx > 0 ? schedule[idx - 1] : null,
    next: idx < schedule.length - 1 ? schedule[idx + 1] : null,
  }
}
