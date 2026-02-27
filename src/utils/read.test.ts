import { describe, it, expect } from 'vitest'
import { getReadAllUrl, getReadUrl, type Reading } from '../data/schedule'

function r(label: string): Reading {
  // Only label matters for reading URLs
  return { label, book: '', chapter: 1 }
}

describe('getReadAllUrl', () => {
  it('combines multiple readings into a single biblegateway url', () => {
    const torah = r('Exodus 29:38-46')
    const tanakh = r('Psalm 103')
    const nt = r('Acts 11')

    const url = getReadAllUrl({ torah, tanakh, nt })
    expect(url).toBe('https://www.biblegateway.com/passage/?search=Exodus%2029%3A38-46%2C%20Psalm%20103%2C%20Acts%2011&version=TLV')
  })

  it('handles missing tanakh reading', () => {
    const torah = r('Exodus 29:38-46')
    const nt = r('Acts 11')

    const url = getReadAllUrl({ torah, nt })
    expect(url).toBe('https://www.biblegateway.com/passage/?search=Exodus%2029%3A38-46%2C%20Acts%2011&version=TLV')
  })
})

describe('getReadUrl', () => {
  it('generates a single reading url', () => {
    const reading = r('Exodus 29:38-46')
    const url = getReadUrl(reading)
    expect(url).toBe('https://www.biblegateway.com/passage/?search=Exodus%2029%3A38-46&version=TLV')
  })
})
