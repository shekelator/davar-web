import { describe, it, expect } from 'vitest'
import { getReading, formatDate, todayKey } from '../utils/schedule'

describe('getReading', () => {
  it('returns a reading for a known date', () => {
    const r = getReading('2026-02-22')
    expect(r).not.toBeNull()
    expect(r?.readings.torah.book).toBe('Exodus')
  })

  it('returns null for an unknown date', () => {
    expect(getReading('1900-01-01')).toBeNull()
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
