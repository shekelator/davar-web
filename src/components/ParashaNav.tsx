import { Link } from 'react-router-dom'
import { type ParashaWeek } from '../data/schedule'

interface ParashaNavProps {
  current: ParashaWeek
  prev: ParashaWeek | null
  next: ParashaWeek | null
}

export function ParashaNav({ current, prev, next }: ParashaNavProps) {
  return (
    <nav className="flex items-center justify-between gap-4 py-3 px-1" aria-label="Parasha navigation">
      <div className="w-28 flex justify-start">
        {prev ? (
          <Link
            to={`/parasha/${prev.slug}`}
            className="flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-800 transition-colors group"
            aria-label={`Previous parasha: ${prev.name}`}
          >
            <span className="text-base group-hover:-translate-x-0.5 transition-transform" aria-hidden>←</span>
            <span className="truncate">{prev.name}</span>
          </Link>
        ) : (
          <span />
        )}
      </div>

      <h2 className="text-center font-semibold text-stone-800 text-base flex-1">
        Parashat {current.name}
      </h2>

      <div className="w-28 flex justify-end">
        {next ? (
          <Link
            to={`/parasha/${next.slug}`}
            className="flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-800 transition-colors group"
            aria-label={`Next parasha: ${next.name}`}
          >
            <span className="truncate">{next.name}</span>
            <span className="text-base group-hover:translate-x-0.5 transition-transform" aria-hidden>→</span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  )
}
