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

export interface Reading {
  label: string        // e.g. "Genesis 1:1–2:3"
  book: string         // e.g. "Genesis"
  chapter: number      // primary chapter (for audio link)
  verses?: string      // e.g. "1-2:3" (optional, for display)
  audioUrl?: string    // BibleGateway chapter audio URL
}

export interface DayReading {
  date: string         // YYYY-MM-DD
  torahPortion?: string // e.g. "Bereishit"
  readings: {
    torah: Reading
    tanakh?: Reading   // additional Tanakh reading (Prophets / Writings)
    nt: Reading
  }
}

function bgAudio(book: string, chapter: number): string {
  const slug = book.toLowerCase().replace(/\s+/g, '-')
  return `https://www.biblegateway.com/audio/mclean/esv/${slug}/${chapter}`
}

// Placeholder schedule — 30 days starting 2026-02-22.
// Replace with generated/imported data when the full schedule is available.
export const schedule: DayReading[] = [
  {
    date: '2026-02-22',
    torahPortion: 'Ki Tisa',
    readings: {
      torah: { label: 'Exodus 30:11–31:17', book: 'Exodus', chapter: 30, verses: '11-17', audioUrl: bgAudio('Exodus', 30) },
      tanakh: { label: 'Ezekiel 36:16–38', book: 'Ezekiel', chapter: 36, audioUrl: bgAudio('Ezekiel', 36) },
      nt: { label: 'Luke 1:1–25', book: 'Luke', chapter: 1, audioUrl: bgAudio('Luke', 1) },
    },
  },
  {
    date: '2026-02-23',
    readings: {
      torah: { label: 'Exodus 31:18–33:11', book: 'Exodus', chapter: 31, audioUrl: bgAudio('Exodus', 31) },
      nt: { label: 'Luke 1:26–56', book: 'Luke', chapter: 1, audioUrl: bgAudio('Luke', 1) },
    },
  },
  {
    date: '2026-02-24',
    readings: {
      torah: { label: 'Exodus 33:12–34:35', book: 'Exodus', chapter: 33, audioUrl: bgAudio('Exodus', 33) },
      nt: { label: 'Luke 1:57–80', book: 'Luke', chapter: 1, audioUrl: bgAudio('Luke', 1) },
    },
  },
  {
    date: '2026-02-25',
    readings: {
      torah: { label: 'Exodus 35:1–36:7', book: 'Exodus', chapter: 35, audioUrl: bgAudio('Exodus', 35) },
      nt: { label: 'Luke 2:1–21', book: 'Luke', chapter: 2, audioUrl: bgAudio('Luke', 2) },
    },
  },
  {
    date: '2026-02-26',
    readings: {
      torah: { label: 'Exodus 36:8–37:29', book: 'Exodus', chapter: 36, audioUrl: bgAudio('Exodus', 36) },
      nt: { label: 'Luke 2:22–52', book: 'Luke', chapter: 2, audioUrl: bgAudio('Luke', 2) },
    },
  },
  {
    date: '2026-02-27',
    readings: {
      torah: { label: 'Exodus 38:1–39:21', book: 'Exodus', chapter: 38, audioUrl: bgAudio('Exodus', 38) },
      nt: { label: 'Luke 3:1–22', book: 'Luke', chapter: 3, audioUrl: bgAudio('Luke', 3) },
    },
  },
  {
    date: '2026-02-28',
    torahPortion: 'Vayakhel-Pekudei',
    readings: {
      torah: { label: 'Exodus 39:22–40:38', book: 'Exodus', chapter: 39, audioUrl: bgAudio('Exodus', 39) },
      tanakh: { label: '1 Kings 7:40–8:21', book: '1 Kings', chapter: 7, audioUrl: bgAudio('1-kings', 7) },
      nt: { label: 'Luke 3:23–38', book: 'Luke', chapter: 3, audioUrl: bgAudio('Luke', 3) },
    },
  },
  {
    date: '2026-03-01',
    readings: {
      torah: { label: 'Leviticus 1:1–2:16', book: 'Leviticus', chapter: 1, audioUrl: bgAudio('Leviticus', 1) },
      nt: { label: 'Luke 4:1–30', book: 'Luke', chapter: 4, audioUrl: bgAudio('Luke', 4) },
    },
  },
  {
    date: '2026-03-02',
    readings: {
      torah: { label: 'Leviticus 3:1–4:26', book: 'Leviticus', chapter: 3, audioUrl: bgAudio('Leviticus', 3) },
      nt: { label: 'Luke 4:31–44', book: 'Luke', chapter: 4, audioUrl: bgAudio('Luke', 4) },
    },
  },
  {
    date: '2026-03-03',
    readings: {
      torah: { label: 'Leviticus 4:27–5:26', book: 'Leviticus', chapter: 4, audioUrl: bgAudio('Leviticus', 4) },
      nt: { label: 'Luke 5:1–26', book: 'Luke', chapter: 5, audioUrl: bgAudio('Luke', 5) },
    },
  },
  {
    date: '2026-03-04',
    readings: {
      torah: { label: 'Leviticus 6:1–7:21', book: 'Leviticus', chapter: 6, audioUrl: bgAudio('Leviticus', 6) },
      nt: { label: 'Luke 5:27–39', book: 'Luke', chapter: 5, audioUrl: bgAudio('Luke', 5) },
    },
  },
  {
    date: '2026-03-05',
    readings: {
      torah: { label: 'Leviticus 7:22–8:36', book: 'Leviticus', chapter: 7, audioUrl: bgAudio('Leviticus', 7) },
      nt: { label: 'Luke 6:1–26', book: 'Luke', chapter: 6, audioUrl: bgAudio('Luke', 6) },
    },
  },
  {
    date: '2026-03-06',
    readings: {
      torah: { label: 'Leviticus 9:1–10:20', book: 'Leviticus', chapter: 9, audioUrl: bgAudio('Leviticus', 9) },
      nt: { label: 'Luke 6:27–49', book: 'Luke', chapter: 6, audioUrl: bgAudio('Luke', 6) },
    },
  },
  {
    date: '2026-03-07',
    torahPortion: 'Tzav',
    readings: {
      torah: { label: 'Leviticus 11:1–12:8', book: 'Leviticus', chapter: 11, audioUrl: bgAudio('Leviticus', 11) },
      tanakh: { label: 'Jeremiah 7:21–8:3', book: 'Jeremiah', chapter: 7, audioUrl: bgAudio('Jeremiah', 7) },
      nt: { label: 'Luke 7:1–35', book: 'Luke', chapter: 7, audioUrl: bgAudio('Luke', 7) },
    },
  },
]
