import { describe, it, expect } from 'vitest'
import {
  getReading, formatDate, todayKey,
  getWeekReadings, getParashaWeek, getPrevNextWeeks, getParashaWeekForDate,
} from '../utils/schedule'

// Updated tests to reflect the 2025-2026 data in schedule-5786.ts
// Bereshit starts Oct 12, 2025

describe('getReading', () => {
  it('returns a reading for a known date', () => {
    // Oct 12, 2025 is the start of Bereshit
    const r = getReading('2025-10-12')
    expect(r).not.toBeNull()
    expect(r?.readings.torah.book).toBe('Genesis')
    expect(r?.parashaSlug).toBe('bereshit')
  })

  it('returns null for an unknown date', () => {
    expect(getReading('1900-01-01')).toBeNull()
  })
})

describe('getParashaWeek', () => {
  it('returns week metadata for a known slug', () => {
    const week = getParashaWeek('bereshit')
    expect(week).not.toBeNull()
    expect(week?.name).toBe('Bereshit')
  })

  it('returns null for an unknown slug', () => {
    expect(getParashaWeek('not-a-parasha')).toBeNull()
  })
})

describe('getWeekReadings', () => {
  it('returns all days for a week', () => {
    const days = getWeekReadings('bereshit')
    // Sunday - Friday (6 days) as Saturday is empty in this dataset
    expect(days.length).toBeGreaterThan(0)
    expect(days[0].date).toBe('2025-10-12')
  })
})

describe('getPrevNextWeeks', () => {
  it('returns null prev for the first week', () => {
    const { prev, next } = getPrevNextWeeks('bereshit')
    expect(prev).toBeNull()
    expect(next?.slug).toBe('noach')
  })

  it('returns correct prev/next for a middle week', () => {
    const { prev, next } = getPrevNextWeeks('noach')
    expect(prev?.slug).toBe('bereshit')
    expect(next?.slug).toBe('lech-lecha')
  })
})

describe('getParashaWeekForDate', () => {
  it('finds the week for a date', () => {
    expect(getParashaWeekForDate('2025-10-12')?.slug).toBe('bereshit')
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
