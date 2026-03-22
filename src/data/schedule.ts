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

import { type Reading, type ReadingType, type DayReading, type ParashaWeek } from './types'
export * from './types'

/**
 * Generates a "Listen to all" URL for a set of readings.
 * Example: https://www.biblegateway.com/audio/purevoice/niv/Exod.6,Ps.66,Luke.22
 */
export function getListenAllUrl(readings: { torah: Reading, tanakh?: Reading, nt: Reading }): string {
  const parts = [readings.torah, readings.tanakh, readings.nt]
    .filter((r): r is Reading => !!r)
    .flatMap(r => {
      // Extract book abbreviation from the individual URL if possible.
      // We parse the audioUrl constructed as `.../niv/Abbr.Chapter`
      if (!r.audioUrl) return []
      
      const match = r.audioUrl.match(/\/niv\/([^/]+)$/)
      if (!match) return []
      
      const file = match[1] // e.g. "Lev.4,Lev.5"
      // Since audioUrl is already comma-separated for multi-chapter readings (e.g. "Lev.4,Lev.5"),
      // we can just return it directly.
      return [file]
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

/**
 * Generates a "Commentary" URL for a reading (Sefaria or Luchot).
 */
export function getCommentaryUrl(reading: Reading, type: ReadingType): string {
  if (type === 'nt') {
    return `https://delitzsch.luchot.org/texts/${reading.label}`
  }
  
  const ref = reading.label
    .replace(/\s*[–-]\s*/g, '-')
    .replace(/:/g, '.')
    .replace(/ /g, '_')
  
  return `https://www.sefaria.org/${ref}?lang=bi&with=all&lang2=en`
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
