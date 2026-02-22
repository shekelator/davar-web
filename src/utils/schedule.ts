import { schedule, type DayReading } from '../data/schedule'

/** Returns today's date as YYYY-MM-DD in local time. */
export function todayKey(): string {
  const d = new Date()
  const yyyy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

/** Returns the reading for a given YYYY-MM-DD date, or null if not found. */
export function getReading(date: string): DayReading | null {
  return schedule.find((r) => r.date === date) ?? null
}

/** Returns today's reading, or null if not in the schedule. */
export function getTodayReading(): DayReading | null {
  return getReading(todayKey())
}

/** Formats a YYYY-MM-DD string to a human-readable date. */
export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
