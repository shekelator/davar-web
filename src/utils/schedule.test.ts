import { describe, it, expect } from 'vitest'
import {
  getReading, formatDate, todayKey,
  getWeekReadings, getParashaWeek, getPrevNextWeeks, getParashaWeekForDate,
} from '../utils/schedule'

describe('getReading', () => {
  it('returns a reading for a known date', () => {
    const r = getReading('2026-02-22')
    expect(r).not.toBeNull()
    expect(r?.readings.torah.book).toBe('Exodus')
    expect(r?.parashaSlug).toBe('vayakhel-pekudei')
  })

  it('returns null for an unknown date', () => {
    expect(getReading('1900-01-01')).toBeNull()
  })
})

describe('getParashaWeek', () => {
  it('returns week metadata for a known slug', () => {
    const week = getParashaWeek('vayakhel-pekudei')
    expect(week).not.toBeNull()
    expect(week?.name).toBe('Vayakhel-Pekudei')
  })

  it('returns null for an unknown slug', () => {
    expect(getParashaWeek('not-a-parasha')).toBeNull()
  })
})

describe('getWeekReadings', () => {
  it('returns all 7 days for a week', () => {
    const days = getWeekReadings('vayakhel-pekudei')
    expect(days).toHaveLength(7)
    expect(days[0].date).toBe('2026-02-22')
    expect(days[6].date).toBe('2026-02-28')
  })
})

describe('getPrevNextWeeks', () => {
  it('returns null prev for the first week', () => {
    const { prev, next } = getPrevNextWeeks('vayakhel-pekudei')
    expect(prev).toBeNull()
    expect(next?.slug).toBe('tzav')
  })

  it('returns null next for the last week', () => {
    const { prev, next } = getPrevNextWeeks('tzav')
    expect(prev?.slug).toBe('vayakhel-pekudei')
    expect(next).toBeNull()
  })
})

describe('getParashaWeekForDate', () => {
  it('finds the week for a date', () => {
    expect(getParashaWeekForDate('2026-03-04')?.slug).toBe('tzav')
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
