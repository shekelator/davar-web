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

const SINGLE_CHAPTER_BOOKS = new Set([
  'Obadiah', 'Philemon', 'Jude', '2 John', '3 John'
])

function getChapters(label: string, book: string, startChapter: number): number[] {
  if (!label) return [startChapter]
  if (SINGLE_CHAPTER_BOOKS.has(book)) return [startChapter]

  const chapters = new Set<number>()

  // Pattern 1: Colons indicate verses, so numbers preceding them are chapters
  // e.g. "Gen 1:1-2:3" -> captures "1" and "2"
  const colonMatches = label.matchAll(/(\d+):/g)
  let foundColons = false
  for (const match of colonMatches) {
    foundColons = true
    chapters.add(parseInt(match[1], 10))
  }

  if (foundColons) {
    return Array.from(chapters).sort((a, b) => a - b)
  }

  // Pattern 2: Range of chapters (e.g. "Joshua 1-2")
  // Extract the reference part (assumes it ends with numbers/dash)
  const match = label.match(/(\d+[\d\-\s]*)$/)
  if (match) {
    const ref = match[1]
    const rangeMatch = ref.match(/^(\d+)\s*-\s*(\d+)$/)
    if (rangeMatch) {
      const start = parseInt(rangeMatch[1], 10)
      const end = parseInt(rangeMatch[2], 10)
      // Sanity check: range shouldn't be too huge to avoid infinite loops on bad data
      if (end >= start && end - start < 150) {
        const result = []
        for (let i = start; i <= end; i++) result.push(i)
        return result
      }
    }
  }

  return [startChapter]
}

function bgAudio(book: string, startChapter: number, label: string): string {
  const slug = (book || '').toLowerCase().replace(/\s+/g, '-')
  // Check for abbreviations that need special handling
  let bookSlug = slug
  if (slug === 'gen') bookSlug = 'genesis'
  // Use purevoice/niv and simple dot format: Exod.6
  // Map full book names to BibleGateway abbreviations
  const abbr: Record<string, string> = {
    'genesis': 'Gen', 'exodus': 'Exod', 'leviticus': 'Lev', 'numbers': 'Num', 'deuteronomy': 'Deut',
    'joshua': 'Josh', 'judges': 'Judg', 'ruth': 'Ruth', '1-samuel': '1Sam', '2-samuel': '2Sam',
    '1-kings': '1Kgs', '2-kings': '2Kgs', '1-chronicles': '1Chr', '2-chronicles': '2Chr',
    'ezra': 'Ezra', 'nehemiah': 'Neh', 'esther': 'Esth', 'job': 'Job', 'psalms': 'Ps',
    'proverbs': 'Prov', 'ecclesiastes': 'Eccl', 'song-of-songs': 'Song', 'isaiah': 'Isa',
    'jeremiah': 'Jer', 'lamentations': 'Lam', 'ezekiel': 'Ezek', 'daniel': 'Dan',
    'hosea': 'Hos', 'joel': 'Joel', 'amos': 'Amos', 'obadiah': 'Obad', 'jonah': 'Jonah',
    'micah': 'Mic', 'nahum': 'Nah', 'habakkuk': 'Hab', 'zephaniah': 'Zeph', 'haggai': 'Hag',
    'zechariah': 'Zech', 'malachi': 'Mal',
    'matthew': 'Matt', 'mark': 'Mark', 'luke': 'Luke', 'john': 'John', 'acts': 'Acts',
    'romans': 'Rom', '1-corinthians': '1Cor', '2-corinthians': '2Cor', 'galatians': 'Gal',
    'ephesians': 'Eph', 'philippians': 'Phil', 'colossians': 'Col',
    '1-thessalonians': '1Thess', '2-thessalonians': '2Thess', '1-timothy': '1Tim',
    '2-timothy': '2Tim', 'titus': 'Titus', 'philemon': 'Phlm', 'hebrews': 'Heb',
    'james': 'Jas', '1-peter': '1Pet', '2-peter': '2Pet', '1-john': '1John',
    '2-john': '2John', '3-john': '3John', 'jude': 'Jude', 'revelation': 'Rev'
  }
  
  const ab = abbr[bookSlug] || bookSlug
  const chapters = getChapters(label, book, startChapter)
  
  return `https://www.biblegateway.com/audio/purevoice/niv/${chapters.map(c => `${ab}.${c}`).join(',')}`
}

function countAudioTexts(url: string): number {
  const match = url.match(/\/niv\/(.+)$/)
  if (!match) return 0
  return match[1].split(',').filter(s => /^[A-Za-z0-9]+\.\d+$/.test(s)).length
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

function splitCsvLine(line: string): string[] {
  const fields: string[] = []
  let current = ''
  let inQuotes = false
  for (const char of line) {
    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      fields.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }
  fields.push(current.trim())
  return fields
}

function parseCSV() {
  const content = fs.readFileSync(CSV_PATH, 'utf-8')
  // Split lines, handle \r\n
  const lines = content.replace(/\r\n/g, '\n').split('\n').slice(1) // skip header

  const dayStrings: string[] = []
  let currentParashaSlug = ''
  let currentParashaName = ''

  for (const line of lines) {
    const cols = splitCsvLine(line)
    
    // Column map based on header:
    // 0: Date, 1: TORAH, 2: HAFTARAH, 3: BESORA, ...
    if (cols.length < 4) continue 

    const dateStr = cols[0]
    // Skip empty dates or malformed lines
    if (!dateStr || !dateStr.includes('-')) continue 

    // Remove surrounding quotes if CSV parser left them
    const stripQuotes = (s: string) => s.replace(/^"|"$/g, '').trim()
    const torahRaw = stripQuotes(cols[1] || '').replace(/MAF:/g, ';')
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
    const escapeSingle = (s: string) => s.replace(/'/g, "\\'")
    
    const dayObj = `{
    date: '${date}',
    parashaSlug: '${escapeSingle(currentParashaSlug)}',
    ${isParashaStart ? `torahPortion: '${escapeSingle(currentParashaName)}',` : ''}
    readings: {
      torah: { 
        label: "${torah?.label.replace(/"/g, '\\"')}", 
        book: "${torah?.book}", 
        chapter: ${torah?.chapter || 1}, 
        audioUrl: "${bgAudio(torah?.book || '', torah?.chapter || 1, torah?.label || '')}" 
      },
      ${haftarah && haftarah.book ? `tanakh: { 
        label: "${haftarah.label.replace(/"/g, '\\"')}", 
        book: "${haftarah.book}", 
        chapter: ${haftarah.chapter || 1}, 
        audioUrl: "${bgAudio(haftarah.book, haftarah.chapter || 1, haftarah.label)}" 
      },` : ''}
      nt: { 
        label: "${nt?.label.replace(/"/g, '\\"')}", 
        book: "${nt?.book}", 
        chapter: ${nt?.chapter || 1}, 
        audioUrl: "${bgAudio(nt?.book || '', nt?.chapter || 1, nt?.label || '')}" 
      },
    },
  }`
    dayStrings.push(dayObj)
  }

  const output = `import { type DayReading } from './types'

export const schedule5786: DayReading[] = [
  ${dayStrings.join(',\n  ')}
]
`

  fs.writeFileSync(OUT_PATH, output)
  console.log(`Generated ${dayStrings.length} days to ${OUT_PATH}`)
}

/**
 * Checks a single reading field (raw CSV value) for known data problems.
 * Returns a list of human-readable issue descriptions.
 */
function checkField(raw: string, fieldName: string): string[] {
  const issues: string[] = []
  if (!raw) return issues

  // Semicolon used in place of a colon in a chapter:verse reference (e.g. "9;24" → "9:24")
  if (/\d+;\d+/.test(raw)) {
    issues.push(`${fieldName}: semicolon instead of colon in "${raw}"`)
  }

  // Roman numeral book prefix (e.g. "I Samuel", "II Kings")
  if (/\b(I{1,3}V?|IV|VI{0,3})\s+[A-Z]/.test(raw)) {
    issues.push(`${fieldName}: Roman numeral book name in "${raw}" (use Arabic numerals, e.g. "1 Samuel")`)
  }

  return issues
}

/**
 * Parses the CSV and prints each problematic row along with what it transforms to.
 * Checks for: semicolon-as-colon typos, Roman numeral book names, and fewer than
 * 3 valid audio texts across a day's readings (torah + tanakh + NT).
 */
function validate(): number {
  const content = fs.readFileSync(CSV_PATH, 'utf-8')
  const lines = content.replace(/\r\n/g, '\n').split('\n').slice(1)

  let flaggedCount = 0
  let currentParashaSlug = ''
  let currentParashaName = ''

  for (const line of lines) {
    const cols = splitCsvLine(line)
    if (cols.length < 4) continue

    const dateStr = cols[0]
    if (!dateStr || !dateStr.includes('-')) continue

    const stripQuotes = (s: string) => s.replace(/^"|"$/g, '').trim()
    const torahRaw = stripQuotes(cols[1] || '').replace(/MAF:/g, ';')
    const haftarahRaw = stripQuotes(cols[2] || '')
    const ntRaw = stripQuotes(cols[3] || '')

    if (!torahRaw && !haftarahRaw && !ntRaw) continue

    // Track parasha (mirrors parseCSV logic)
    let torahLabel = torahRaw
    let isParashaStart = false
    if (torahRaw.includes(':')) {
      const parts = torahRaw.split(':')
      const candidateName = parts[0].trim()
      if (candidateName === candidateName.toUpperCase() && candidateName.length > 2 && !candidateName.startsWith('GEN')) {
        currentParashaName = candidateName
          .toLowerCase()
          .split('-')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join('-')
        currentParashaSlug = currentParashaName.toLowerCase().replace(/\s+/g, '-')
        torahLabel = parts.slice(1).join(':').trim()
        isParashaStart = true
      }
    }

    const date = parseDate(dateStr)
    const issues: string[] = [
      ...checkField(torahRaw, 'Torah'),
      ...checkField(haftarahRaw, 'Tanakh'),
      ...checkField(ntRaw, 'NT'),
    ]

    // Check that the combined audio URLs resolve to at least 3 book+chapter texts
    const torah = parseBookChapter(torahLabel)
    const haftarah = parseBookChapter(haftarahRaw)
    const nt = parseBookChapter(ntRaw)
    const torahUrl = bgAudio(torah?.book || '', torah?.chapter || 1, torah?.label || '')
    const tanakhUrl = (haftarah && haftarah.book) ? bgAudio(haftarah.book, haftarah.chapter || 1, haftarah.label) : null
    const ntUrl = bgAudio(nt?.book || '', nt?.chapter || 1, nt?.label || '')
    const audioTextCount = countAudioTexts(torahUrl) + (tanakhUrl ? countAudioTexts(tanakhUrl) : 0) + countAudioTexts(ntUrl)
    if (audioTextCount < 3) {
      issues.push(`Only ${audioTextCount} valid audio text(s) across all readings (expected ≥ 3)`)
    }

    if (issues.length === 0) continue

    flaggedCount++
    console.log(`\n── ${date} (CSV row: ${dateStr}) ──`)
    for (const issue of issues) {
      console.log(`  ⚠️  ${issue}`)
    }
    console.log('  Raw fields:')
    console.log(`    Torah:  ${cols[1] || '(empty)'}`)
    console.log(`    Tanakh: ${cols[2] || '(empty)'}`)
    console.log(`    NT:     ${cols[3] || '(empty)'}`)
    const escapeSingle = (s: string) => s.replace(/'/g, "\\'")
    console.log('  Would transform to:')
    console.log(`    date: '${date}', parashaSlug: '${escapeSingle(currentParashaSlug)}'${isParashaStart ? `, torahPortion: '${escapeSingle(currentParashaName)}'` : ''}`)
    console.log(`    torah:  { label: "${torah?.label}", book: "${torah?.book}", chapter: ${torah?.chapter ?? 1} }`)
    console.log(`             audioUrl: "${torahUrl}"`)
    if (tanakhUrl) {
      console.log(`    tanakh: { label: "${haftarah!.label}", book: "${haftarah!.book}", chapter: ${haftarah!.chapter ?? 1} }`)
      console.log(`             audioUrl: "${tanakhUrl}"`)
    }
    console.log(`    nt:     { label: "${nt?.label}", book: "${nt?.book}", chapter: ${nt?.chapter ?? 1} }`)
    console.log(`             audioUrl: "${ntUrl}"`)
  }

  if (flaggedCount === 0) {
    console.log('✅  No problems found.')
  } else {
    console.log(`\n${flaggedCount} row(s) flagged.`)
  }
  return flaggedCount
}

const action = process.argv[2]
if (action === 'validate') {
  validate()
} else {
  const problems = validate()
  if (problems > 0) {
    console.error('\n❌  Fix the problems above before generating.')
    process.exit(1)
  }
  parseCSV()
}
