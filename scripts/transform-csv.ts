import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Resolve __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const CSV_PATH = path.resolve(__dirname, '../daily-davar-schedule-5786.csv')
const OUT_PATH = path.resolve(__dirname, '../src/data/schedule-5786.ts')

// Book name normalization map (CSV string -> BibleGateway slug-friendly name)
const BOOKS: Record<string, string> = {
  'Gen': 'Genesis', 'Exodus': 'Exodus', 'Leviticus': 'Leviticus', 'Numbers': 'Numbers', 'Deuteronomy': 'Deuteronomy',
  'Joshua': 'Joshua', 'Judges': 'Judges', '1 Sam': '1 Samuel', '2 Sam': '2 Samuel',
  '1 Kings': '1 Kings', '2 Kings': '2 Kings', 'Isaiah': 'Isaiah', 'Jeremiah': 'Jeremiah',
  'Ezekiel': 'Ezekiel', 'Hosea': 'Hosea', 'Joel': 'Joel', 'Amos': 'Amos', 'Obadiah': 'Obadiah',
  'Jonah': 'Jonah', 'Micah': 'Micah', 'Nahum': 'Nahum', 'Habakkuk': 'Habakkuk',
  'Zephaniah': 'Zephaniah', 'Haggai': 'Haggai', 'Zechariah': 'Zechariah', 'Malachi': 'Malachi',
  'Psalms': 'Psalms', 'Proverbs': 'Proverbs', 'Job': 'Job', 'Song': 'Song of Songs',
  'Ruth': 'Ruth', 'Lamentations': 'Lamentations', 'Ecclesiastes': 'Ecclesiastes',
  'Esther': 'Esther', 'Daniel': 'Daniel', 'Ezra': 'Ezra', 'Nehemiah': 'Nehemiah',
  '1 Chron': '1 Chronicles', '2 Chron': '2 Chronicles',
  'Matthew': 'Matthew', 'Mark': 'Mark', 'Luke': 'Luke', 'John': 'John', 'Acts': 'Acts',
  'Romans': 'Romans', '1 Cor': '1 Corinthians', '2 Cor': '2 Corinthians', 'Galatians': 'Galatians',
  'Ephesians': 'Ephesians', 'Philippians': 'Philippians', 'Colossians': 'Colossians',
  '1 Thess': '1 Thessalonians', '2 Thess': '2 Thessalonians', '1 Tim': '1 Timothy',
  '2 Tim': '2 Timothy', 'Titus': 'Titus', 'Philemon': 'Philemon', 'Hebrews': 'Hebrews',
  'James': 'James', '1 Peter': '1 Peter', '2 Peter': '2 Peter', '1 John': '1 John',
  '2 John': '2 John', '3 John': '3 John', 'Jude': 'Jude', 'Revelation': 'Revelation'
}

function bgAudio(book: string, chapter: number): string {
  const slug = (book || '').toLowerCase().replace(/\s+/g, '-')
  return `https://www.biblegateway.com/audio/mclean/esv/${slug}/${chapter}`
}

function parseBookChapter(raw: string): { label: string, book: string, chapter: number } | null {
  if (!raw || raw.trim() === '') return null
  
  // Clean up "HAF." prefix and "BERESHIT:" if passed directly
  let clean = raw.replace(/^HAF[:.]?\s*/i, '').trim()
  
  // If it starts with a parasha name (uppercase + colon), strip it
  if (clean.match(/^[A-Z-]+:\s/)) {
    clean = clean.split(':').slice(1).join(':').trim()
  }

  // Match "Book Chapter:Verse" or "Book Chapter" or "1 Book Chapter"
  // Regex: 
  // 1. (?:(\d\s)?[A-Za-z.]+) -> optional number prefix + book name (e.g. "1 Kings", "Gen.")
  // 2. \s+(\d+) -> space + chapter number
  const match = clean.match(/^((?:\d\s)?[A-Za-z.]+)\.?\s+(\d+)/)
  
  if (!match) {
    // Fallback: try to just get the book name if we can't parse chapter
    // e.g. "Obadiah" (1 chapter book, rarely cited with chapter 1)
    return { label: clean, book: clean.replace(/\.$/, ''), chapter: 1 }
  }

  let bookKey = match[1].replace(/\.$/, '') // remove trailing dot
  
  // Normalize book name
  let book = BOOKS[bookKey]
  if (!book) {
    // Try fuzzy match or known variations
    if (bookKey === 'Gen') book = 'Genesis'
    if (bookKey === 'Lev') book = 'Leviticus'
    if (bookKey === 'Deut') book = 'Deuteronomy'
    else book = bookKey
  }
  
  const chapter = parseInt(match[2], 10)

  return { label: clean, book, chapter }
}

function parseDate(raw: string): string {
  const parts = raw.split('-')
  if (parts.length !== 3) return ''
  const m = parseInt(parts[0], 10)
  const d = parseInt(parts[1], 10)
  const y = parseInt(parts[2], 10)
  const year = y < 100 ? 2000 + y : y // assume 20xx
  return `${year}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`
}

function parseCSV() {
  const content = fs.readFileSync(CSV_PATH, 'utf-8')
  // Split lines, handle \r\n
  const lines = content.replace(/\r\n/g, '\n').split('\n').slice(1) // skip header

  const dayStrings: string[] = []
  let currentParashaSlug = ''
  let currentParashaName = ''

  for (const line of lines) {
    // Simple CSV split (assumes no commas in quoted fields, which holds for this file)
    const cols = line.split(',').map(s => s.trim())
    
    // Column map based on header:
    // 0: Date, 1: TORAH, 2: HAFTARAH, 3: BESORA, ...
    if (cols.length < 4) continue 

    const dateStr = cols[0]
    // Skip empty dates or malformed lines
    if (!dateStr || !dateStr.includes('-')) continue 

    // Remove surrounding quotes if CSV parser left them
    const stripQuotes = (s: string) => s.replace(/^"|"$/g, '').trim()
    const torahRaw = stripQuotes(cols[1] || '')
    const haftarahRaw = stripQuotes(cols[2] || '')
    const ntRaw = stripQuotes(cols[3] || '')

    // Skip Saturday rows (empty readings)
    if (!torahRaw && !haftarahRaw && !ntRaw) continue

    // Detect Parasha change in TORAH column (e.g. "BERESHIT: Gen...")
    let torahLabel = torahRaw
    let isParashaStart = false
    
    if (torahRaw.includes(':')) {
      const parts = torahRaw.split(':')
      const candidateName = parts[0].trim()
      // Heuristic: Uppercase name, >3 chars (e.g. NOACH, LECH-LECHA)
      // Check if it looks like a Parasha name
      if (candidateName === candidateName.toUpperCase() && candidateName.length > 2 && !candidateName.startsWith('GEN')) {
        currentParashaName = candidateName
          .toLowerCase()
          .split('-')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1)) // Title Case
          .join('-')
        
        currentParashaSlug = currentParashaName.toLowerCase().replace(/\s+/g, '-')
        torahLabel = parts.slice(1).join(':').trim()
        isParashaStart = true
      }
    }

    const date = parseDate(dateStr)
    const torah = parseBookChapter(torahLabel)
    const haftarah = parseBookChapter(haftarahRaw)
    const nt = parseBookChapter(ntRaw)

    // Construct the object string for the TS file
    // We intentionally quote keys/values to produce valid JS/TS
    const dayObj = `{
    date: '${date}',
    parashaSlug: '${currentParashaSlug}',
    ${isParashaStart ? `torahPortion: '${currentParashaName}',` : ''}
    readings: {
      torah: { 
        label: "${torah?.label.replace(/"/g, '\\"')}", 
        book: "${torah?.book}", 
        chapter: ${torah?.chapter || 1}, 
        audioUrl: bgAudio("${torah?.book}", ${torah?.chapter || 1}) 
      },
      ${haftarah && haftarah.book ? `tanakh: { 
        label: "${haftarah.label.replace(/"/g, '\\"')}", 
        book: "${haftarah.book}", 
        chapter: ${haftarah.chapter || 1}, 
        audioUrl: bgAudio("${haftarah.book}", ${haftarah.chapter || 1}) 
      },` : ''}
      nt: { 
        label: "${nt?.label.replace(/"/g, '\\"')}", 
        book: "${nt?.book}", 
        chapter: ${nt?.chapter || 1}, 
        audioUrl: bgAudio("${nt?.book}", ${nt?.chapter || 1}) 
      },
    },
  }`
    dayStrings.push(dayObj)
  }

  const output = `import { type DayReading } from './schedule'

function bgAudio(book: string, chapter: number): string {
  const slug = book.toLowerCase().replace(/\\s+/g, '-')
  return \`https://www.biblegateway.com/audio/mclean/esv/\${slug}/\${chapter}\`
}

export const schedule5786: DayReading[] = [
  ${dayStrings.join(',\n  ')}
]
`

  fs.writeFileSync(OUT_PATH, output)
  console.log(`Generated ${dayStrings.length} days to ${OUT_PATH}`)
}

parseCSV()
