import { describe, expect, it } from 'vitest'

import { bgAudio, getAudioReferences, parseBookChapter } from './transform-csv'

describe('transform-csv audio generation', () => {
  it('keeps cross-book haftarah references attached to the right books', () => {
    expect(bgAudio('Amos', 9, 'Amos 9:7-15, Ezekiel 20:2-20')).toBe(
      'https://www.biblegateway.com/audio/purevoice/niv/Amos.9,Ezek.20',
    )
  })

  it('keeps same-book follow-on segments on the original book', () => {
    expect(getAudioReferences('Isaiah', 27, 'Isaiah 27:6-28:13, 29:22-23')).toEqual([
      'Isa.27',
      'Isa.28',
      'Isa.29',
    ])
  })

  it('normalizes abbreviated and prefix-heavy Torah labels', () => {
    expect(parseBookChapter('SHEMOT: EX 1:1-2:10')).toEqual({
      label: 'EX 1:1-2:10',
      book: 'Exodus',
      chapter: 1,
    })
    expect(parseBookChapter('VAYIGASH Gen 44:18-44:30&44:31-45:7')).toEqual({
      label: 'Gen 44:18-44:30&44:31-45:7',
      book: 'Genesis',
      chapter: 44,
    })
    expect(parseBookChapter("SH'LACH: Numbers 13:1-14:7")).toEqual({
      label: 'Numbers 13:1-14:7',
      book: 'Numbers',
      chapter: 13,
    })
  })

  it('parses no-space and alternate spelling references', () => {
    expect(parseBookChapter('Gen.45:8-18')).toEqual({
      label: 'Gen.45:8-18',
      book: 'Genesis',
      chapter: 45,
    })
    expect(parseBookChapter('HAF:Zachariah 2:14-4:7')).toEqual({
      label: 'Zachariah 2:14-4:7',
      book: 'Zechariah',
      chapter: 2,
    })
  })
})
