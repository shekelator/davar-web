import { schedule5786 } from './schedule-5786'

/**
 * Reading schedule data.
 *
 * Each entry maps a calendar date (YYYY-MM-DD) to that day's readings.
 * Torah portions are sourced from hebcal.com.
 * The JPS English translation aligned to the Hebrew text is authoritative
 * when Hebrew and English chapter/verse numbering differ.
 *
 * BibleGateway audio links are chapter-level; multiple days sharing a chapter
 * will link to the full chapter.
 */

export interface Reading {
  label: string        // e.g. "Genesis 1:1–2:3"
  book: string         // e.g. "Genesis"
  chapter: number      // primary chapter (for audio link)
  verses?: string      // e.g. "1-2:3" (optional, for display)
  audioUrl?: string    // BibleGateway chapter audio URL
}

export interface DayReading {
  date: string         // YYYY-MM-DD
  parashaSlug: string  // links this day to its parasha week
  torahPortion?: string // parasha name, set only on Shabbat (Saturday)
  readings: {
    torah: Reading
    tanakh?: Reading   // Haftarah reading (Prophets / Writings), set on Shabbat
    nt: Reading
  }
}

/** Metadata for a parasha week (Sunday–Saturday). */
export interface ParashaWeek {
  slug: string       // URL-safe identifier, e.g. "vayakhel-pekudei"
  name: string       // Display name, e.g. "Vayakhel-Pekudei"
  startDate: string  // YYYY-MM-DD (Sunday)
  endDate: string    // YYYY-MM-DD (Saturday)
}

export const schedule: DayReading[] = [
  ...schedule5786,
]

// Extract unique weeks from the schedule
const uniqueSlugs = Array.from(new Set(schedule.map(d => d.parashaSlug))).filter(Boolean)

export const parashaWeeks: ParashaWeek[] = uniqueSlugs.map(slug => {
  const days = schedule.filter(d => d.parashaSlug === slug)
  // Sort by date just in case
  days.sort((a, b) => a.date.localeCompare(b.date))
  
  if (days.length === 0) return null
  
  // Find the day that has the torahPortion name (usually Sunday in this dataset)
  // or fallback to Title Case of slug
  const namedDay = days.find(d => d.torahPortion)
  const name = namedDay?.torahPortion || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('-')

  return {
    slug,
    name,
    startDate: days[0].date,
    endDate: days[days.length - 1].date
  }
}).filter((w): w is ParashaWeek => w !== null)


