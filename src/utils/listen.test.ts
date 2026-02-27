import { describe, it, expect } from 'vitest'
import { getListenAllUrl, type Reading } from '../data/schedule'

function r(book: string, chapter: number, url: string): Reading {
  return { label: `${book} ${chapter}`, book, chapter, audioUrl: url }
}

describe('getListenAllUrl', () => {
  it('combines multiple readings into a single biblegateway url', () => {
    const torah = r('Exodus', 6, 'https://www.biblegateway.com/audio/purevoice/niv/Exod.6')
    const tanakh = r('Psalms', 66, 'https://www.biblegateway.com/audio/purevoice/niv/Ps.66')
    const nt = r('Luke', 22, 'https://www.biblegateway.com/audio/purevoice/niv/Luke.22')

    const url = getListenAllUrl({ torah, tanakh, nt })
    expect(url).toBe('https://www.biblegateway.com/audio/purevoice/niv/Exod.6,Ps.66,Luke.22')
  })

  it('handles missing tanakh reading', () => {
    const torah = r('Exodus', 6, 'https://www.biblegateway.com/audio/purevoice/niv/Exod.6')
    const nt = r('Luke', 22, 'https://www.biblegateway.com/audio/purevoice/niv/Luke.22')

    const url = getListenAllUrl({ torah, nt })
    expect(url).toBe('https://www.biblegateway.com/audio/purevoice/niv/Exod.6,Luke.22')
  })
})
