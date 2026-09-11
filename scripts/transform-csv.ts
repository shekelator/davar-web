import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Resolve __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DEFAULT_CSV_FILENAME = 'daily-davar-schedule-5787.csv'

const BOOK_NAMES: Record<string, string> = {
  genesis: 'Genesis',
  exodus: 'Exodus',
  leviticus: 'Leviticus',
  numbers: 'Numbers',
  deuteronomy: 'Deuteronomy',
  joshua: 'Joshua',
  judges: 'Judges',
  ruth: 'Ruth',
  '1 samuel': '1 Samuel',
  '2 samuel': '2 Samuel',
  '1 kings': '1 Kings',
  '2 kings': '2 Kings',
  '1 chronicles': '1 Chronicles',
  '2 chronicles': '2 Chronicles',
  ezra: 'Ezra',
  nehemiah: 'Nehemiah',
  esther: 'Esther',
  job: 'Job',
  psalms: 'Psalms',
  proverbs: 'Proverbs',
  ecclesiastes: 'Ecclesiastes',
  'song of songs': 'Song of Songs',
  isaiah: 'Isaiah',
  jeremiah: 'Jeremiah',
  lamentations: 'Lamentations',
  ezekiel: 'Ezekiel',
  daniel: 'Daniel',
  hosea: 'Hosea',
  joel: 'Joel',
  amos: 'Amos',
  obadiah: 'Obadiah',
  jonah: 'Jonah',
  micah: 'Micah',
  nahum: 'Nahum',
  habakkuk: 'Habakkuk',
  zephaniah: 'Zephaniah',
  haggai: 'Haggai',
  zechariah: 'Zechariah',
  malachi: 'Malachi',
  matthew: 'Matthew',
  mark: 'Mark',
  luke: 'Luke',
  john: 'John',
  acts: 'Acts',
  romans: 'Romans',
  '1 corinthians': '1 Corinthians',
  '2 corinthians': '2 Corinthians',
  galatians: 'Galatians',
  ephesians: 'Ephesians',
  philippians: 'Philippians',
  colossians: 'Colossians',
  '1 thessalonians': '1 Thessalonians',
  '2 thessalonians': '2 Thessalonians',
  '1 timothy': '1 Timothy',
  '2 timothy': '2 Timothy',
  titus: 'Titus',
  philemon: 'Philemon',
  hebrews: 'Hebrews',
  james: 'James',
  '1 peter': '1 Peter',
  '2 peter': '2 Peter',
  '1 john': '1 John',
  '2 john': '2 John',
  '3 john': '3 John',
  jude: 'Jude',
  revelation: 'Revelation',
}

const BOOK_ALIASES: Record<string, string> = {
  ...BOOK_NAMES,
  gen: 'Genesis',
  ex: 'Exodus',
  exod: 'Exodus',
  lev: 'Leviticus',
  num: 'Numbers',
  deut: 'Deuteronomy',
  josh: 'Joshua',
  judg: 'Judges',
  '1 sam': '1 Samuel',
  '2 sam': '2 Samuel',
  '1 chron': '1 Chronicles',
  '2 chron': '2 Chronicles',
  psalm: 'Psalms',
  ps: 'Psalms',
  prov: 'Proverbs',
  song: 'Song of Songs',
  isa: 'Isaiah',
  jer: 'Jeremiah',
  lam: 'Lamentations',
  ezek: 'Ezekiel',
  dan: 'Daniel',
  hos: 'Hosea',
  obad: 'Obadiah',
  mic: 'Micah',
  nah: 'Nahum',
  hab: 'Habakkuk',
  zeph: 'Zephaniah',
  hag: 'Haggai',
  zech: 'Zechariah',
  zachariah: 'Zechariah',
  matt: 'Matthew',
  phil: 'Philippians',
  jas: 'James',
  '1 cor': '1 Corinthians',
  '2 cor': '2 Corinthians',
  '1 thess': '1 Thessalonians',
  '2 thess': '2 Thessalonians',
  '1 tim': '1 Timothy',
  '2 tim': '2 Timothy',
}

const BIBLE_GATEWAY_ABBR: Record<string, string> = {
  genesis: 'Gen',
  exodus: 'Exod',
  leviticus: 'Lev',
  numbers: 'Num',
  deuteronomy: 'Deut',
  joshua: 'Josh',
  judges: 'Judg',
  ruth: 'Ruth',
  '1-samuel': '1Sam',
  '2-samuel': '2Sam',
  '1-kings': '1Kgs',
  '2-kings': '2Kgs',
  '1-chronicles': '1Chr',
  '2-chronicles': '2Chr',
  ezra: 'Ezra',
  nehemiah: 'Neh',
  esther: 'Esth',
  job: 'Job',
  psalms: 'Ps',
  proverbs: 'Prov',
  ecclesiastes: 'Eccl',
  'song-of-songs': 'Song',
  isaiah: 'Isa',
  jeremiah: 'Jer',
  lamentations: 'Lam',
  ezekiel: 'Ezek',
  daniel: 'Dan',
  hosea: 'Hos',
  joel: 'Joel',
  amos: 'Amos',
  obadiah: 'Obad',
  jonah: 'Jonah',
  micah: 'Mic',
  nahum: 'Nah',
  habakkuk: 'Hab',
  zephaniah: 'Zeph',
  haggai: 'Hag',
  zechariah: 'Zech',
  malachi: 'Mal',
  matthew: 'Matt',
  mark: 'Mark',
  luke: 'Luke',
  john: 'John',
  acts: 'Acts',
  romans: 'Rom',
  '1-corinthians': '1Cor',
  '2-corinthians': '2Cor',
  galatians: 'Gal',
  ephesians: 'Eph',
  philippians: 'Phil',
  colossians: 'Col',
  '1-thessalonians': '1Thess',
  '2-thessalonians': '2Thess',
  '1-timothy': '1Tim',
  '2-timothy': '2Tim',
  titus: 'Titus',
  philemon: 'Phlm',
  hebrews: 'Heb',
  james: 'Jas',
  '1-peter': '1Pet',
  '2-peter': '2Pet',
  '1-john': '1John',
  '2-john': '2John',
  '3-john': '3John',
  jude: 'Jude',
  revelation: 'Rev',
}

const SINGLE_CHAPTER_BOOKS = new Set([
  'Obadiah', 'Philemon', 'Jude', '2 John', '3 John'
])

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const BOOK_PREFIXES = Object.entries(BOOK_ALIASES)
  .sort(([left], [right]) => right.length - left.length)
  .map(([alias, book]) => ({
    book,
    pattern: new RegExp(`^${escapeRegExp(alias).replace(/\\ /g, '\\s*')}\\.?\\s*:?\\s*(\\d+)`, 'i'),
  }))

function normalizeBookName(raw: string): string | null {
  const key = raw.trim().replace(/\.$/, '').replace(/\s+/g, ' ').toLowerCase()
  return BOOK_ALIASES[key] || null
}

function formatParashaName(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function extractParashaStart(raw: string): { name: string, label: string } | null {
  const clean = raw.trim()

  const explicitParasha = clean.match(/^([A-Z'-]+(?:\s+[A-Z'-]+)*)\s*:\s*(.+)$/)
  if (explicitParasha && !normalizeBookName(explicitParasha[1])) {
    return {
      name: formatParashaName(explicitParasha[1]),
      label: explicitParasha[2].trim(),
    }
  }

  const implicitParasha = clean.match(/^([A-Z'-]+(?:\s+[A-Z'-]+)*)\s+(.+)$/)
  if (implicitParasha && !normalizeBookName(implicitParasha[1]) && findBookChapterStart(implicitParasha[2])) {
    return {
      name: formatParashaName(implicitParasha[1]),
      label: implicitParasha[2].trim(),
    }
  }

  return null
}

function sanitizeReferenceLabel(raw: string): string {
  let clean = raw.trim().replace(/^HAF[:.]?\s*/i, '').replace(/^HAF\s+/i, '').trim()

  const parashaStart = extractParashaStart(clean)
  if (parashaStart) {
    clean = parashaStart.label
  }

  return clean
}

function findBookChapterStart(raw: string): { book: string, chapter: number } | null {
  const clean = raw.trim()
  for (const { book, pattern } of BOOK_PREFIXES) {
    const match = clean.match(pattern)
    if (match) {
      return { book, chapter: parseInt(match[1], 10) }
    }
  }
  return null
}

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

function getBibleGatewayAbbreviation(book: string): string {
  const normalizedBook = normalizeBookName(book) || book
  const slug = normalizedBook.toLowerCase().replace(/\s+/g, '-')
  return BIBLE_GATEWAY_ABBR[slug] || normalizedBook
}

export function getAudioReferences(book: string, startChapter: number, label: string): string[] {
  const cleanLabel = sanitizeReferenceLabel(label)
  const segments = cleanLabel.split(/\s*,\s*/).filter(Boolean)
  const references: string[] = []
  let currentBook = normalizeBookName(book) || book

  for (const segment of segments.length > 0 ? segments : [cleanLabel]) {
    const parsed = findBookChapterStart(segment)
    let segmentBook = parsed?.book || currentBook
    let segmentChapter = parsed?.chapter ?? startChapter

    if (!parsed) {
      const chapterMatch = segment.trim().match(/^(\d+)/)
      if (chapterMatch) {
        segmentChapter = parseInt(chapterMatch[1], 10)
      }
    }

    segmentBook = normalizeBookName(segmentBook) || segmentBook
    const abbr = getBibleGatewayAbbreviation(segmentBook)
    const chapters = getChapters(segment, segmentBook, segmentChapter)

    for (const chapter of chapters) {
      const reference = `${abbr}.${chapter}`
      if (!references.includes(reference)) {
        references.push(reference)
      }
    }

    currentBook = segmentBook
  }

  return references
}

export function bgAudio(book: string, startChapter: number, label: string): string {
  return `https://www.biblegateway.com/audio/purevoice/niv/${getAudioReferences(book, startChapter, label).join(',')}`
}

function countAudioTexts(url: string): number {
  const match = url.match(/\/niv\/(.+)$/)
  if (!match) return 0
  return match[1].split(',').filter(s => /^[A-Za-z0-9]+\.\d+$/.test(s)).length
}

export function parseBookChapter(raw: string): { label: string, book: string, chapter: number } | null {
  if (!raw || raw.trim() === '') return null

  const clean = sanitizeReferenceLabel(raw)
  const parsed = findBookChapterStart(clean)

  if (!parsed) {
    return {
      label: clean,
      book: normalizeBookName(clean) || clean.replace(/\.$/, ''),
      chapter: 1,
    }
  }

  return { label: clean, book: parsed.book, chapter: parsed.chapter }
}

export function isPassageReference(raw: string): boolean {
  if (!raw || raw.trim() === '') return false

  const clean = sanitizeReferenceLabel(raw)
  if (!clean) return false

  if (findBookChapterStart(clean)) return true

  // If a value has no chapter/verse numbers, treat it as a note/label, not a reading reference.
  return /\d/.test(clean)
}

function parseDate(raw: string): string {
  const normalized = raw.trim().replace(/\//g, '-')
  const parts = normalized.split('-')
  if (parts.length !== 3) return ''

  // Accept both M-D-YY and YYYY-M-D formats.
  if (parts[0].length === 4) {
    const year = parseInt(parts[0], 10)
    const month = parseInt(parts[1], 10)
    const day = parseInt(parts[2], 10)
    if (Number.isNaN(year) || Number.isNaN(month) || Number.isNaN(day)) return ''
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
  }

  const month = parseInt(parts[0], 10)
  const day = parseInt(parts[1], 10)
  const y = parseInt(parts[2], 10)
  if (Number.isNaN(month) || Number.isNaN(day) || Number.isNaN(y)) return ''

  const year = y < 100 ? 2000 + y : y // assume 20xx
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

function isDateLike(raw: string): boolean {
  return /\d{1,4}[/-]\d{1,2}[/-]\d{1,4}/.test(raw)
}

function getDefaultOutPath(csvPath: string): string {
  const filename = path.basename(csvPath)
  const yearMatch = filename.match(/(\d{4})/)
  const suffix = yearMatch ? `-${yearMatch[1]}` : ''
  return path.resolve(__dirname, `../src/data/schedule${suffix}.ts`)
}

function getScheduleExportName(csvPath: string): string {
  const filename = path.basename(csvPath)
  const yearMatch = filename.match(/(\d{4})/)
  return yearMatch ? `schedule${yearMatch[1]}` : 'scheduleData'
}

function resolveCliPath(maybePath: string): string {
  return path.isAbsolute(maybePath)
    ? maybePath
    : path.resolve(__dirname, `../${maybePath}`)
}

function stripQuotes(value: string): string {
  return value.replace(/^"|"$/g, '').trim()
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

interface CsvColumnIndices {
  date: number
  parasha: number | null
  torah: number
  tanakh: number
  nt: number
}

function findColumnIndex(headers: string[], patterns: RegExp[]): number {
  return headers.findIndex((header) => patterns.some((pattern) => pattern.test(header)))
}

export function getCsvColumnIndices(headerLine: string): CsvColumnIndices {
  const headers = splitCsvLine(headerLine)
    .map((header) => stripQuotes(header).toLowerCase())

  const dateIndex = findColumnIndex(headers, [/^date$/])
  const torahIndex = findColumnIndex(headers, [/torah/])
  const tanakhIndex = findColumnIndex(headers, [/haftarah/, /prophets/, /ketuvim/, /writings/, /tanakh/])
  const ntIndex = findColumnIndex(headers, [/besora/, /^nt$/, /new testament/, /gospel/])

  // New format: parasha is a dedicated column (position 1 in current sheets).
  const explicitParashaIndex = findColumnIndex(headers, [/parasha/, /portion/])
  const parashaIndex = explicitParashaIndex >= 0 ? explicitParashaIndex : 1

  return {
    date: dateIndex >= 0 ? dateIndex : 0,
    parasha: parashaIndex,
    torah: torahIndex >= 0 ? torahIndex : 2,
    tanakh: tanakhIndex >= 0 ? tanakhIndex : 3,
    nt: ntIndex >= 0 ? ntIndex : 4,
  }
}

function parseCSV(csvPath: string, outPath: string) {
  const content = fs.readFileSync(csvPath, 'utf-8')
  // Split lines, handle \r\n
  const allLines = content.replace(/\r\n/g, '\n').split('\n')
  const headerLine = allLines[0] || ''
  const lines = allLines.slice(1)
  const columns = getCsvColumnIndices(headerLine)

  const dayStrings: string[] = []
  let currentParashaSlug = ''
  let currentParashaName = ''

  for (const line of lines) {
    const cols = splitCsvLine(line)

    const maxRequiredIndex = Math.max(columns.date, columns.torah, columns.tanakh, columns.nt)
    if (cols.length <= maxRequiredIndex) continue

    const dateStr = stripQuotes(cols[columns.date] || '')
    // Skip empty dates or malformed lines
    if (!dateStr || !isDateLike(dateStr)) continue 

    const parashaRaw = stripQuotes(cols[columns.parasha] || '')
    const torahRaw = stripQuotes(cols[columns.torah] || '').replace(/MAF:/g, ';')
    const haftarahRaw = stripQuotes(cols[columns.tanakh] || '')
    const ntRaw = stripQuotes(cols[columns.nt] || '')

    const hasTorahReference = isPassageReference(torahRaw)
    const hasTanakhReference = isPassageReference(haftarahRaw)
    const hasNtReference = isPassageReference(ntRaw)

    // Skip rows with no reading passages (including note-only rows like "SHABBAT ZACHOR").
    if (!hasTorahReference && !hasTanakhReference && !hasNtReference) continue

    // Detect parasha changes from the dedicated parasha column.
    let torahLabel = torahRaw
    let isParashaStart = false

    if (parashaRaw) {
      const parsedParashaName = formatParashaName(parashaRaw)
      if (parsedParashaName && parsedParashaName !== currentParashaName) {
        currentParashaName = parsedParashaName
        currentParashaSlug = currentParashaName.toLowerCase().replace(/\s+/g, '-')
        isParashaStart = true
      }
    }

    const date = parseDate(dateStr)
    const torah = hasTorahReference ? parseBookChapter(torahLabel) : null
    const haftarah = hasTanakhReference ? parseBookChapter(haftarahRaw) : null
    const nt = hasNtReference ? parseBookChapter(ntRaw) : null

    // Construct the object string for the TS file
    // We intentionally quote keys/values to produce valid JS/TS
    const escapeSingle = (s: string) => s.replace(/'/g, "\\'")
    
    const ntBlock = (nt && nt.book) ? `nt: { 
        label: "${nt.label.replace(/"/g, '\\"')}", 
        book: "${nt.book}", 
        chapter: ${nt.chapter || 1}, 
        audioUrl: "${bgAudio(nt.book, nt.chapter || 1, nt.label)}" 
      },` : ''

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
      ${ntBlock}
    },
  }`
    dayStrings.push(dayObj)
  }

  const exportName = getScheduleExportName(csvPath)

  const output = `import { type DayReading } from './types'

export const ${exportName}: DayReading[] = [
  ${dayStrings.join(',\n  ')}
]
`

  fs.writeFileSync(outPath, output)
  console.log(`Generated ${dayStrings.length} days to ${outPath}`)
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
function validate(csvPath: string): number {
  const content = fs.readFileSync(csvPath, 'utf-8')
  const allLines = content.replace(/\r\n/g, '\n').split('\n')
  const headerLine = allLines[0] || ''
  const lines = allLines.slice(1)
  const columns = getCsvColumnIndices(headerLine)

  let flaggedCount = 0
  let currentParashaSlug = ''
  let currentParashaName = ''

  for (const line of lines) {
    const cols = splitCsvLine(line)
    const maxRequiredIndex = Math.max(columns.date, columns.torah, columns.tanakh, columns.nt)
    if (cols.length <= maxRequiredIndex) continue

    const dateStr = stripQuotes(cols[columns.date] || '')
    if (!dateStr || !isDateLike(dateStr)) continue

    const parashaRaw = stripQuotes(cols[columns.parasha] || '')
    const torahRaw = stripQuotes(cols[columns.torah] || '').replace(/MAF:/g, ';')
    const haftarahRaw = stripQuotes(cols[columns.tanakh] || '')
    const ntRaw = stripQuotes(cols[columns.nt] || '')

    const hasTorahReference = isPassageReference(torahRaw)
    const hasTanakhReference = isPassageReference(haftarahRaw)
    const hasNtReference = isPassageReference(ntRaw)

    if (!hasTorahReference && !hasTanakhReference && !hasNtReference) continue

    // Track parasha (mirrors parseCSV logic)
    let torahLabel = torahRaw
    let isParashaStart = false

    if (parashaRaw) {
      const parsedParashaName = formatParashaName(parashaRaw)
      if (parsedParashaName && parsedParashaName !== currentParashaName) {
        currentParashaName = parsedParashaName
        currentParashaSlug = currentParashaName.toLowerCase().replace(/\s+/g, '-')
        isParashaStart = true
      }
    }

    const date = parseDate(dateStr)
    const issues: string[] = [
      ...(hasTorahReference ? checkField(torahRaw, 'Torah') : []),
      ...(hasTanakhReference ? checkField(haftarahRaw, 'Tanakh') : []),
      ...(hasNtReference ? checkField(ntRaw, 'NT') : []),
    ]

    // Check that the combined audio URLs resolve to at least 3 book+chapter texts
    const torah = hasTorahReference ? parseBookChapter(torahLabel) : null
    const haftarah = hasTanakhReference ? parseBookChapter(haftarahRaw) : null
    const nt = hasNtReference ? parseBookChapter(ntRaw) : null
    const torahUrl = bgAudio(torah?.book || '', torah?.chapter || 1, torah?.label || '')
    const tanakhUrl = (haftarah && haftarah.book) ? bgAudio(haftarah.book, haftarah.chapter || 1, haftarah.label) : null
    const ntUrl = (nt && nt.book) ? bgAudio(nt.book, nt.chapter || 1, nt.label) : null
    const audioTextCount = countAudioTexts(torahUrl) + (tanakhUrl ? countAudioTexts(tanakhUrl) : 0) + (ntUrl ? countAudioTexts(ntUrl) : 0)
    const expectedMinimum = 1 + (tanakhUrl ? 1 : 0) + (ntUrl ? 1 : 0)
    if (audioTextCount < expectedMinimum) {
      issues.push(`Only ${audioTextCount} valid audio text(s) across all readings (expected ≥ ${expectedMinimum})`)
    }

    if (issues.length === 0) continue

    flaggedCount++
    console.log(`\n── ${date} (CSV row: ${dateStr}) ──`)
    for (const issue of issues) {
      console.log(`  ⚠️  ${issue}`)
    }
    console.log('  Raw fields:')
    console.log(`    Torah:  ${cols[columns.torah] || '(empty)'}`)
    console.log(`    Tanakh: ${cols[columns.tanakh] || '(empty)'}`)
    console.log(`    NT:     ${cols[columns.nt] || '(empty)'}`)
    const escapeSingle = (s: string) => s.replace(/'/g, "\\'")
    console.log('  Would transform to:')
    console.log(`    date: '${date}', parashaSlug: '${escapeSingle(currentParashaSlug)}'${isParashaStart ? `, torahPortion: '${escapeSingle(currentParashaName)}'` : ''}`)
    console.log(`    torah:  { label: "${torah?.label}", book: "${torah?.book}", chapter: ${torah?.chapter ?? 1} }`)
    console.log(`             audioUrl: "${torahUrl}"`)
    if (tanakhUrl) {
      console.log(`    tanakh: { label: "${haftarah!.label}", book: "${haftarah!.book}", chapter: ${haftarah!.chapter ?? 1} }`)
      console.log(`             audioUrl: "${tanakhUrl}"`)
    }
    if (ntUrl) {
      console.log(`    nt:     { label: "${nt?.label}", book: "${nt?.book}", chapter: ${nt?.chapter ?? 1} }`)
      console.log(`             audioUrl: "${ntUrl}"`)
    }
  }

  if (flaggedCount === 0) {
    console.log('✅  No problems found.')
  } else {
    console.log(`\n${flaggedCount} row(s) flagged.`)
  }
  return flaggedCount
}

function main() {
  const args = process.argv.slice(2)
  const action = (args[0] === 'validate' || args[0] === 'generate') ? args.shift() : 'generate'

  const csvPath = resolveCliPath(args[0] || DEFAULT_CSV_FILENAME)
  const outPath = resolveCliPath(args[1] || getDefaultOutPath(csvPath))

  if (action === 'validate') {
    validate(csvPath)
  } else {
    const problems = validate(csvPath)
    if (problems > 0) {
      console.error('\n❌  Fix the problems above before generating.')
      process.exit(1)
    }
    parseCSV(csvPath, outPath)
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  main()
}
