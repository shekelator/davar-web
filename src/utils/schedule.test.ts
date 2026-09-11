import { describe, it, expect } from 'vitest'
import {
  getReading, formatDate, todayKey,
  getWeekReadings, getParashaWeek, getPrevNextWeeks, getParashaWeekForDate,
} from '../utils/schedule'
import { schedule, parashaWeeks } from '../data/schedule'

const firstDay = schedule[0]
const firstWeek = parashaWeeks[0]
const secondWeek = parashaWeeks[1]

describe('getReading', () => {
  it('returns a reading for a known date', () => {
    const r = getReading(firstDay.date)
    expect(r).not.toBeNull()
    expect(r?.date).toBe(firstDay.date)
    expect(r?.parashaSlug).toBe(firstDay.parashaSlug)
  })

  it('returns null for an unknown date', () => {
    expect(getReading('1900-01-01')).toBeNull()
  })
})

describe('getParashaWeek', () => {
  it('returns week metadata for a known slug', () => {
    const week = getParashaWeek(firstWeek.slug)
    expect(week).not.toBeNull()
    expect(week?.slug).toBe(firstWeek.slug)
    expect(week?.name).toBeTruthy()
  })

  it('returns null for an unknown slug', () => {
    expect(getParashaWeek('not-a-parasha')).toBeNull()
  })
})

describe('getWeekReadings', () => {
  it('returns all days for a week', () => {
    const days = getWeekReadings(firstWeek.slug)
    expect(days.length).toBeGreaterThan(0)
    expect(days[0].parashaSlug).toBe(firstWeek.slug)
  })
})

describe('getPrevNextWeeks', () => {
  it.skip('returns null prev for the first week', () => {
    const { prev, next } = getPrevNextWeeks('bamidbar')
    expect(prev).toBeNull()
    expect(next?.slug).toBe('shavuot')
  })

  it('returns correct prev/next for a middle week', () => {
    if (!secondWeek) {
      expect(parashaWeeks.length).toBeGreaterThan(1)
      return
    }

    const { prev, next } = getPrevNextWeeks(secondWeek.slug)
    expect(prev?.slug).toBe(firstWeek.slug)
    expect(next).not.toBeNull()
  })
})

describe('getParashaWeekForDate', () => {
  it.skip('finds the week for a date', () => {
    expect(getParashaWeekForDate('2026-07-12')?.slug).toBe('devarim')
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
