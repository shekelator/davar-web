import { type DayReading } from '../data/schedule'
import { formatDate } from '../utils/schedule'
import { ReadingSection } from './ReadingSection'
import { ListenAllButton } from './ListenAllButton'
import { ReadAllButton } from './ReadAllButton'

interface DayCardProps {
  day: DayReading
}

export function DayCard({ day }: DayCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
      {/* Date header */}
      <div className="bg-stone-50 border-b border-stone-100 px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-stone-400 font-medium">{formatDate(day.date)}</p>
          {day.torahPortion && (
            <p className="text-xs mt-0.5 text-amber-700 font-semibold tracking-wide uppercase">
              Parashat {day.torahPortion}
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <ReadAllButton readings={day.readings} />
          <ListenAllButton readings={day.readings} />
        </div>
      </div>

      {/* Readings */}
      <div className="px-6 py-5 flex flex-col gap-5">
        <ReadingSection
          title="Torah"
          reading={day.readings.torah}
          accentColor="border-amber-400"
        />

        {day.readings.tanakh && (
          <ReadingSection
            title="Haftarah"
            reading={day.readings.tanakh}
            accentColor="border-blue-400"
          />
        )}

        <ReadingSection
          title="New Testament"
          reading={day.readings.nt}
          accentColor="border-emerald-400"
        />
      </div>
    </article>
  )
}
