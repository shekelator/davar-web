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
  audioUrl?: string    // BibleGateway audio URL (chapter or multi-chapter)
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

/**
 * Generates a "Listen to all" URL for a set of readings.
 * Example: https://www.biblegateway.com/audio/purevoice/niv/Exod.6,Ps.66,Luke.22
 */
export function getListenAllUrl(readings: { torah: Reading, tanakh?: Reading, nt: Reading }): string {
  const parts = [readings.torah, readings.tanakh, readings.nt]
    .filter((r): r is Reading => !!r)
    .map(r => {
      // Extract book abbreviation and chapter from the individual URL if possible,
      // or reconstruct it. Since we don't export the abbreviation map, we'll
      // parse the audioUrl which we know is constructed as `.../niv/Abbr.Chapter`
      if (r.audioUrl) {
        const match = r.audioUrl.match(/\/niv\/([^/]+)$/)
        if (match) return match[1]
      }
      return ''
    })
    .filter(Boolean)
  
  return `https://www.biblegateway.com/audio/purevoice/niv/${parts.join(',')}`
}

/**
 * Generates a "Read all" URL for a set of readings (TLV version).
 * Example: https://www.biblegateway.com/passage/?search=Exodus%2029%3A38-46%2C%20Psalm%20103%2C%20Acts%2011&version=TLV
 */
export function getReadAllUrl(readings: { torah: Reading, tanakh?: Reading, nt: Reading }): string {
  const parts = [readings.torah, readings.tanakh, readings.nt]
    .filter((r): r is Reading => !!r)
    .map(r => r.label)
  
  const search = encodeURIComponent(parts.join(', '))
  return `https://www.biblegateway.com/passage/?search=${search}&version=TLV`
}

/**
 * Generates a "Read" URL for a single reading (TLV version).
 */
export function getReadUrl(reading: Reading): string {
  const search = encodeURIComponent(reading.label)
  return `https://www.biblegateway.com/passage/?search=${search}&version=TLV`
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
