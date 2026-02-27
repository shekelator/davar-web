import { type DayReading } from './schedule'

function bgAudio(book: string, chapter: number): string {
  const slug = (book || '').toLowerCase().replace(/\s+/g, '-')
  let bookSlug = slug
  if (slug === 'gen') bookSlug = 'genesis'
  
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
  return `https://www.biblegateway.com/audio/purevoice/niv/${ab}.${chapter}`
}

export const schedule5786: DayReading[] = [
  {
    date: '2025-10-12',
    parashaSlug: 'bereshit',
    torahPortion: 'Bereshit',
    readings: {
      torah: { 
        label: "Gen 1:1-2:3 & 2:4-19", 
        book: "Genesis", 
        chapter: 1, 
        audioUrl: bgAudio("Genesis", 1) 
      },
      tanakh: { 
        label: "Joshua 1-2", 
        book: "Joshua", 
        chapter: 1, 
        audioUrl: bgAudio("Joshua", 1) 
      },
      nt: { 
        label: "Matthew 1", 
        book: "Matthew", 
        chapter: 1, 
        audioUrl: bgAudio("Matthew", 1) 
      },
    },
  },
  {
    date: '2025-10-13',
    parashaSlug: 'bereshit',
    
    readings: {
      torah: { 
        label: "Gen. 2:20-3:21", 
        book: "Genesis", 
        chapter: 2, 
        audioUrl: bgAudio("Genesis", 2) 
      },
      tanakh: { 
        label: "Joshua 3-4", 
        book: "Joshua", 
        chapter: 3, 
        audioUrl: bgAudio("Joshua", 3) 
      },
      nt: { 
        label: "Matthew 2", 
        book: "Matthew", 
        chapter: 2, 
        audioUrl: bgAudio("Matthew", 2) 
      },
    },
  },
  {
    date: '2025-10-14',
    parashaSlug: 'bereshit',
    
    readings: {
      torah: { 
        label: "Gen. 3:22-4:18", 
        book: "Genesis", 
        chapter: 3, 
        audioUrl: bgAudio("Genesis", 3) 
      },
      tanakh: { 
        label: "Joshua 5-6", 
        book: "Joshua", 
        chapter: 5, 
        audioUrl: bgAudio("Joshua", 5) 
      },
      nt: { 
        label: "Matthew 3", 
        book: "Matthew", 
        chapter: 3, 
        audioUrl: bgAudio("Matthew", 3) 
      },
    },
  },
  {
    date: '2025-10-15',
    parashaSlug: 'bereshit',
    
    readings: {
      torah: { 
        label: "Gen. 4:19-4:22", 
        book: "Genesis", 
        chapter: 4, 
        audioUrl: bgAudio("Genesis", 4) 
      },
      tanakh: { 
        label: "Joshua 7-8", 
        book: "Joshua", 
        chapter: 7, 
        audioUrl: bgAudio("Joshua", 7) 
      },
      nt: { 
        label: "Matthew 4", 
        book: "Matthew", 
        chapter: 4, 
        audioUrl: bgAudio("Matthew", 4) 
      },
    },
  },
  {
    date: '2025-10-16',
    parashaSlug: 'bereshit',
    
    readings: {
      torah: { 
        label: "Gen. 4:23-5:24", 
        book: "Genesis", 
        chapter: 4, 
        audioUrl: bgAudio("Genesis", 4) 
      },
      tanakh: { 
        label: "Joshua 9-10", 
        book: "Joshua", 
        chapter: 9, 
        audioUrl: bgAudio("Joshua", 9) 
      },
      nt: { 
        label: "Matthew 5", 
        book: "Matthew", 
        chapter: 5, 
        audioUrl: bgAudio("Matthew", 5) 
      },
    },
  },
  {
    date: '2025-10-17',
    parashaSlug: 'bereshit',
    
    readings: {
      torah: { 
        label: "Gen. 5:25-6:8", 
        book: "Genesis", 
        chapter: 5, 
        audioUrl: bgAudio("Genesis", 5) 
      },
      tanakh: { 
        label: "Isaiah 42:5-43:10", 
        book: "Isaiah", 
        chapter: 42, 
        audioUrl: bgAudio("Isaiah", 42) 
      },
      nt: { 
        label: "John1:1-18", 
        book: "John1:1-18", 
        chapter: 1, 
        audioUrl: bgAudio("John1:1-18", 1) 
      },
    },
  },
  {
    date: '2025-10-19',
    parashaSlug: 'noach',
    torahPortion: 'Noach',
    readings: {
      torah: { 
        label: "Gen 6:9-6:22 & 7:1-7-16", 
        book: "Genesis", 
        chapter: 6, 
        audioUrl: bgAudio("Genesis", 6) 
      },
      tanakh: { 
        label: "Joshua 11-12", 
        book: "Joshua", 
        chapter: 11, 
        audioUrl: bgAudio("Joshua", 11) 
      },
      nt: { 
        label: "Matthew 6", 
        book: "Matthew", 
        chapter: 6, 
        audioUrl: bgAudio("Matthew", 6) 
      },
    },
  },
  {
    date: '2025-10-20',
    parashaSlug: 'noach',
    
    readings: {
      torah: { 
        label: "Gen. 7:17-8:14", 
        book: "Genesis", 
        chapter: 7, 
        audioUrl: bgAudio("Genesis", 7) 
      },
      tanakh: { 
        label: "Joshua 13-14", 
        book: "Joshua", 
        chapter: 13, 
        audioUrl: bgAudio("Joshua", 13) 
      },
      nt: { 
        label: "Matthew 7", 
        book: "Matthew", 
        chapter: 7, 
        audioUrl: bgAudio("Matthew", 7) 
      },
    },
  },
  {
    date: '2025-10-21',
    parashaSlug: 'noach',
    
    readings: {
      torah: { 
        label: "Gen. 8:15-9:7", 
        book: "Genesis", 
        chapter: 8, 
        audioUrl: bgAudio("Genesis", 8) 
      },
      tanakh: { 
        label: "Joshua 15-16", 
        book: "Joshua", 
        chapter: 15, 
        audioUrl: bgAudio("Joshua", 15) 
      },
      nt: { 
        label: "Matthew 8", 
        book: "Matthew", 
        chapter: 8, 
        audioUrl: bgAudio("Matthew", 8) 
      },
    },
  },
  {
    date: '2025-10-22',
    parashaSlug: 'noach',
    
    readings: {
      torah: { 
        label: "Gen. 9:8-17", 
        book: "Genesis", 
        chapter: 9, 
        audioUrl: bgAudio("Genesis", 9) 
      },
      tanakh: { 
        label: "Joshua 17-18", 
        book: "Joshua", 
        chapter: 17, 
        audioUrl: bgAudio("Joshua", 17) 
      },
      nt: { 
        label: "Matthew 9", 
        book: "Matthew", 
        chapter: 9, 
        audioUrl: bgAudio("Matthew", 9) 
      },
    },
  },
  {
    date: '2025-10-23',
    parashaSlug: 'noach',
    
    readings: {
      torah: { 
        label: "Gen.9:18-10:32", 
        book: "Gen.9:18-10:32", 
        chapter: 1, 
        audioUrl: bgAudio("Gen.9:18-10:32", 1) 
      },
      tanakh: { 
        label: "Joshua 19-20", 
        book: "Joshua", 
        chapter: 19, 
        audioUrl: bgAudio("Joshua", 19) 
      },
      nt: { 
        label: "Matthew 10", 
        book: "Matthew", 
        chapter: 10, 
        audioUrl: bgAudio("Matthew", 10) 
      },
    },
  },
  {
    date: '2025-10-24',
    parashaSlug: 'noach',
    
    readings: {
      torah: { 
        label: "Gen. 11:1-32", 
        book: "Genesis", 
        chapter: 11, 
        audioUrl: bgAudio("Genesis", 11) 
      },
      tanakh: { 
        label: "Isaiah 54:1-55:5", 
        book: "Isaiah", 
        chapter: 54, 
        audioUrl: bgAudio("Isaiah", 54) 
      },
      nt: { 
        label: "Matthew 1:1-17", 
        book: "Matthew", 
        chapter: 1, 
        audioUrl: bgAudio("Matthew", 1) 
      },
    },
  },
  {
    date: '2025-10-26',
    parashaSlug: 'lech-lecha',
    torahPortion: 'Lech-Lecha',
    readings: {
      torah: { 
        label: "Gen. 12:1-13:4", 
        book: "Genesis", 
        chapter: 12, 
        audioUrl: bgAudio("Genesis", 12) 
      },
      tanakh: { 
        label: "Joshua 21-22", 
        book: "Joshua", 
        chapter: 21, 
        audioUrl: bgAudio("Joshua", 21) 
      },
      nt: { 
        label: "Matthew 11", 
        book: "Matthew", 
        chapter: 11, 
        audioUrl: bgAudio("Matthew", 11) 
      },
    },
  },
  {
    date: '2025-10-27',
    parashaSlug: 'lech-lecha',
    
    readings: {
      torah: { 
        label: "Gen. 13:5-13:18", 
        book: "Genesis", 
        chapter: 13, 
        audioUrl: bgAudio("Genesis", 13) 
      },
      tanakh: { 
        label: "Joshua 23-24", 
        book: "Joshua", 
        chapter: 23, 
        audioUrl: bgAudio("Joshua", 23) 
      },
      nt: { 
        label: "Matthew 12", 
        book: "Matthew", 
        chapter: 12, 
        audioUrl: bgAudio("Matthew", 12) 
      },
    },
  },
  {
    date: '2025-10-28',
    parashaSlug: 'lech-lecha',
    
    readings: {
      torah: { 
        label: "Gen. 14:1-20", 
        book: "Genesis", 
        chapter: 14, 
        audioUrl: bgAudio("Genesis", 14) 
      },
      tanakh: { 
        label: "Judges 1-2", 
        book: "Judges", 
        chapter: 1, 
        audioUrl: bgAudio("Judges", 1) 
      },
      nt: { 
        label: "Matthew 13", 
        book: "Matthew", 
        chapter: 13, 
        audioUrl: bgAudio("Matthew", 13) 
      },
    },
  },
  {
    date: '2025-10-29',
    parashaSlug: 'lech-lecha',
    
    readings: {
      torah: { 
        label: "Gen. 14:21-15:6", 
        book: "Genesis", 
        chapter: 14, 
        audioUrl: bgAudio("Genesis", 14) 
      },
      tanakh: { 
        label: "Judges 3-4", 
        book: "Judges", 
        chapter: 3, 
        audioUrl: bgAudio("Judges", 3) 
      },
      nt: { 
        label: "Matthew 14", 
        book: "Matthew", 
        chapter: 14, 
        audioUrl: bgAudio("Matthew", 14) 
      },
    },
  },
  {
    date: '2025-10-30',
    parashaSlug: 'lech-lecha',
    
    readings: {
      torah: { 
        label: "Gen. 15:7-17:6", 
        book: "Genesis", 
        chapter: 15, 
        audioUrl: bgAudio("Genesis", 15) 
      },
      tanakh: { 
        label: "Judges 5-6", 
        book: "Judges", 
        chapter: 5, 
        audioUrl: bgAudio("Judges", 5) 
      },
      nt: { 
        label: "Matthew 15", 
        book: "Matthew", 
        chapter: 15, 
        audioUrl: bgAudio("Matthew", 15) 
      },
    },
  },
  {
    date: '2025-10-31',
    parashaSlug: 'lech-lecha',
    
    readings: {
      torah: { 
        label: "Gen. 17:7-27", 
        book: "Genesis", 
        chapter: 17, 
        audioUrl: bgAudio("Genesis", 17) 
      },
      tanakh: { 
        label: "Isaiah 40:27-41:16", 
        book: "Isaiah", 
        chapter: 40, 
        audioUrl: bgAudio("Isaiah", 40) 
      },
      nt: { 
        label: "Matthew 1:18-25", 
        book: "Matthew", 
        chapter: 1, 
        audioUrl: bgAudio("Matthew", 1) 
      },
    },
  },
  {
    date: '2025-11-02',
    parashaSlug: 'vayera',
    torahPortion: 'Vayera',
    readings: {
      torah: { 
        label: "Gen.18:1-14 & 18:15-18:33", 
        book: "Gen.18:1-14 & 18:15-18:33", 
        chapter: 1, 
        audioUrl: bgAudio("Gen.18:1-14 & 18:15-18:33", 1) 
      },
      tanakh: { 
        label: "Judges 7-8", 
        book: "Judges", 
        chapter: 7, 
        audioUrl: bgAudio("Judges", 7) 
      },
      nt: { 
        label: "Matthew 16", 
        book: "Matthew", 
        chapter: 16, 
        audioUrl: bgAudio("Matthew", 16) 
      },
    },
  },
  {
    date: '2025-11-03',
    parashaSlug: 'vayera',
    
    readings: {
      torah: { 
        label: "Gen. 19:1-19:20", 
        book: "Genesis", 
        chapter: 19, 
        audioUrl: bgAudio("Genesis", 19) 
      },
      tanakh: { 
        label: "Judges 9-10", 
        book: "Judges", 
        chapter: 9, 
        audioUrl: bgAudio("Judges", 9) 
      },
      nt: { 
        label: "Matthew 17", 
        book: "Matthew", 
        chapter: 17, 
        audioUrl: bgAudio("Matthew", 17) 
      },
    },
  },
  {
    date: '2025-11-04',
    parashaSlug: 'vayera',
    
    readings: {
      torah: { 
        label: "Gen. 19:21-21:4", 
        book: "Genesis", 
        chapter: 19, 
        audioUrl: bgAudio("Genesis", 19) 
      },
      tanakh: { 
        label: "Judges 11-12", 
        book: "Judges", 
        chapter: 11, 
        audioUrl: bgAudio("Judges", 11) 
      },
      nt: { 
        label: "Matthew 18", 
        book: "Matthew", 
        chapter: 18, 
        audioUrl: bgAudio("Matthew", 18) 
      },
    },
  },
  {
    date: '2025-11-05',
    parashaSlug: 'vayera',
    
    readings: {
      torah: { 
        label: "Gen. 21:5-21", 
        book: "Genesis", 
        chapter: 21, 
        audioUrl: bgAudio("Genesis", 21) 
      },
      tanakh: { 
        label: "Judges 13-14", 
        book: "Judges", 
        chapter: 13, 
        audioUrl: bgAudio("Judges", 13) 
      },
      nt: { 
        label: "Matthew 19", 
        book: "Matthew", 
        chapter: 19, 
        audioUrl: bgAudio("Matthew", 19) 
      },
    },
  },
  {
    date: '2025-11-06',
    parashaSlug: 'vayera',
    
    readings: {
      torah: { 
        label: "Gen. 21:21-34", 
        book: "Genesis", 
        chapter: 21, 
        audioUrl: bgAudio("Genesis", 21) 
      },
      tanakh: { 
        label: "Judges 15-16", 
        book: "Judges", 
        chapter: 15, 
        audioUrl: bgAudio("Judges", 15) 
      },
      nt: { 
        label: "Matthew 20", 
        book: "Matthew", 
        chapter: 20, 
        audioUrl: bgAudio("Matthew", 20) 
      },
    },
  },
  {
    date: '2025-11-07',
    parashaSlug: 'vayera',
    
    readings: {
      torah: { 
        label: "Gen. 22:1-22:24", 
        book: "Genesis", 
        chapter: 22, 
        audioUrl: bgAudio("Genesis", 22) 
      },
      tanakh: { 
        label: "2 Kings 4:1-37", 
        book: "2 Kings", 
        chapter: 4, 
        audioUrl: bgAudio("2 Kings", 4) 
      },
      nt: { 
        label: "Matthew 2:1-12", 
        book: "Matthew", 
        chapter: 2, 
        audioUrl: bgAudio("Matthew", 2) 
      },
    },
  },
  {
    date: '2025-11-09',
    parashaSlug: 'chayei-sara',
    torahPortion: 'Chayei sara',
    readings: {
      torah: { 
        label: "Gen. 23:1-24:9", 
        book: "Genesis", 
        chapter: 23, 
        audioUrl: bgAudio("Genesis", 23) 
      },
      tanakh: { 
        label: "Judges 17-18", 
        book: "Judges", 
        chapter: 17, 
        audioUrl: bgAudio("Judges", 17) 
      },
      nt: { 
        label: "Matthew 21", 
        book: "Matthew", 
        chapter: 21, 
        audioUrl: bgAudio("Matthew", 21) 
      },
    },
  },
  {
    date: '2025-11-10',
    parashaSlug: 'chayei-sara',
    
    readings: {
      torah: { 
        label: "Gen. 24:10-26", 
        book: "Genesis", 
        chapter: 24, 
        audioUrl: bgAudio("Genesis", 24) 
      },
      tanakh: { 
        label: "Judges 19-20", 
        book: "Judges", 
        chapter: 19, 
        audioUrl: bgAudio("Judges", 19) 
      },
      nt: { 
        label: "Matthew 22", 
        book: "Matthew", 
        chapter: 22, 
        audioUrl: bgAudio("Matthew", 22) 
      },
    },
  },
  {
    date: '2025-11-11',
    parashaSlug: 'chayei-sara',
    
    readings: {
      torah: { 
        label: "Gen. 24:27-52", 
        book: "Genesis", 
        chapter: 24, 
        audioUrl: bgAudio("Genesis", 24) 
      },
      tanakh: { 
        label: "Judges 21", 
        book: "Judges", 
        chapter: 21, 
        audioUrl: bgAudio("Judges", 21) 
      },
      nt: { 
        label: "Matthew 23", 
        book: "Matthew", 
        chapter: 23, 
        audioUrl: bgAudio("Matthew", 23) 
      },
    },
  },
  {
    date: '2025-11-12',
    parashaSlug: 'chayei-sara',
    
    readings: {
      torah: { 
        label: "Gen. 24:53-67", 
        book: "Genesis", 
        chapter: 24, 
        audioUrl: bgAudio("Genesis", 24) 
      },
      tanakh: { 
        label: "I Samuel 1-2", 
        book: "I Samuel 1-2", 
        chapter: 1, 
        audioUrl: bgAudio("I Samuel 1-2", 1) 
      },
      nt: { 
        label: "Matthew 24", 
        book: "Matthew", 
        chapter: 24, 
        audioUrl: bgAudio("Matthew", 24) 
      },
    },
  },
  {
    date: '2025-11-13',
    parashaSlug: 'chayei-sara',
    
    readings: {
      torah: { 
        label: "Gen. 25:1-11", 
        book: "Genesis", 
        chapter: 25, 
        audioUrl: bgAudio("Genesis", 25) 
      },
      tanakh: { 
        label: "1 Samuel 3-4", 
        book: "1 Samuel", 
        chapter: 3, 
        audioUrl: bgAudio("1 Samuel", 3) 
      },
      nt: { 
        label: "Matthew 25", 
        book: "Matthew", 
        chapter: 25, 
        audioUrl: bgAudio("Matthew", 25) 
      },
    },
  },
  {
    date: '2025-11-14',
    parashaSlug: 'chayei-sara',
    
    readings: {
      torah: { 
        label: "Gen. 25:12-18", 
        book: "Genesis", 
        chapter: 25, 
        audioUrl: bgAudio("Genesis", 25) 
      },
      tanakh: { 
        label: "1 Kings 1:1-31", 
        book: "1 Kings", 
        chapter: 1, 
        audioUrl: bgAudio("1 Kings", 1) 
      },
      nt: { 
        label: "Matthew 3:1-12", 
        book: "Matthew", 
        chapter: 3, 
        audioUrl: bgAudio("Matthew", 3) 
      },
    },
  },
  {
    date: '2025-11-16',
    parashaSlug: 'toldot',
    torahPortion: 'Toldot',
    readings: {
      torah: { 
        label: "Gen. 25:19-26:12", 
        book: "Genesis", 
        chapter: 25, 
        audioUrl: bgAudio("Genesis", 25) 
      },
      tanakh: { 
        label: "1 Samuel 5-6", 
        book: "1 Samuel", 
        chapter: 5, 
        audioUrl: bgAudio("1 Samuel", 5) 
      },
      nt: { 
        label: "Matthew 26", 
        book: "Matthew", 
        chapter: 26, 
        audioUrl: bgAudio("Matthew", 26) 
      },
    },
  },
  {
    date: '2025-11-17',
    parashaSlug: 'toldot',
    
    readings: {
      torah: { 
        label: "Gen. 26:13-22", 
        book: "Genesis", 
        chapter: 26, 
        audioUrl: bgAudio("Genesis", 26) 
      },
      tanakh: { 
        label: "1 Samuel 7-8", 
        book: "1 Samuel", 
        chapter: 7, 
        audioUrl: bgAudio("1 Samuel", 7) 
      },
      nt: { 
        label: "Matthew 27", 
        book: "Matthew", 
        chapter: 27, 
        audioUrl: bgAudio("Matthew", 27) 
      },
    },
  },
  {
    date: '2025-11-18',
    parashaSlug: 'toldot',
    
    readings: {
      torah: { 
        label: "Gen. 26:23-29", 
        book: "Genesis", 
        chapter: 26, 
        audioUrl: bgAudio("Genesis", 26) 
      },
      tanakh: { 
        label: "1 Samuel 9-10", 
        book: "1 Samuel", 
        chapter: 9, 
        audioUrl: bgAudio("1 Samuel", 9) 
      },
      nt: { 
        label: "Matthew 28", 
        book: "Matthew", 
        chapter: 28, 
        audioUrl: bgAudio("Matthew", 28) 
      },
    },
  },
  {
    date: '2025-11-19',
    parashaSlug: 'toldot',
    
    readings: {
      torah: { 
        label: "Gen. 26:30-27:27", 
        book: "Genesis", 
        chapter: 26, 
        audioUrl: bgAudio("Genesis", 26) 
      },
      tanakh: { 
        label: "1 Samuel 11-12", 
        book: "1 Samuel", 
        chapter: 11, 
        audioUrl: bgAudio("1 Samuel", 11) 
      },
      nt: { 
        label: "Mark 1", 
        book: "Mark", 
        chapter: 1, 
        audioUrl: bgAudio("Mark", 1) 
      },
    },
  },
  {
    date: '2025-11-20',
    parashaSlug: 'toldot',
    
    readings: {
      torah: { 
        label: "Gen. 27:28-28:4", 
        book: "Genesis", 
        chapter: 27, 
        audioUrl: bgAudio("Genesis", 27) 
      },
      tanakh: { 
        label: "1 Samuel 13-14", 
        book: "1 Samuel", 
        chapter: 13, 
        audioUrl: bgAudio("1 Samuel", 13) 
      },
      nt: { 
        label: "Mark 2", 
        book: "Mark", 
        chapter: 2, 
        audioUrl: bgAudio("Mark", 2) 
      },
    },
  },
  {
    date: '2025-11-21',
    parashaSlug: 'toldot',
    
    readings: {
      torah: { 
        label: "Gen. 28:5-28:9", 
        book: "Genesis", 
        chapter: 28, 
        audioUrl: bgAudio("Genesis", 28) 
      },
      tanakh: { 
        label: "Malachi 1:1-2:7", 
        book: "Malachi", 
        chapter: 1, 
        audioUrl: bgAudio("Malachi", 1) 
      },
      nt: { 
        label: "Matthew 3:13-4:11", 
        book: "Matthew", 
        chapter: 3, 
        audioUrl: bgAudio("Matthew", 3) 
      },
    },
  },
  {
    date: '2025-11-23',
    parashaSlug: 'vayetzei',
    torahPortion: 'Vayetzei',
    readings: {
      torah: { 
        label: "Gen. 28:10-29:17", 
        book: "Genesis", 
        chapter: 28, 
        audioUrl: bgAudio("Genesis", 28) 
      },
      tanakh: { 
        label: "1 Samuel 15-16", 
        book: "1 Samuel", 
        chapter: 15, 
        audioUrl: bgAudio("1 Samuel", 15) 
      },
      nt: { 
        label: "Mark 3", 
        book: "Mark", 
        chapter: 3, 
        audioUrl: bgAudio("Mark", 3) 
      },
    },
  },
  {
    date: '2025-11-24',
    parashaSlug: 'vayetzei',
    
    readings: {
      torah: { 
        label: "Gen. 29:18-30:13", 
        book: "Genesis", 
        chapter: 29, 
        audioUrl: bgAudio("Genesis", 29) 
      },
      tanakh: { 
        label: "1 Samuel 17-18", 
        book: "1 Samuel", 
        chapter: 17, 
        audioUrl: bgAudio("1 Samuel", 17) 
      },
      nt: { 
        label: "Mark 4", 
        book: "Mark", 
        chapter: 4, 
        audioUrl: bgAudio("Mark", 4) 
      },
    },
  },
  {
    date: '2025-11-25',
    parashaSlug: 'vayetzei',
    
    readings: {
      torah: { 
        label: "Gen.30:14-30:27", 
        book: "Gen.30:14-30:27", 
        chapter: 1, 
        audioUrl: bgAudio("Gen.30:14-30:27", 1) 
      },
      tanakh: { 
        label: "1 Samuel 19-20", 
        book: "1 Samuel", 
        chapter: 19, 
        audioUrl: bgAudio("1 Samuel", 19) 
      },
      nt: { 
        label: "Mark 5", 
        book: "Mark", 
        chapter: 5, 
        audioUrl: bgAudio("Mark", 5) 
      },
    },
  },
  {
    date: '2025-11-26',
    parashaSlug: 'vayetzei',
    
    readings: {
      torah: { 
        label: "Gen. 30:28-31:16", 
        book: "Genesis", 
        chapter: 30, 
        audioUrl: bgAudio("Genesis", 30) 
      },
      tanakh: { 
        label: "1 Samuel 21-22", 
        book: "1 Samuel", 
        chapter: 21, 
        audioUrl: bgAudio("1 Samuel", 21) 
      },
      nt: { 
        label: "Mark 6", 
        book: "Mark", 
        chapter: 6, 
        audioUrl: bgAudio("Mark", 6) 
      },
    },
  },
  {
    date: '2025-11-27',
    parashaSlug: 'vayetzei',
    
    readings: {
      torah: { 
        label: "Gen. 31:17-31:42", 
        book: "Genesis", 
        chapter: 31, 
        audioUrl: bgAudio("Genesis", 31) 
      },
      tanakh: { 
        label: "1 Samuel 23-24", 
        book: "1 Samuel", 
        chapter: 23, 
        audioUrl: bgAudio("1 Samuel", 23) 
      },
      nt: { 
        label: "Mark 7", 
        book: "Mark", 
        chapter: 7, 
        audioUrl: bgAudio("Mark", 7) 
      },
    },
  },
  {
    date: '2025-11-28',
    parashaSlug: 'vayetzei',
    
    readings: {
      torah: { 
        label: "Gen. 31:43-32:3", 
        book: "Genesis", 
        chapter: 31, 
        audioUrl: bgAudio("Genesis", 31) 
      },
      tanakh: { 
        label: "Hosea 12:13-14:10", 
        book: "Hosea", 
        chapter: 12, 
        audioUrl: bgAudio("Hosea", 12) 
      },
      nt: { 
        label: "Mark 1:14-28", 
        book: "Mark", 
        chapter: 1, 
        audioUrl: bgAudio("Mark", 1) 
      },
    },
  },
  {
    date: '2025-11-30',
    parashaSlug: 'vayishlach',
    torahPortion: 'Vayishlach',
    readings: {
      torah: { 
        label: "Gen 32:4-32:30", 
        book: "Genesis", 
        chapter: 32, 
        audioUrl: bgAudio("Genesis", 32) 
      },
      tanakh: { 
        label: "1 Samuel 25-26", 
        book: "1 Samuel", 
        chapter: 25, 
        audioUrl: bgAudio("1 Samuel", 25) 
      },
      nt: { 
        label: "Mark 8", 
        book: "Mark", 
        chapter: 8, 
        audioUrl: bgAudio("Mark", 8) 
      },
    },
  },
  {
    date: '2025-12-01',
    parashaSlug: 'vayishlach',
    
    readings: {
      torah: { 
        label: "Gen. 32:31-33:5", 
        book: "Genesis", 
        chapter: 32, 
        audioUrl: bgAudio("Genesis", 32) 
      },
      tanakh: { 
        label: "1 Samuel 27-28", 
        book: "1 Samuel", 
        chapter: 27, 
        audioUrl: bgAudio("1 Samuel", 27) 
      },
      nt: { 
        label: "Mark 9", 
        book: "Mark", 
        chapter: 9, 
        audioUrl: bgAudio("Mark", 9) 
      },
    },
  },
  {
    date: '2025-12-02',
    parashaSlug: 'vayishlach',
    
    readings: {
      torah: { 
        label: "Gen. 33:6-33:20", 
        book: "Genesis", 
        chapter: 33, 
        audioUrl: bgAudio("Genesis", 33) 
      },
      tanakh: { 
        label: "1 Samuel 29-30", 
        book: "1 Samuel", 
        chapter: 29, 
        audioUrl: bgAudio("1 Samuel", 29) 
      },
      nt: { 
        label: "Mark 10", 
        book: "Mark", 
        chapter: 10, 
        audioUrl: bgAudio("Mark", 10) 
      },
    },
  },
  {
    date: '2025-12-03',
    parashaSlug: 'vayishlach',
    
    readings: {
      torah: { 
        label: "Gen. 34:1--35:11", 
        book: "Genesis", 
        chapter: 34, 
        audioUrl: bgAudio("Genesis", 34) 
      },
      tanakh: { 
        label: "1 Samuel 31", 
        book: "1 Samuel", 
        chapter: 31, 
        audioUrl: bgAudio("1 Samuel", 31) 
      },
      nt: { 
        label: "Mark 11", 
        book: "Mark", 
        chapter: 11, 
        audioUrl: bgAudio("Mark", 11) 
      },
    },
  },
  {
    date: '2025-12-04',
    parashaSlug: 'vayishlach',
    
    readings: {
      torah: { 
        label: "Gen 35:12-36:19", 
        book: "Genesis", 
        chapter: 35, 
        audioUrl: bgAudio("Genesis", 35) 
      },
      tanakh: { 
        label: "2 Samuel 1-2", 
        book: "2 Samuel", 
        chapter: 1, 
        audioUrl: bgAudio("2 Samuel", 1) 
      },
      nt: { 
        label: "Mark 12", 
        book: "Mark", 
        chapter: 12, 
        audioUrl: bgAudio("Mark", 12) 
      },
    },
  },
  {
    date: '2025-12-05',
    parashaSlug: 'vayishlach',
    
    readings: {
      torah: { 
        label: "Gen. 36:20-36:43", 
        book: "Genesis", 
        chapter: 36, 
        audioUrl: bgAudio("Genesis", 36) 
      },
      tanakh: { 
        label: "Obadiah 1:1-1:21", 
        book: "Obadiah", 
        chapter: 1, 
        audioUrl: bgAudio("Obadiah", 1) 
      },
      nt: { 
        label: "Mark 1:29-45", 
        book: "Mark", 
        chapter: 1, 
        audioUrl: bgAudio("Mark", 1) 
      },
    },
  },
  {
    date: '2025-12-07',
    parashaSlug: 'vayeshev',
    torahPortion: 'Vayeshev',
    readings: {
      torah: { 
        label: "Gen. 37:1-22", 
        book: "Genesis", 
        chapter: 37, 
        audioUrl: bgAudio("Genesis", 37) 
      },
      tanakh: { 
        label: "2 Samuel 3-4", 
        book: "2 Samuel", 
        chapter: 3, 
        audioUrl: bgAudio("2 Samuel", 3) 
      },
      nt: { 
        label: "Mark 13", 
        book: "Mark", 
        chapter: 13, 
        audioUrl: bgAudio("Mark", 13) 
      },
    },
  },
  {
    date: '2025-12-08',
    parashaSlug: 'vayeshev',
    
    readings: {
      torah: { 
        label: "Gen. 37:23-36", 
        book: "Genesis", 
        chapter: 37, 
        audioUrl: bgAudio("Genesis", 37) 
      },
      tanakh: { 
        label: "2 Samuel 5-6", 
        book: "2 Samuel", 
        chapter: 5, 
        audioUrl: bgAudio("2 Samuel", 5) 
      },
      nt: { 
        label: "Mark 14", 
        book: "Mark", 
        chapter: 14, 
        audioUrl: bgAudio("Mark", 14) 
      },
    },
  },
  {
    date: '2025-12-09',
    parashaSlug: 'vayeshev',
    
    readings: {
      torah: { 
        label: "Gen. 38:1-30", 
        book: "Genesis", 
        chapter: 38, 
        audioUrl: bgAudio("Genesis", 38) 
      },
      tanakh: { 
        label: "2 Samuel 7-8", 
        book: "2 Samuel", 
        chapter: 7, 
        audioUrl: bgAudio("2 Samuel", 7) 
      },
      nt: { 
        label: "Mark 15", 
        book: "Mark", 
        chapter: 15, 
        audioUrl: bgAudio("Mark", 15) 
      },
    },
  },
  {
    date: '2025-12-10',
    parashaSlug: 'vayeshev',
    
    readings: {
      torah: { 
        label: "Gen. 39:1-6", 
        book: "Genesis", 
        chapter: 39, 
        audioUrl: bgAudio("Genesis", 39) 
      },
      tanakh: { 
        label: "2 Samuel 9-10", 
        book: "2 Samuel", 
        chapter: 9, 
        audioUrl: bgAudio("2 Samuel", 9) 
      },
      nt: { 
        label: "Mark 16", 
        book: "Mark", 
        chapter: 16, 
        audioUrl: bgAudio("Mark", 16) 
      },
    },
  },
  {
    date: '2025-12-11',
    parashaSlug: 'vayeshev',
    
    readings: {
      torah: { 
        label: "Gen. 39:7-23", 
        book: "Genesis", 
        chapter: 39, 
        audioUrl: bgAudio("Genesis", 39) 
      },
      tanakh: { 
        label: "2 Samuel 11-12", 
        book: "2 Samuel", 
        chapter: 11, 
        audioUrl: bgAudio("2 Samuel", 11) 
      },
      nt: { 
        label: "Luke 1", 
        book: "Luke", 
        chapter: 1, 
        audioUrl: bgAudio("Luke", 1) 
      },
    },
  },
  {
    date: '2025-12-12',
    parashaSlug: 'vayeshev',
    
    readings: {
      torah: { 
        label: "Gen. 40:1-23", 
        book: "Genesis", 
        chapter: 40, 
        audioUrl: bgAudio("Genesis", 40) 
      },
      tanakh: { 
        label: "Amos 2:6-3:8", 
        book: "Amos", 
        chapter: 2, 
        audioUrl: bgAudio("Amos", 2) 
      },
      nt: { 
        label: "Matthew 5:1-16", 
        book: "Matthew", 
        chapter: 5, 
        audioUrl: bgAudio("Matthew", 5) 
      },
    },
  },
  {
    date: '2025-12-14',
    parashaSlug: 'miketz',
    torahPortion: 'Miketz',
    readings: {
      torah: { 
        label: "41:1-38", 
        book: "41:1-38", 
        chapter: 1, 
        audioUrl: bgAudio("41:1-38", 1) 
      },
      tanakh: { 
        label: "2 Samuel 13-14", 
        book: "2 Samuel", 
        chapter: 13, 
        audioUrl: bgAudio("2 Samuel", 13) 
      },
      nt: { 
        label: "Luke 2", 
        book: "Luke", 
        chapter: 2, 
        audioUrl: bgAudio("Luke", 2) 
      },
    },
  },
  {
    date: '2025-12-15',
    parashaSlug: 'miketz',
    
    readings: {
      torah: { 
        label: "Gen. 41:39-52", 
        book: "Genesis", 
        chapter: 41, 
        audioUrl: bgAudio("Genesis", 41) 
      },
      tanakh: { 
        label: "2 Samuel 15-16", 
        book: "2 Samuel", 
        chapter: 15, 
        audioUrl: bgAudio("2 Samuel", 15) 
      },
      nt: { 
        label: "Luke 3", 
        book: "Luke", 
        chapter: 3, 
        audioUrl: bgAudio("Luke", 3) 
      },
    },
  },
  {
    date: '2025-12-16',
    parashaSlug: 'miketz',
    
    readings: {
      torah: { 
        label: "Gen. 41:53-42:18", 
        book: "Genesis", 
        chapter: 41, 
        audioUrl: bgAudio("Genesis", 41) 
      },
      tanakh: { 
        label: "2 Samuel 17-18", 
        book: "2 Samuel", 
        chapter: 17, 
        audioUrl: bgAudio("2 Samuel", 17) 
      },
      nt: { 
        label: "Luke 4", 
        book: "Luke", 
        chapter: 4, 
        audioUrl: bgAudio("Luke", 4) 
      },
    },
  },
  {
    date: '2025-12-17',
    parashaSlug: 'miketz',
    
    readings: {
      torah: { 
        label: "Gen. 42:19-43:15", 
        book: "Genesis", 
        chapter: 42, 
        audioUrl: bgAudio("Genesis", 42) 
      },
      tanakh: { 
        label: "2 Samuel 19-20", 
        book: "2 Samuel", 
        chapter: 19, 
        audioUrl: bgAudio("2 Samuel", 19) 
      },
      nt: { 
        label: "Luke 5", 
        book: "Luke", 
        chapter: 5, 
        audioUrl: bgAudio("Luke", 5) 
      },
    },
  },
  {
    date: '2025-12-18',
    parashaSlug: 'miketz',
    
    readings: {
      torah: { 
        label: "Gen. 43:16 - 29", 
        book: "Genesis", 
        chapter: 43, 
        audioUrl: bgAudio("Genesis", 43) 
      },
      tanakh: { 
        label: "2 Samuel 21-22", 
        book: "2 Samuel", 
        chapter: 21, 
        audioUrl: bgAudio("2 Samuel", 21) 
      },
      nt: { 
        label: "Luke 6", 
        book: "Luke", 
        chapter: 6, 
        audioUrl: bgAudio("Luke", 6) 
      },
    },
  },
  {
    date: '2025-12-19',
    parashaSlug: 'miketz',
    
    readings: {
      torah: { 
        label: "Gen. 43:30-44:17", 
        book: "Genesis", 
        chapter: 43, 
        audioUrl: bgAudio("Genesis", 43) 
      },
      tanakh: { 
        label: "Num. 7:42-47", 
        book: "Num", 
        chapter: 7, 
        audioUrl: bgAudio("Num", 7) 
      },
      nt: { 
        label: "Isaiah 66:5-24", 
        book: "Isaiah", 
        chapter: 66, 
        audioUrl: bgAudio("Isaiah", 66) 
      },
    },
  },
  {
    date: '2025-12-21',
    parashaSlug: 'miketz',
    
    readings: {
      torah: { 
        label: "VAYIGASH Gen 44:18-44:30&44:31-45:7", 
        book: "VAYIGASH Gen 44:18-44:30&44:31-45:7", 
        chapter: 1, 
        audioUrl: bgAudio("VAYIGASH Gen 44:18-44:30&44:31-45:7", 1) 
      },
      tanakh: { 
        label: "2 Samuel 23-24", 
        book: "2 Samuel", 
        chapter: 23, 
        audioUrl: bgAudio("2 Samuel", 23) 
      },
      nt: { 
        label: "Luke 7", 
        book: "Luke", 
        chapter: 7, 
        audioUrl: bgAudio("Luke", 7) 
      },
    },
  },
  {
    date: '2025-12-22',
    parashaSlug: 'miketz',
    
    readings: {
      torah: { 
        label: "Gen.45:8-18", 
        book: "Gen.45:8-18", 
        chapter: 1, 
        audioUrl: bgAudio("Gen.45:8-18", 1) 
      },
      tanakh: { 
        label: "1 Kings 1", 
        book: "1 Kings", 
        chapter: 1, 
        audioUrl: bgAudio("1 Kings", 1) 
      },
      nt: { 
        label: "Luke 8", 
        book: "Luke", 
        chapter: 8, 
        audioUrl: bgAudio("Luke", 8) 
      },
    },
  },
  {
    date: '2025-12-23',
    parashaSlug: 'miketz',
    
    readings: {
      torah: { 
        label: "Gen 45:19-27", 
        book: "Genesis", 
        chapter: 45, 
        audioUrl: bgAudio("Genesis", 45) 
      },
      tanakh: { 
        label: "1 Kings 2", 
        book: "1 Kings", 
        chapter: 2, 
        audioUrl: bgAudio("1 Kings", 2) 
      },
      nt: { 
        label: "Luke 9", 
        book: "Luke", 
        chapter: 9, 
        audioUrl: bgAudio("Luke", 9) 
      },
    },
  },
  {
    date: '2025-12-24',
    parashaSlug: 'miketz',
    
    readings: {
      torah: { 
        label: "Gen 45:28 - 46:27", 
        book: "Genesis", 
        chapter: 45, 
        audioUrl: bgAudio("Genesis", 45) 
      },
      tanakh: { 
        label: "1 Kings 3-4", 
        book: "1 Kings", 
        chapter: 3, 
        audioUrl: bgAudio("1 Kings", 3) 
      },
      nt: { 
        label: "Luke 10", 
        book: "Luke", 
        chapter: 10, 
        audioUrl: bgAudio("Luke", 10) 
      },
    },
  },
  {
    date: '2025-12-25',
    parashaSlug: 'miketz',
    
    readings: {
      torah: { 
        label: "Gen 46:28-47:10", 
        book: "Genesis", 
        chapter: 46, 
        audioUrl: bgAudio("Genesis", 46) 
      },
      tanakh: { 
        label: "1 Kings 5", 
        book: "1 Kings", 
        chapter: 5, 
        audioUrl: bgAudio("1 Kings", 5) 
      },
      nt: { 
        label: "Luke 11", 
        book: "Luke", 
        chapter: 11, 
        audioUrl: bgAudio("Luke", 11) 
      },
    },
  },
  {
    date: '2025-12-26',
    parashaSlug: 'miketz',
    
    readings: {
      torah: { 
        label: "Gen 47:11-47:27", 
        book: "Genesis", 
        chapter: 47, 
        audioUrl: bgAudio("Genesis", 47) 
      },
      tanakh: { 
        label: "Ezekiel 37:15-28", 
        book: "Ezekiel", 
        chapter: 37, 
        audioUrl: bgAudio("Ezekiel", 37) 
      },
      nt: { 
        label: "Matthew 5:27-48", 
        book: "Matthew", 
        chapter: 5, 
        audioUrl: bgAudio("Matthew", 5) 
      },
    },
  },
  {
    date: '2025-12-28',
    parashaSlug: 'vayechi',
    torahPortion: 'Vayechi',
    readings: {
      torah: { 
        label: "Gen 47:28-48:9 &48:10-48:16", 
        book: "Genesis", 
        chapter: 47, 
        audioUrl: bgAudio("Genesis", 47) 
      },
      tanakh: { 
        label: "1 Kings 6", 
        book: "1 Kings", 
        chapter: 6, 
        audioUrl: bgAudio("1 Kings", 6) 
      },
      nt: { 
        label: "Luke 12", 
        book: "Luke", 
        chapter: 12, 
        audioUrl: bgAudio("Luke", 12) 
      },
    },
  },
  {
    date: '2025-12-29',
    parashaSlug: 'vayechi',
    
    readings: {
      torah: { 
        label: "Gen 48:17-48:22", 
        book: "Genesis", 
        chapter: 48, 
        audioUrl: bgAudio("Genesis", 48) 
      },
      tanakh: { 
        label: "1 Kings 7", 
        book: "1 Kings", 
        chapter: 7, 
        audioUrl: bgAudio("1 Kings", 7) 
      },
      nt: { 
        label: "Luke 13", 
        book: "Luke", 
        chapter: 13, 
        audioUrl: bgAudio("Luke", 13) 
      },
    },
  },
  {
    date: '2025-12-30',
    parashaSlug: 'vayechi',
    
    readings: {
      torah: { 
        label: "Gen 49:1-49:18", 
        book: "Genesis", 
        chapter: 49, 
        audioUrl: bgAudio("Genesis", 49) 
      },
      tanakh: { 
        label: "1 Kings 8", 
        book: "1 Kings", 
        chapter: 8, 
        audioUrl: bgAudio("1 Kings", 8) 
      },
      nt: { 
        label: "Luke 14", 
        book: "Luke", 
        chapter: 14, 
        audioUrl: bgAudio("Luke", 14) 
      },
    },
  },
  {
    date: '2025-12-31',
    parashaSlug: 'vayechi',
    
    readings: {
      torah: { 
        label: "Gen 49:19-49:26", 
        book: "Genesis", 
        chapter: 49, 
        audioUrl: bgAudio("Genesis", 49) 
      },
      tanakh: { 
        label: "1 Kings 9 & 10", 
        book: "1 Kings", 
        chapter: 9, 
        audioUrl: bgAudio("1 Kings", 9) 
      },
      nt: { 
        label: "Luke 15", 
        book: "Luke", 
        chapter: 15, 
        audioUrl: bgAudio("Luke", 15) 
      },
    },
  },
  {
    date: '2026-01-01',
    parashaSlug: 'vayechi',
    
    readings: {
      torah: { 
        label: "Gen 49:27-50:20", 
        book: "Genesis", 
        chapter: 49, 
        audioUrl: bgAudio("Genesis", 49) 
      },
      tanakh: { 
        label: "1 Kings 11", 
        book: "1 Kings", 
        chapter: 11, 
        audioUrl: bgAudio("1 Kings", 11) 
      },
      nt: { 
        label: "Luke 16", 
        book: "Luke", 
        chapter: 16, 
        audioUrl: bgAudio("Luke", 16) 
      },
    },
  },
  {
    date: '2026-01-02',
    parashaSlug: 'vayechi',
    
    readings: {
      torah: { 
        label: "Gen 50:21-50:26", 
        book: "Genesis", 
        chapter: 50, 
        audioUrl: bgAudio("Genesis", 50) 
      },
      tanakh: { 
        label: "1 Kings 2:1-2:12", 
        book: "1 Kings", 
        chapter: 2, 
        audioUrl: bgAudio("1 Kings", 2) 
      },
      nt: { 
        label: "Matthew 6:1-18", 
        book: "Matthew", 
        chapter: 6, 
        audioUrl: bgAudio("Matthew", 6) 
      },
    },
  },
  {
    date: '2026-01-04',
    parashaSlug: 'shemot',
    torahPortion: 'Shemot',
    readings: {
      torah: { 
        label: "EX 1:1-2:10", 
        book: "EX", 
        chapter: 1, 
        audioUrl: bgAudio("EX", 1) 
      },
      tanakh: { 
        label: "1 Kings 12-13", 
        book: "1 Kings", 
        chapter: 12, 
        audioUrl: bgAudio("1 Kings", 12) 
      },
      nt: { 
        label: "Luke 17", 
        book: "Luke", 
        chapter: 17, 
        audioUrl: bgAudio("Luke", 17) 
      },
    },
  },
  {
    date: '2026-01-05',
    parashaSlug: 'shemot',
    
    readings: {
      torah: { 
        label: "Exodus 2:11-2:25", 
        book: "Exodus", 
        chapter: 2, 
        audioUrl: bgAudio("Exodus", 2) 
      },
      tanakh: { 
        label: "1 Kings 14-15", 
        book: "1 Kings", 
        chapter: 14, 
        audioUrl: bgAudio("1 Kings", 14) 
      },
      nt: { 
        label: "Luke 18", 
        book: "Luke", 
        chapter: 18, 
        audioUrl: bgAudio("Luke", 18) 
      },
    },
  },
  {
    date: '2026-01-06',
    parashaSlug: 'shemot',
    
    readings: {
      torah: { 
        label: "Exodus 3:1-3:15", 
        book: "Exodus", 
        chapter: 3, 
        audioUrl: bgAudio("Exodus", 3) 
      },
      tanakh: { 
        label: "1 Kings 16-17", 
        book: "1 Kings", 
        chapter: 16, 
        audioUrl: bgAudio("1 Kings", 16) 
      },
      nt: { 
        label: "Luke 19", 
        book: "Luke", 
        chapter: 19, 
        audioUrl: bgAudio("Luke", 19) 
      },
    },
  },
  {
    date: '2026-01-07',
    parashaSlug: 'shemot',
    
    readings: {
      torah: { 
        label: "Exodus 3:16-4:17", 
        book: "Exodus", 
        chapter: 3, 
        audioUrl: bgAudio("Exodus", 3) 
      },
      tanakh: { 
        label: "1 Kings 18", 
        book: "1 Kings", 
        chapter: 18, 
        audioUrl: bgAudio("1 Kings", 18) 
      },
      nt: { 
        label: "Luke 20", 
        book: "Luke", 
        chapter: 20, 
        audioUrl: bgAudio("Luke", 20) 
      },
    },
  },
  {
    date: '2026-01-08',
    parashaSlug: 'shemot',
    
    readings: {
      torah: { 
        label: "Exodus 4:18-4:31", 
        book: "Exodus", 
        chapter: 4, 
        audioUrl: bgAudio("Exodus", 4) 
      },
      tanakh: { 
        label: "1 Kings 19", 
        book: "1 Kings", 
        chapter: 19, 
        audioUrl: bgAudio("1 Kings", 19) 
      },
      nt: { 
        label: "Luke 21", 
        book: "Luke", 
        chapter: 21, 
        audioUrl: bgAudio("Luke", 21) 
      },
    },
  },
  {
    date: '2026-01-09',
    parashaSlug: 'shemot',
    
    readings: {
      torah: { 
        label: "Exodus 5:1-6:1", 
        book: "Exodus", 
        chapter: 5, 
        audioUrl: bgAudio("Exodus", 5) 
      },
      tanakh: { 
        label: "Isaiah 27:6-28:13", 
        book: "Isaiah", 
        chapter: 27, 
        audioUrl: bgAudio("Isaiah", 27) 
      },
      nt: { 
        label: "29:22-23", 
        book: "29:22-23", 
        chapter: 1, 
        audioUrl: bgAudio("29:22-23", 1) 
      },
    },
  },
  {
    date: '2026-01-11',
    parashaSlug: 'vaera',
    torahPortion: 'Vaera',
    readings: {
      torah: { 
        label: "Ex 6:2-6:13", 
        book: "Ex", 
        chapter: 6, 
        audioUrl: bgAudio("Ex", 6) 
      },
      tanakh: { 
        label: "6:14-6:28", 
        book: "6:14-6:28", 
        chapter: 1, 
        audioUrl: bgAudio("6:14-6:28", 1) 
      },
      nt: { 
        label: "1 Kings 20-21", 
        book: "1 Kings", 
        chapter: 20, 
        audioUrl: bgAudio("1 Kings", 20) 
      },
    },
  },
  {
    date: '2026-01-12',
    parashaSlug: 'vaera',
    
    readings: {
      torah: { 
        label: "Exodus 6:29-7:7", 
        book: "Exodus", 
        chapter: 6, 
        audioUrl: bgAudio("Exodus", 6) 
      },
      tanakh: { 
        label: "1 Kings 22", 
        book: "1 Kings", 
        chapter: 22, 
        audioUrl: bgAudio("1 Kings", 22) 
      },
      nt: { 
        label: "Luke 23", 
        book: "Luke", 
        chapter: 23, 
        audioUrl: bgAudio("Luke", 23) 
      },
    },
  },
  {
    date: '2026-01-13',
    parashaSlug: 'vaera',
    
    readings: {
      torah: { 
        label: "Exodus 7:8 - 8:6", 
        book: "Exodus", 
        chapter: 7, 
        audioUrl: bgAudio("Exodus", 7) 
      },
      tanakh: { 
        label: "2 Kings 1-2", 
        book: "2 Kings", 
        chapter: 1, 
        audioUrl: bgAudio("2 Kings", 1) 
      },
      nt: { 
        label: "Luke 24", 
        book: "Luke", 
        chapter: 24, 
        audioUrl: bgAudio("Luke", 24) 
      },
    },
  },
  {
    date: '2026-01-14',
    parashaSlug: 'vaera',
    
    readings: {
      torah: { 
        label: "Exodus 8:7 - 8:18", 
        book: "Exodus", 
        chapter: 8, 
        audioUrl: bgAudio("Exodus", 8) 
      },
      tanakh: { 
        label: "2 Kings 3-4", 
        book: "2 Kings", 
        chapter: 3, 
        audioUrl: bgAudio("2 Kings", 3) 
      },
      nt: { 
        label: "John 1", 
        book: "John", 
        chapter: 1, 
        audioUrl: bgAudio("John", 1) 
      },
    },
  },
  {
    date: '2026-01-15',
    parashaSlug: 'vaera',
    
    readings: {
      torah: { 
        label: "Exodus 8:19 -9:16", 
        book: "Exodus", 
        chapter: 8, 
        audioUrl: bgAudio("Exodus", 8) 
      },
      tanakh: { 
        label: "2 Kings 5-6", 
        book: "2 Kings", 
        chapter: 5, 
        audioUrl: bgAudio("2 Kings", 5) 
      },
      nt: { 
        label: "John 2", 
        book: "John", 
        chapter: 2, 
        audioUrl: bgAudio("John", 2) 
      },
    },
  },
  {
    date: '2026-01-16',
    parashaSlug: 'vaera',
    
    readings: {
      torah: { 
        label: "Exodus 9:17 - 9:35", 
        book: "Exodus", 
        chapter: 9, 
        audioUrl: bgAudio("Exodus", 9) 
      },
      tanakh: { 
        label: "Ezekiel 28:25 - 29:21", 
        book: "Ezekiel", 
        chapter: 28, 
        audioUrl: bgAudio("Ezekiel", 28) 
      },
      nt: { 
        label: "Matthew 7:1-12", 
        book: "Matthew", 
        chapter: 7, 
        audioUrl: bgAudio("Matthew", 7) 
      },
    },
  },
  {
    date: '2026-01-18',
    parashaSlug: 'vaera',
    
    readings: {
      torah: { 
        label: "Exodus 10:1-23", 
        book: "Exodus", 
        chapter: 10, 
        audioUrl: bgAudio("Exodus", 10) 
      },
      tanakh: { 
        label: "2 Kings 7-8", 
        book: "2 Kings", 
        chapter: 7, 
        audioUrl: bgAudio("2 Kings", 7) 
      },
      nt: { 
        label: "John 3", 
        book: "John", 
        chapter: 3, 
        audioUrl: bgAudio("John", 3) 
      },
    },
  },
  {
    date: '2026-01-19',
    parashaSlug: 'vaera',
    
    readings: {
      torah: { 
        label: "Exodus 10:24-11:3", 
        book: "Exodus", 
        chapter: 10, 
        audioUrl: bgAudio("Exodus", 10) 
      },
      tanakh: { 
        label: "2 Kings 9-10", 
        book: "2 Kings", 
        chapter: 9, 
        audioUrl: bgAudio("2 Kings", 9) 
      },
      nt: { 
        label: "John 4", 
        book: "John", 
        chapter: 4, 
        audioUrl: bgAudio("John", 4) 
      },
    },
  },
  {
    date: '2026-01-20',
    parashaSlug: 'vaera',
    
    readings: {
      torah: { 
        label: "Exodus 11:4-12:20", 
        book: "Exodus", 
        chapter: 11, 
        audioUrl: bgAudio("Exodus", 11) 
      },
      tanakh: { 
        label: "2 Kings 11-12", 
        book: "2 Kings", 
        chapter: 11, 
        audioUrl: bgAudio("2 Kings", 11) 
      },
      nt: { 
        label: "John 5", 
        book: "John", 
        chapter: 5, 
        audioUrl: bgAudio("John", 5) 
      },
    },
  },
  {
    date: '2026-01-21',
    parashaSlug: 'vaera',
    
    readings: {
      torah: { 
        label: "Exodus 12:21-28", 
        book: "Exodus", 
        chapter: 12, 
        audioUrl: bgAudio("Exodus", 12) 
      },
      tanakh: { 
        label: "2 Kings 13-14", 
        book: "2 Kings", 
        chapter: 13, 
        audioUrl: bgAudio("2 Kings", 13) 
      },
      nt: { 
        label: "John 6", 
        book: "John", 
        chapter: 6, 
        audioUrl: bgAudio("John", 6) 
      },
    },
  },
  {
    date: '2026-01-22',
    parashaSlug: 'vaera',
    
    readings: {
      torah: { 
        label: "Exodus 12:29-12:51", 
        book: "Exodus", 
        chapter: 12, 
        audioUrl: bgAudio("Exodus", 12) 
      },
      tanakh: { 
        label: "2 Kings 15-16", 
        book: "2 Kings", 
        chapter: 15, 
        audioUrl: bgAudio("2 Kings", 15) 
      },
      nt: { 
        label: "John 7", 
        book: "John", 
        chapter: 7, 
        audioUrl: bgAudio("John", 7) 
      },
    },
  },
  {
    date: '2026-01-23',
    parashaSlug: 'vaera',
    
    readings: {
      torah: { 
        label: "Exodus 13:1-16", 
        book: "Exodus", 
        chapter: 13, 
        audioUrl: bgAudio("Exodus", 13) 
      },
      tanakh: { 
        label: "Jeremiah 46:13-28", 
        book: "Jeremiah", 
        chapter: 46, 
        audioUrl: bgAudio("Jeremiah", 46) 
      },
      nt: { 
        label: "Matthew 7:13-29", 
        book: "Matthew", 
        chapter: 7, 
        audioUrl: bgAudio("Matthew", 7) 
      },
    },
  },
  {
    date: '2026-01-25',
    parashaSlug: 'beshalach',
    torahPortion: 'Beshalach',
    readings: {
      torah: { 
        label: "Exodus 13:17-14:14", 
        book: "Exodus", 
        chapter: 13, 
        audioUrl: bgAudio("Exodus", 13) 
      },
      tanakh: { 
        label: "2 Kings 17", 
        book: "2 Kings", 
        chapter: 17, 
        audioUrl: bgAudio("2 Kings", 17) 
      },
      nt: { 
        label: "John 8", 
        book: "John", 
        chapter: 8, 
        audioUrl: bgAudio("John", 8) 
      },
    },
  },
  {
    date: '2026-01-26',
    parashaSlug: 'beshalach',
    
    readings: {
      torah: { 
        label: "Exodus 14:15-14:25", 
        book: "Exodus", 
        chapter: 14, 
        audioUrl: bgAudio("Exodus", 14) 
      },
      tanakh: { 
        label: "2 Kings 18", 
        book: "2 Kings", 
        chapter: 18, 
        audioUrl: bgAudio("2 Kings", 18) 
      },
      nt: { 
        label: "John 9", 
        book: "John", 
        chapter: 9, 
        audioUrl: bgAudio("John", 9) 
      },
    },
  },
  {
    date: '2026-01-27',
    parashaSlug: 'beshalach',
    
    readings: {
      torah: { 
        label: "Exodus 14:26-15:26", 
        book: "Exodus", 
        chapter: 14, 
        audioUrl: bgAudio("Exodus", 14) 
      },
      tanakh: { 
        label: "2 Kings 19-20", 
        book: "2 Kings", 
        chapter: 19, 
        audioUrl: bgAudio("2 Kings", 19) 
      },
      nt: { 
        label: "John 10", 
        book: "John", 
        chapter: 10, 
        audioUrl: bgAudio("John", 10) 
      },
    },
  },
  {
    date: '2026-01-28',
    parashaSlug: 'beshalach',
    
    readings: {
      torah: { 
        label: "Exodus 15:27-16:10", 
        book: "Exodus", 
        chapter: 15, 
        audioUrl: bgAudio("Exodus", 15) 
      },
      tanakh: { 
        label: "2 Kings 21-22", 
        book: "2 Kings", 
        chapter: 21, 
        audioUrl: bgAudio("2 Kings", 21) 
      },
      nt: { 
        label: "John 11", 
        book: "John", 
        chapter: 11, 
        audioUrl: bgAudio("John", 11) 
      },
    },
  },
  {
    date: '2026-01-29',
    parashaSlug: 'beshalach',
    
    readings: {
      torah: { 
        label: "Exodus 16:11-16:36", 
        book: "Exodus", 
        chapter: 16, 
        audioUrl: bgAudio("Exodus", 16) 
      },
      tanakh: { 
        label: "2 Kings 23-24", 
        book: "2 Kings", 
        chapter: 23, 
        audioUrl: bgAudio("2 Kings", 23) 
      },
      nt: { 
        label: "John 12", 
        book: "John", 
        chapter: 12, 
        audioUrl: bgAudio("John", 12) 
      },
    },
  },
  {
    date: '2026-01-30',
    parashaSlug: 'beshalach',
    
    readings: {
      torah: { 
        label: "Exodus 17:1-17:16", 
        book: "Exodus", 
        chapter: 17, 
        audioUrl: bgAudio("Exodus", 17) 
      },
      tanakh: { 
        label: "Judges 4:4-5:31", 
        book: "Judges", 
        chapter: 4, 
        audioUrl: bgAudio("Judges", 4) 
      },
      nt: { 
        label: "Mark 2:1-12", 
        book: "Mark", 
        chapter: 2, 
        audioUrl: bgAudio("Mark", 2) 
      },
    },
  },
  {
    date: '2026-02-01',
    parashaSlug: 'yitro',
    torahPortion: 'Yitro',
    readings: {
      torah: { 
        label: "Exodus 18:1-12 & 18:13-23", 
        book: "Exodus", 
        chapter: 18, 
        audioUrl: bgAudio("Exodus", 18) 
      },
      tanakh: { 
        label: "2 Kings 25", 
        book: "2 Kings", 
        chapter: 25, 
        audioUrl: bgAudio("2 Kings", 25) 
      },
      nt: { 
        label: "John 13", 
        book: "John", 
        chapter: 13, 
        audioUrl: bgAudio("John", 13) 
      },
    },
  },
  {
    date: '2026-02-02',
    parashaSlug: 'yitro',
    
    readings: {
      torah: { 
        label: "Exodus 18:24 - 27", 
        book: "Exodus", 
        chapter: 18, 
        audioUrl: bgAudio("Exodus", 18) 
      },
      tanakh: { 
        label: "Isaiah 1-2", 
        book: "Isaiah", 
        chapter: 1, 
        audioUrl: bgAudio("Isaiah", 1) 
      },
      nt: { 
        label: "John 14", 
        book: "John", 
        chapter: 14, 
        audioUrl: bgAudio("John", 14) 
      },
    },
  },
  {
    date: '2026-02-03',
    parashaSlug: 'yitro',
    
    readings: {
      torah: { 
        label: "Exodus 19:1-6", 
        book: "Exodus", 
        chapter: 19, 
        audioUrl: bgAudio("Exodus", 19) 
      },
      tanakh: { 
        label: "Isaiah 3-5", 
        book: "Isaiah", 
        chapter: 3, 
        audioUrl: bgAudio("Isaiah", 3) 
      },
      nt: { 
        label: "John 15", 
        book: "John", 
        chapter: 15, 
        audioUrl: bgAudio("John", 15) 
      },
    },
  },
  {
    date: '2026-02-04',
    parashaSlug: 'yitro',
    
    readings: {
      torah: { 
        label: "Exodus 19:7 -19", 
        book: "Exodus", 
        chapter: 19, 
        audioUrl: bgAudio("Exodus", 19) 
      },
      tanakh: { 
        label: "Isaiah 6-8", 
        book: "Isaiah", 
        chapter: 6, 
        audioUrl: bgAudio("Isaiah", 6) 
      },
      nt: { 
        label: "John 16", 
        book: "John", 
        chapter: 16, 
        audioUrl: bgAudio("John", 16) 
      },
    },
  },
  {
    date: '2026-02-05',
    parashaSlug: 'yitro',
    
    readings: {
      torah: { 
        label: "Exodus 19:20 - 20:14", 
        book: "Exodus", 
        chapter: 19, 
        audioUrl: bgAudio("Exodus", 19) 
      },
      tanakh: { 
        label: "Isaiah 9-11", 
        book: "Isaiah", 
        chapter: 9, 
        audioUrl: bgAudio("Isaiah", 9) 
      },
      nt: { 
        label: "John 17", 
        book: "John", 
        chapter: 17, 
        audioUrl: bgAudio("John", 17) 
      },
    },
  },
  {
    date: '2026-02-06',
    parashaSlug: 'yitro',
    
    readings: {
      torah: { 
        label: "Exodus 20:15 - 20:23", 
        book: "Exodus", 
        chapter: 20, 
        audioUrl: bgAudio("Exodus", 20) 
      },
      tanakh: { 
        label: "Isaiah 6:1-7-6", 
        book: "Isaiah", 
        chapter: 6, 
        audioUrl: bgAudio("Isaiah", 6) 
      },
      nt: { 
        label: "9:5-6", 
        book: "9:5-6", 
        chapter: 1, 
        audioUrl: bgAudio("9:5-6", 1) 
      },
    },
  },
  {
    date: '2026-02-08',
    parashaSlug: 'mishpatim',
    torahPortion: 'Mishpatim',
    readings: {
      torah: { 
        label: "Exodus 21:1-22:23", 
        book: "Exodus", 
        chapter: 21, 
        audioUrl: bgAudio("Exodus", 21) 
      },
      tanakh: { 
        label: "Isaiah 12-14", 
        book: "Isaiah", 
        chapter: 12, 
        audioUrl: bgAudio("Isaiah", 12) 
      },
      nt: { 
        label: "John 18", 
        book: "John", 
        chapter: 18, 
        audioUrl: bgAudio("John", 18) 
      },
    },
  },
  {
    date: '2026-02-09',
    parashaSlug: 'mishpatim',
    
    readings: {
      torah: { 
        label: "Exodus 22:4-22:26", 
        book: "Exodus", 
        chapter: 22, 
        audioUrl: bgAudio("Exodus", 22) 
      },
      tanakh: { 
        label: "Isaiah 15-17", 
        book: "Isaiah", 
        chapter: 15, 
        audioUrl: bgAudio("Isaiah", 15) 
      },
      nt: { 
        label: "John 19", 
        book: "John", 
        chapter: 19, 
        audioUrl: bgAudio("John", 19) 
      },
    },
  },
  {
    date: '2026-02-10',
    parashaSlug: 'mishpatim',
    
    readings: {
      torah: { 
        label: "Exodus 22:27-23:5", 
        book: "Exodus", 
        chapter: 22, 
        audioUrl: bgAudio("Exodus", 22) 
      },
      tanakh: { 
        label: "Isaiah 18-20", 
        book: "Isaiah", 
        chapter: 18, 
        audioUrl: bgAudio("Isaiah", 18) 
      },
      nt: { 
        label: "John 20", 
        book: "John", 
        chapter: 20, 
        audioUrl: bgAudio("John", 20) 
      },
    },
  },
  {
    date: '2026-02-11',
    parashaSlug: 'mishpatim',
    
    readings: {
      torah: { 
        label: "Exodus 23:6 - 23:19", 
        book: "Exodus", 
        chapter: 23, 
        audioUrl: bgAudio("Exodus", 23) 
      },
      tanakh: { 
        label: "Isaiah 21-23", 
        book: "Isaiah", 
        chapter: 21, 
        audioUrl: bgAudio("Isaiah", 21) 
      },
      nt: { 
        label: "John 21", 
        book: "John", 
        chapter: 21, 
        audioUrl: bgAudio("John", 21) 
      },
    },
  },
  {
    date: '2026-02-12',
    parashaSlug: 'mishpatim',
    
    readings: {
      torah: { 
        label: "Exodus 23:20 - 23:25", 
        book: "Exodus", 
        chapter: 23, 
        audioUrl: bgAudio("Exodus", 23) 
      },
      tanakh: { 
        label: "Isaiah 24-26", 
        book: "Isaiah", 
        chapter: 24, 
        audioUrl: bgAudio("Isaiah", 24) 
      },
      nt: { 
        label: "Acts 1", 
        book: "Acts", 
        chapter: 1, 
        audioUrl: bgAudio("Acts", 1) 
      },
    },
  },
  {
    date: '2026-02-13',
    parashaSlug: 'mishpatim',
    
    readings: {
      torah: { 
        label: "Exodus 23:26 - 24:18", 
        book: "Exodus", 
        chapter: 23, 
        audioUrl: bgAudio("Exodus", 23) 
      },
      tanakh: { 
        label: "2 Kings 12:1-17", 
        book: "2 Kings", 
        chapter: 12, 
        audioUrl: bgAudio("2 Kings", 12) 
      },
      nt: { 
        label: "Mark 12:41-44", 
        book: "Mark", 
        chapter: 12, 
        audioUrl: bgAudio("Mark", 12) 
      },
    },
  },
  {
    date: '2026-02-15',
    parashaSlug: 'terumah',
    torahPortion: 'Terumah',
    readings: {
      torah: { 
        label: "Exodus 25:1-30", 
        book: "Exodus", 
        chapter: 25, 
        audioUrl: bgAudio("Exodus", 25) 
      },
      tanakh: { 
        label: "Isaiah 27-28", 
        book: "Isaiah", 
        chapter: 27, 
        audioUrl: bgAudio("Isaiah", 27) 
      },
      nt: { 
        label: "Acts 2", 
        book: "Acts", 
        chapter: 2, 
        audioUrl: bgAudio("Acts", 2) 
      },
    },
  },
  {
    date: '2026-02-16',
    parashaSlug: 'terumah',
    
    readings: {
      torah: { 
        label: "Exodus 25:31-26:14", 
        book: "Exodus", 
        chapter: 25, 
        audioUrl: bgAudio("Exodus", 25) 
      },
      tanakh: { 
        label: "Isaiah 29-30", 
        book: "Isaiah", 
        chapter: 29, 
        audioUrl: bgAudio("Isaiah", 29) 
      },
      nt: { 
        label: "Acts 3", 
        book: "Acts", 
        chapter: 3, 
        audioUrl: bgAudio("Acts", 3) 
      },
    },
  },
  {
    date: '2026-02-17',
    parashaSlug: 'terumah',
    
    readings: {
      torah: { 
        label: "Exodus: 26:15 - 26:30", 
        book: "Exodus: 26:15 - 26:30", 
        chapter: 1, 
        audioUrl: bgAudio("Exodus: 26:15 - 26:30", 1) 
      },
      tanakh: { 
        label: "Isaiah 31-32", 
        book: "Isaiah", 
        chapter: 31, 
        audioUrl: bgAudio("Isaiah", 31) 
      },
      nt: { 
        label: "Acts 4", 
        book: "Acts", 
        chapter: 4, 
        audioUrl: bgAudio("Acts", 4) 
      },
    },
  },
  {
    date: '2026-02-18',
    parashaSlug: 'terumah',
    
    readings: {
      torah: { 
        label: "Exodus 26:31 - 26:37", 
        book: "Exodus", 
        chapter: 26, 
        audioUrl: bgAudio("Exodus", 26) 
      },
      tanakh: { 
        label: "Isaiah 33-34", 
        book: "Isaiah", 
        chapter: 33, 
        audioUrl: bgAudio("Isaiah", 33) 
      },
      nt: { 
        label: "Acts 5", 
        book: "Acts", 
        chapter: 5, 
        audioUrl: bgAudio("Acts", 5) 
      },
    },
  },
  {
    date: '2026-02-19',
    parashaSlug: 'terumah',
    
    readings: {
      torah: { 
        label: "Exodus 27:1 - 27:8", 
        book: "Exodus", 
        chapter: 27, 
        audioUrl: bgAudio("Exodus", 27) 
      },
      tanakh: { 
        label: "Isaiah 35-36", 
        book: "Isaiah", 
        chapter: 35, 
        audioUrl: bgAudio("Isaiah", 35) 
      },
      nt: { 
        label: "Acts 6", 
        book: "Acts", 
        chapter: 6, 
        audioUrl: bgAudio("Acts", 6) 
      },
    },
  },
  {
    date: '2026-02-20',
    parashaSlug: 'terumah',
    
    readings: {
      torah: { 
        label: "Exodus 27:9 - 27:19", 
        book: "Exodus", 
        chapter: 27, 
        audioUrl: bgAudio("Exodus", 27) 
      },
      tanakh: { 
        label: "1 Kings 5:12(NIV)- 6:13", 
        book: "1 Kings", 
        chapter: 5, 
        audioUrl: bgAudio("1 Kings", 5) 
      },
      nt: { 
        label: "Matthew 13:1-23", 
        book: "Matthew", 
        chapter: 13, 
        audioUrl: bgAudio("Matthew", 13) 
      },
    },
  },
  {
    date: '2026-02-22',
    parashaSlug: 'tetzaveh',
    torahPortion: 'Tetzaveh',
    readings: {
      torah: { 
        label: "Exodus 27:20-28:30", 
        book: "Exodus", 
        chapter: 27, 
        audioUrl: bgAudio("Exodus", 27) 
      },
      tanakh: { 
        label: "Isaiah 37-38", 
        book: "Isaiah", 
        chapter: 37, 
        audioUrl: bgAudio("Isaiah", 37) 
      },
      nt: { 
        label: "Acts 7", 
        book: "Acts", 
        chapter: 7, 
        audioUrl: bgAudio("Acts", 7) 
      },
    },
  },
  {
    date: '2026-02-23',
    parashaSlug: 'tetzaveh',
    
    readings: {
      torah: { 
        label: "Exodus 28:31-28:43", 
        book: "Exodus", 
        chapter: 28, 
        audioUrl: bgAudio("Exodus", 28) 
      },
      tanakh: { 
        label: "Isaiah 39-40", 
        book: "Isaiah", 
        chapter: 39, 
        audioUrl: bgAudio("Isaiah", 39) 
      },
      nt: { 
        label: "Acts 8", 
        book: "Acts", 
        chapter: 8, 
        audioUrl: bgAudio("Acts", 8) 
      },
    },
  },
  {
    date: '2026-02-24',
    parashaSlug: 'tetzaveh',
    
    readings: {
      torah: { 
        label: "Exodus 29:1 - 29:18", 
        book: "Exodus", 
        chapter: 29, 
        audioUrl: bgAudio("Exodus", 29) 
      },
      tanakh: { 
        label: "Isaiah 41-42", 
        book: "Isaiah", 
        chapter: 41, 
        audioUrl: bgAudio("Isaiah", 41) 
      },
      nt: { 
        label: "Acts 9", 
        book: "Acts", 
        chapter: 9, 
        audioUrl: bgAudio("Acts", 9) 
      },
    },
  },
  {
    date: '2026-02-25',
    parashaSlug: 'tetzaveh',
    
    readings: {
      torah: { 
        label: "Exodus 29:19 - 29:37", 
        book: "Exodus", 
        chapter: 29, 
        audioUrl: bgAudio("Exodus", 29) 
      },
      tanakh: { 
        label: "Isaiah 43-44", 
        book: "Isaiah", 
        chapter: 43, 
        audioUrl: bgAudio("Isaiah", 43) 
      },
      nt: { 
        label: "Acts 10", 
        book: "Acts", 
        chapter: 10, 
        audioUrl: bgAudio("Acts", 10) 
      },
    },
  },
  {
    date: '2026-02-26',
    parashaSlug: 'tetzaveh',
    
    readings: {
      torah: { 
        label: "Exodus 29:38 - 29:46", 
        book: "Exodus", 
        chapter: 29, 
        audioUrl: bgAudio("Exodus", 29) 
      },
      tanakh: { 
        label: "Isaiah 45-46", 
        book: "Isaiah", 
        chapter: 45, 
        audioUrl: bgAudio("Isaiah", 45) 
      },
      nt: { 
        label: "Acts 11", 
        book: "Acts", 
        chapter: 11, 
        audioUrl: bgAudio("Acts", 11) 
      },
    },
  },
  {
    date: '2026-02-27',
    parashaSlug: 'tetzaveh',
    
    readings: {
      torah: { 
        label: "Exodus 30:1-30:10", 
        book: "Exodus", 
        chapter: 30, 
        audioUrl: bgAudio("Exodus", 30) 
      },
      tanakh: { 
        label: "1 Samuel 15:2-34", 
        book: "1 Samuel", 
        chapter: 15, 
        audioUrl: bgAudio("1 Samuel", 15) 
      },
      nt: { 
        label: "Revelation 6:9-7:8", 
        book: "Revelation", 
        chapter: 6, 
        audioUrl: bgAudio("Revelation", 6) 
      },
    },
  },
  {
    date: '2026-03-01',
    parashaSlug: 'ki-tisa',
    torahPortion: 'Ki tisa',
    readings: {
      torah: { 
        label: "Exodus 30:11-33:11", 
        book: "Exodus", 
        chapter: 30, 
        audioUrl: bgAudio("Exodus", 30) 
      },
      tanakh: { 
        label: "Isaiah 47-48", 
        book: "Isaiah", 
        chapter: 47, 
        audioUrl: bgAudio("Isaiah", 47) 
      },
      nt: { 
        label: "Acts 12", 
        book: "Acts", 
        chapter: 12, 
        audioUrl: bgAudio("Acts", 12) 
      },
    },
  },
  {
    date: '2026-03-02',
    parashaSlug: 'ki-tisa',
    
    readings: {
      torah: { 
        label: "Exodus 33:12- 33:16", 
        book: "Exodus", 
        chapter: 33, 
        audioUrl: bgAudio("Exodus", 33) 
      },
      tanakh: { 
        label: "Isaiah 49-50", 
        book: "Isaiah", 
        chapter: 49, 
        audioUrl: bgAudio("Isaiah", 49) 
      },
      nt: { 
        label: "Acts 13", 
        book: "Acts", 
        chapter: 13, 
        audioUrl: bgAudio("Acts", 13) 
      },
    },
  },
  {
    date: '2026-03-03',
    parashaSlug: 'ki-tisa',
    
    readings: {
      torah: { 
        label: "Exodus 33:17 - 33:23", 
        book: "Exodus", 
        chapter: 33, 
        audioUrl: bgAudio("Exodus", 33) 
      },
      tanakh: { 
        label: "Isaiah 51-52", 
        book: "Isaiah", 
        chapter: 51, 
        audioUrl: bgAudio("Isaiah", 51) 
      },
      nt: { 
        label: "Acts 14", 
        book: "Acts", 
        chapter: 14, 
        audioUrl: bgAudio("Acts", 14) 
      },
    },
  },
  {
    date: '2026-03-04',
    parashaSlug: 'ki-tisa',
    
    readings: {
      torah: { 
        label: "Exodus 34:1-34:9", 
        book: "Exodus", 
        chapter: 34, 
        audioUrl: bgAudio("Exodus", 34) 
      },
      tanakh: { 
        label: "Isaiah 53-54", 
        book: "Isaiah", 
        chapter: 53, 
        audioUrl: bgAudio("Isaiah", 53) 
      },
      nt: { 
        label: "Acts 15", 
        book: "Acts", 
        chapter: 15, 
        audioUrl: bgAudio("Acts", 15) 
      },
    },
  },
  {
    date: '2026-03-05',
    parashaSlug: 'ki-tisa',
    
    readings: {
      torah: { 
        label: "Exodus 34:10 - 34:26", 
        book: "Exodus", 
        chapter: 34, 
        audioUrl: bgAudio("Exodus", 34) 
      },
      tanakh: { 
        label: "Isaiah 55-56", 
        book: "Isaiah", 
        chapter: 55, 
        audioUrl: bgAudio("Isaiah", 55) 
      },
      nt: { 
        label: "Acts 16", 
        book: "Acts", 
        chapter: 16, 
        audioUrl: bgAudio("Acts", 16) 
      },
    },
  },
  {
    date: '2026-03-06',
    parashaSlug: 'ki-tisa',
    
    readings: {
      torah: { 
        label: "Exodus 34:27-34:35", 
        book: "Exodus", 
        chapter: 34, 
        audioUrl: bgAudio("Exodus", 34) 
      },
      tanakh: { 
        label: "Ezekiel 36:16-38", 
        book: "Ezekiel", 
        chapter: 36, 
        audioUrl: bgAudio("Ezekiel", 36) 
      },
      nt: { 
        label: "Hebrews 9:11-14", 
        book: "Hebrews", 
        chapter: 9, 
        audioUrl: bgAudio("Hebrews", 9) 
      },
    },
  },
  {
    date: '2026-03-08',
    parashaSlug: 'vayakel-pekudei',
    torahPortion: 'Vayakel-Pekudei',
    readings: {
      torah: { 
        label: "Exodus 35:1 - 35:29", 
        book: "Exodus", 
        chapter: 35, 
        audioUrl: bgAudio("Exodus", 35) 
      },
      tanakh: { 
        label: "Isaiah 57-58", 
        book: "Isaiah", 
        chapter: 57, 
        audioUrl: bgAudio("Isaiah", 57) 
      },
      nt: { 
        label: "Acts 17", 
        book: "Acts", 
        chapter: 17, 
        audioUrl: bgAudio("Acts", 17) 
      },
    },
  },
  {
    date: '2026-03-09',
    parashaSlug: 'vayakel-pekudei',
    
    readings: {
      torah: { 
        label: "Exodus 35:30 - 36:7", 
        book: "Exodus", 
        chapter: 35, 
        audioUrl: bgAudio("Exodus", 35) 
      },
      tanakh: { 
        label: "Isaiah 59-60", 
        book: "Isaiah", 
        chapter: 59, 
        audioUrl: bgAudio("Isaiah", 59) 
      },
      nt: { 
        label: "Acts 18", 
        book: "Acts", 
        chapter: 18, 
        audioUrl: bgAudio("Acts", 18) 
      },
    },
  },
  {
    date: '2026-03-10',
    parashaSlug: 'vayakel-pekudei',
    
    readings: {
      torah: { 
        label: "Exodus 36:8 - 36:19", 
        book: "Exodus", 
        chapter: 36, 
        audioUrl: bgAudio("Exodus", 36) 
      },
      tanakh: { 
        label: "Isaiah 61-62", 
        book: "Isaiah", 
        chapter: 61, 
        audioUrl: bgAudio("Isaiah", 61) 
      },
      nt: { 
        label: "Acts 19", 
        book: "Acts", 
        chapter: 19, 
        audioUrl: bgAudio("Acts", 19) 
      },
    },
  },
  {
    date: '2026-03-11',
    parashaSlug: 'vayakel-pekudei',
    
    readings: {
      torah: { 
        label: "Exodus 36:20 - 37:16", 
        book: "Exodus", 
        chapter: 36, 
        audioUrl: bgAudio("Exodus", 36) 
      },
      tanakh: { 
        label: "Isaiah 63-64", 
        book: "Isaiah", 
        chapter: 63, 
        audioUrl: bgAudio("Isaiah", 63) 
      },
      nt: { 
        label: "Acts 20", 
        book: "Acts", 
        chapter: 20, 
        audioUrl: bgAudio("Acts", 20) 
      },
    },
  },
  {
    date: '2026-03-12',
    parashaSlug: 'vayakel-pekudei',
    
    readings: {
      torah: { 
        label: "Exodus 37:17 - 37:29", 
        book: "Exodus", 
        chapter: 37, 
        audioUrl: bgAudio("Exodus", 37) 
      },
      tanakh: { 
        label: "Isaiah 65-66", 
        book: "Isaiah", 
        chapter: 65, 
        audioUrl: bgAudio("Isaiah", 65) 
      },
      nt: { 
        label: "Acts 21", 
        book: "Acts", 
        chapter: 21, 
        audioUrl: bgAudio("Acts", 21) 
      },
    },
  },
  {
    date: '2026-03-13',
    parashaSlug: 'vayakel-pekudei',
    
    readings: {
      torah: { 
        label: "Exodus 38:1-38:20", 
        book: "Exodus", 
        chapter: 38, 
        audioUrl: bgAudio("Exodus", 38) 
      },
      tanakh: { 
        label: "Isaiah 43:21-44:23", 
        book: "Isaiah", 
        chapter: 43, 
        audioUrl: bgAudio("Isaiah", 43) 
      },
      nt: { 
        label: "1 Corinthians 5:6-8", 
        book: "1 Corinthians", 
        chapter: 5, 
        audioUrl: bgAudio("1 Corinthians", 5) 
      },
    },
  },
  {
    date: '2026-03-15',
    parashaSlug: 'vayikra',
    torahPortion: 'Vayikra',
    readings: {
      torah: { 
        label: "Lev. 1:1-2:6", 
        book: "Lev", 
        chapter: 1, 
        audioUrl: bgAudio("Lev", 1) 
      },
      tanakh: { 
        label: "Jeremiah 1", 
        book: "Jeremiah", 
        chapter: 1, 
        audioUrl: bgAudio("Jeremiah", 1) 
      },
      nt: { 
        label: "Acts 22", 
        book: "Acts", 
        chapter: 22, 
        audioUrl: bgAudio("Acts", 22) 
      },
    },
  },
  {
    date: '2026-03-16',
    parashaSlug: 'vayikra',
    
    readings: {
      torah: { 
        label: "Leviticus 2:7-2:16:", 
        book: "Leviticus", 
        chapter: 2, 
        audioUrl: bgAudio("Leviticus", 2) 
      },
      tanakh: { 
        label: "Jeremiah 2-3", 
        book: "Jeremiah", 
        chapter: 2, 
        audioUrl: bgAudio("Jeremiah", 2) 
      },
      nt: { 
        label: "Acts 23", 
        book: "Acts", 
        chapter: 23, 
        audioUrl: bgAudio("Acts", 23) 
      },
    },
  },
  {
    date: '2026-03-17',
    parashaSlug: 'vayikra',
    
    readings: {
      torah: { 
        label: "Leviticus 3:1-3:17", 
        book: "Leviticus", 
        chapter: 3, 
        audioUrl: bgAudio("Leviticus", 3) 
      },
      tanakh: { 
        label: "Jeremiah 4-5", 
        book: "Jeremiah", 
        chapter: 4, 
        audioUrl: bgAudio("Jeremiah", 4) 
      },
      nt: { 
        label: "Acts 24", 
        book: "Acts", 
        chapter: 24, 
        audioUrl: bgAudio("Acts", 24) 
      },
    },
  },
  {
    date: '2026-03-18',
    parashaSlug: 'vayikra',
    
    readings: {
      torah: { 
        label: "Leviticus 4:1-4:26", 
        book: "Leviticus", 
        chapter: 4, 
        audioUrl: bgAudio("Leviticus", 4) 
      },
      tanakh: { 
        label: "Jeremiah 6", 
        book: "Jeremiah", 
        chapter: 6, 
        audioUrl: bgAudio("Jeremiah", 6) 
      },
      nt: { 
        label: "Acts 25", 
        book: "Acts", 
        chapter: 25, 
        audioUrl: bgAudio("Acts", 25) 
      },
    },
  },
  {
    date: '2026-03-19',
    parashaSlug: 'vayikra',
    
    readings: {
      torah: { 
        label: "Leviticus 4:27-5:10", 
        book: "Leviticus", 
        chapter: 4, 
        audioUrl: bgAudio("Leviticus", 4) 
      },
      tanakh: { 
        label: "Jeremiah 7", 
        book: "Jeremiah", 
        chapter: 7, 
        audioUrl: bgAudio("Jeremiah", 7) 
      },
      nt: { 
        label: "Acts 26", 
        book: "Acts", 
        chapter: 26, 
        audioUrl: bgAudio("Acts", 26) 
      },
    },
  },
  {
    date: '2026-03-20',
    parashaSlug: 'vayikra',
    
    readings: {
      torah: { 
        label: "Leviticus 5:11-5:26", 
        book: "Leviticus", 
        chapter: 5, 
        audioUrl: bgAudio("Leviticus", 5) 
      },
      tanakh: { 
        label: "1 Kings 7:51-8:21", 
        book: "1 Kings", 
        chapter: 7, 
        audioUrl: bgAudio("1 Kings", 7) 
      },
      nt: { 
        label: "Luke 9:28-36", 
        book: "Luke", 
        chapter: 9, 
        audioUrl: bgAudio("Luke", 9) 
      },
    },
  },
  {
    date: '2026-03-22',
    parashaSlug: 'tzav',
    torahPortion: 'Tzav',
    readings: {
      torah: { 
        label: "Leviticus 6:1-7:10", 
        book: "Leviticus", 
        chapter: 6, 
        audioUrl: bgAudio("Leviticus", 6) 
      },
      tanakh: { 
        label: "Jeremiah 8", 
        book: "Jeremiah", 
        chapter: 8, 
        audioUrl: bgAudio("Jeremiah", 8) 
      },
      nt: { 
        label: "Acts 27", 
        book: "Acts", 
        chapter: 27, 
        audioUrl: bgAudio("Acts", 27) 
      },
    },
  },
  {
    date: '2026-03-23',
    parashaSlug: 'tzav',
    
    readings: {
      torah: { 
        label: "Leviticus 7:11-38", 
        book: "Leviticus", 
        chapter: 7, 
        audioUrl: bgAudio("Leviticus", 7) 
      },
      tanakh: { 
        label: "Jeremiah 9", 
        book: "Jeremiah", 
        chapter: 9, 
        audioUrl: bgAudio("Jeremiah", 9) 
      },
      nt: { 
        label: "Acts 28", 
        book: "Acts", 
        chapter: 28, 
        audioUrl: bgAudio("Acts", 28) 
      },
    },
  },
  {
    date: '2026-03-24',
    parashaSlug: 'tzav',
    
    readings: {
      torah: { 
        label: "Leviticus 8:1-13", 
        book: "Leviticus", 
        chapter: 8, 
        audioUrl: bgAudio("Leviticus", 8) 
      },
      tanakh: { 
        label: "Jeremiah 10", 
        book: "Jeremiah", 
        chapter: 10, 
        audioUrl: bgAudio("Jeremiah", 10) 
      },
      nt: { 
        label: "Romans 1", 
        book: "Romans", 
        chapter: 1, 
        audioUrl: bgAudio("Romans", 1) 
      },
    },
  },
  {
    date: '2026-03-25',
    parashaSlug: 'tzav',
    
    readings: {
      torah: { 
        label: "Leviticus 8:14-21", 
        book: "Leviticus", 
        chapter: 8, 
        audioUrl: bgAudio("Leviticus", 8) 
      },
      tanakh: { 
        label: "Jeremiah 11", 
        book: "Jeremiah", 
        chapter: 11, 
        audioUrl: bgAudio("Jeremiah", 11) 
      },
      nt: { 
        label: "Romans 2", 
        book: "Romans", 
        chapter: 2, 
        audioUrl: bgAudio("Romans", 2) 
      },
    },
  },
  {
    date: '2026-03-26',
    parashaSlug: 'tzav',
    
    readings: {
      torah: { 
        label: "Leviticus 8:22-29", 
        book: "Leviticus", 
        chapter: 8, 
        audioUrl: bgAudio("Leviticus", 8) 
      },
      tanakh: { 
        label: "Jeremiah 12", 
        book: "Jeremiah", 
        chapter: 12, 
        audioUrl: bgAudio("Jeremiah", 12) 
      },
      nt: { 
        label: "Romans 3", 
        book: "Romans", 
        chapter: 3, 
        audioUrl: bgAudio("Romans", 3) 
      },
    },
  },
  {
    date: '2026-03-27',
    parashaSlug: 'tzav',
    
    readings: {
      torah: { 
        label: "Leviticus 8:30-36", 
        book: "Leviticus", 
        chapter: 8, 
        audioUrl: bgAudio("Leviticus", 8) 
      },
      tanakh: { 
        label: "Malachi 3:4-24 Shabbat HaGadol", 
        book: "Malachi", 
        chapter: 3, 
        audioUrl: bgAudio("Malachi", 3) 
      },
      nt: { 
        label: "Luke 1:5-22", 
        book: "Luke", 
        chapter: 1, 
        audioUrl: bgAudio("Luke", 1) 
      },
    },
  }
]
