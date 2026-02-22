import { getTodayReading, todayKey, formatDate } from '../utils/schedule'
import { DayCard } from '../components/DayCard'

export function TodayPage() {
  const today = todayKey()
  const reading = getTodayReading()

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      {reading ? (
        <>
          <p className="text-center text-sm text-stone-400 mb-6 tracking-wide">
            Today's readings
          </p>
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
