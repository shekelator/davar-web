import { Link } from 'react-router-dom'
import { getTodayReading, todayKey, formatDate, getParashaWeekForDate } from '../utils/schedule'
import { DayCard } from '../components/DayCard'

export function TodayPage() {
  const today = todayKey()
  const reading = getTodayReading()
  const week = getParashaWeekForDate(today)

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      {reading ? (
        <>
          {week && (
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-stone-400">Today's reading</p>
              <Link
                to={`/parasha/${week.slug}`}
                className="text-sm text-amber-700 hover:text-amber-900 transition-colors"
              >
                Week of {week.name} →
              </Link>
            </div>
          )}
          <DayCard day={reading} />
        </>
      ) : (
        <div className="text-center py-16 text-stone-500">
          <p className="text-4xl mb-4">📖</p>
          <p className="text-lg font-medium text-stone-700">No reading found</p>
          <p className="text-sm mt-1">
            {formatDate(today)} isn't in the schedule yet.
          </p>
          <p className="text-xs text-stone-400 mt-4">
            The schedule is being updated. Check back soon.
          </p>
        </div>
      )}
    </main>
  )
}
