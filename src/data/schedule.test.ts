import { describe, it, expect } from 'vitest'
import { getCommentaryUrl } from './schedule'

describe('getCommentaryUrl', () => {
  it('handles standard references', () => {
    const reading = { label: 'Genesis 1:1', book: 'Genesis', chapter: 1 }
    expect(getCommentaryUrl(reading, 'torah')).toBe('https://www.sefaria.org/Genesis_1.1?lang=bi&with=all&lang2=en')
  })

  it('handles ranges', () => {
    const reading = { label: 'Genesis 1:1-2:3', book: 'Genesis', chapter: 1 }
    expect(getCommentaryUrl(reading, 'torah')).toBe('https://www.sefaria.org/Genesis_1.1-2.3?lang=bi&with=all&lang2=en')
  })

  it('handles ranges with spaces around hyphen', () => {
    const reading = { label: 'Exodus 35:1 - 35:29', book: 'Exodus', chapter: 35 }
    // This is currently broken, producing Exodus.35.1.-.35.29
    // We expect it to be normalized
    expect(getCommentaryUrl(reading, 'torah')).toBe('https://www.sefaria.org/Exodus_35.1-35.29?lang=bi&with=all&lang2=en')
  })

  it('handles en-dashes', () => {
    const reading = { label: 'Genesis 1:1–2:3', book: 'Genesis', chapter: 1 }
    expect(getCommentaryUrl(reading, 'torah')).toBe('https://www.sefaria.org/Genesis_1.1-2.3?lang=bi&with=all&lang2=en')
  })

  it('handles books with spaces', () => {
    const reading = { label: '1 Kings 1:1', book: '1 Kings', chapter: 1 }
    // Sefaria prefers underscores for spaces in book names
    expect(getCommentaryUrl(reading, 'tanakh')).toBe('https://www.sefaria.org/1_Kings_1.1?lang=bi&with=all&lang2=en')
  })

  it('handles NT readings (Luchot)', () => {
    const reading = { label: 'Matthew 1:1', book: 'Matthew', chapter: 1 }
    expect(getCommentaryUrl(reading, 'nt')).toBe('https://delitzsch.luchot.org/texts/Matthew 1:1')
  })
})
