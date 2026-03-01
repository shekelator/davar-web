import { Link } from 'react-router-dom'
import { type DayReading } from '../data/schedule'
import { formatDate } from '../utils/schedule'
import { ReadingSection } from './ReadingSection'
import { ListenAllButton } from './ListenAllButton'
import { ReadAllButton } from './ReadAllButton'
import { CopyReadingsButton } from './CopyReadingsButton'

interface DayCardProps {
  day: DayReading
  prevLink?: string
  nextLink?: string
}

export function DayCard({ day, prevLink, nextLink }: DayCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
      {/* Date header */}
      <div className="bg-stone-50 border-b border-stone-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {prevLink && (
            <Link to={prevLink} className="text-stone-400 hover:text-amber-700 transition-colors" aria-label="Previous day">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </Link>
          )}
          <p className="text-sm text-stone-400 font-medium">{formatDate(day.date)}</p>
          {nextLink && (
            <Link to={nextLink} className="text-stone-400 hover:text-amber-700 transition-colors" aria-label="Next day">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          )}
        </div>
        <div className="flex gap-2">
          <ReadAllButton readings={day.readings} />
          <ListenAllButton readings={day.readings} />
          <CopyReadingsButton readings={day.readings} date={day.date} />
        </div>
      </div>

      {/* Readings */}
      <div className="px-6 py-5 flex flex-col gap-5">
        <ReadingSection
          reading={day.readings.torah}
          accentColor="border-amber-400"
          type="torah"
        />

        {day.readings.tanakh && (
          <ReadingSection
            reading={day.readings.tanakh}
            accentColor="border-blue-400"
            type="tanakh"
          />
        )}

        <ReadingSection
          reading={day.readings.nt}
          accentColor="border-emerald-400"
          type="nt"
        />
      </div>
    </article>
  )
}
