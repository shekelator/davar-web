import { type Reading } from '../data/schedule'
import { AudioLink } from './AudioLink'

interface ReadingSectionProps {
  title: string
  subtitle?: string
  reading: Reading
  accentColor?: string
}

export function ReadingSection({ title, subtitle, reading, accentColor = 'border-amber-400' }: ReadingSectionProps) {
  return (
    <div className={`border-l-4 ${accentColor} pl-4 py-1`}>
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-stone-400">{title}</span>
          {subtitle && (
            <span className="ml-2 text-xs text-stone-400 italic">{subtitle}</span>
          )}
          <p className="mt-1 text-lg font-medium text-stone-800">{reading.label}</p>
        </div>
        {reading.audioUrl && (
          <AudioLink url={reading.audioUrl} label={reading.label} />
        )}
      </div>
    </div>
  )
}
