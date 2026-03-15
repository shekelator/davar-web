import { type Reading, getReadUrl, getCommentaryUrl, type ReadingType } from '../data/schedule'
import { AudioLink } from './AudioLink'
import { CommentaryLink } from './CommentaryLink'
import { ReadLink } from './ReadLink'

interface ReadingSectionProps {
  title?: string
  subtitle?: string
  reading: Reading
  accentColor?: string
  type: ReadingType
}

export function ReadingSection({ title, subtitle, reading, accentColor = 'border-amber-400', type }: ReadingSectionProps) {
  const hebrewLabel = {
    torah: 'תורה',
    tanakh: 'נ״ך',
    nt: 'ב״ח'
  }[type]

  return (
    <div className={`border-l-4 ${accentColor} pl-4 py-1`}>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <span 
            className="w-16 text-right shrink-0 text-2xl font-bold text-stone-300 select-none leading-none pt-1" 
            style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
            aria-hidden="true"
          >
            {hebrewLabel}
          </span>
          <div>
            {title && (
              <span className="text-xs font-semibold tracking-widest uppercase text-stone-400">{title}</span>
            )}
            {subtitle && (
              <span className="ml-2 text-xs text-stone-400 italic">{subtitle}</span>
            )}
            <p className={`${title ? 'mt-1' : ''} text-lg font-medium text-stone-800 hover:text-stone-900`}>
              <a 
                href={getReadUrl(reading)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline decoration-stone-300 underline-offset-4 decoration-2"
              >
                {reading.label}
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-3 shrink-0">
          <ReadLink url={getReadUrl(reading)} />
          <CommentaryLink url={getCommentaryUrl(reading, type)} />
          {reading.audioUrl && (
            <AudioLink url={reading.audioUrl} label={reading.label} />
          )}
        </div>
      </div>
    </div>
  )
}
