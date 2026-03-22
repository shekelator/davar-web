export type ReadingType = 'torah' | 'tanakh' | 'nt'

export interface Reading {
  label: string        // e.g. "Genesis 1:1–2:3"
  book: string         // e.g. "Genesis"
  chapter: number      // primary chapter (for audio link)
  verses?: string      // e.g. "1-2:3" (optional, for display)
  audioUrl?: string    // BibleGateway audio URL (chapter or multi-chapter)
}

export interface DayReading {
  date: string         // YYYY-MM-DD
  parashaSlug: string  // links this day to its parasha week
  torahPortion?: string // parasha name, set only on Shabbat (Saturday)
  readings: {
    torah: Reading
    tanakh?: Reading   // Haftarah reading (Prophets / Writings), set on Shabbat
    nt: Reading
  }
}

/** Metadata for a parasha week (Sunday–Saturday). */
export interface ParashaWeek {
  slug: string       // URL-safe identifier, e.g. "vayakhel-pekudei"
  name: string       // Display name, e.g. "Vayakhel-Pekudei"
  startDate: string  // YYYY-MM-DD (Sunday)
  endDate: string    // YYYY-MM-DD (Saturday)
}
