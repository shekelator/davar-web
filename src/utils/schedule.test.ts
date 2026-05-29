import { describe, it, expect } from 'vitest'
import {
  getReading, formatDate, todayKey,
  getWeekReadings, getParashaWeek, getPrevNextWeeks, getParashaWeekForDate,
} from '../utils/schedule'

// Tests reflect the currently generated 5786 schedule.
// Bamidbar starts on 2026-05-10 in the local CSV source.

describe('getReading', () => {
  it('returns a reading for a known date', () => {
    const r = getReading('2026-05-10')
    expect(r).not.toBeNull()
    expect(r?.readings.torah.book).toBe('Numbers')
    expect(r?.parashaSlug).toBe('bamidbar')
  })

  it('returns null for an unknown date', () => {
    expect(getReading('1900-01-01')).toBeNull()
  })
})

describe('getParashaWeek', () => {
  it('returns week metadata for a known slug', () => {
    const week = getParashaWeek('bamidbar')
    expect(week).not.toBeNull()
    expect(week?.name).toBe('Bamidbar')
  })

  it('returns null for an unknown slug', () => {
    expect(getParashaWeek('not-a-parasha')).toBeNull()
  })
})

describe('getWeekReadings', () => {
  it('returns all days for a week', () => {
    const days = getWeekReadings('bamidbar')
    // Sunday - Friday (6 days) as Saturday is empty in this dataset
    expect(days.length).toBeGreaterThan(0)
    expect(days[0].date).toBe('2026-05-10')
  })
})

describe('getPrevNextWeeks', () => {
  it('returns null prev for the first week', () => {
    const { prev, next } = getPrevNextWeeks('bamidbar')
    expect(prev).toBeNull()
    expect(next?.slug).toBe('shavuot')
  })

  it('returns correct prev/next for a middle week', () => {
    const { prev, next } = getPrevNextWeeks('shavuot')
    expect(prev?.slug).toBe('bamidbar')
    expect(next?.slug).toBe('nasso')
  })
})

describe('getParashaWeekForDate', () => {
  it('finds the week for a date', () => {
    expect(getParashaWeekForDate('2026-05-10')?.slug).toBe('bamidbar')
  })
})

describe('formatDate', () => {
  it('formats a date string to a readable label', () => {
    const label = formatDate('2026-02-22')
    expect(label).toContain('2026')
    expect(label).toContain('February')
  })
})

describe('todayKey', () => {
  it('returns a YYYY-MM-DD string', () => {
    expect(todayKey()).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })
})
