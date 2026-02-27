import { Link, useParams } from 'react-router-dom'
import { getReading, todayKey, formatDate, getParashaWeekForDate, getPrevNextReadings } from '../utils/schedule'
import { DayCard } from '../components/DayCard'

export function DayPage() {
  const params = useParams()
  const date = params.date || todayKey()
  
  const reading = getReading(date)
  const week = getParashaWeekForDate(date)
  const { prev, next } = getPrevNextReadings(date)

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      {reading ? (
        <>
          {week && (
            <div className="flex flex-col gap-1 mb-5">
              <p className="text-sm text-stone-400 font-medium">{params.date ? 'Daily reading' : "Today's reading"}</p>
              <Link
                to={`/parasha/${week.slug}`}
                className="text-2xl font-semibold text-stone-800 hover:text-amber-700 transition-colors self-start"
              >
                Parashat {week.name}
              </Link>
            </div>
          )}
          <DayCard 
            day={reading} 
            prevLink={prev ? `/date/${prev.date}` : undefined}
            nextLink={next ? `/date/${next.date}` : undefined}
          />
        </>
      ) : (
        <div className="text-center py-16 text-stone-500">
          <p className="text-4xl mb-4">📖</p>
          <p className="text-lg font-medium text-stone-700">No reading found</p>
          <p className="text-sm mt-1">
            {formatDate(date)} isn't in the schedule yet.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link to="/" className="text-amber-700 hover:underline">Go to Today</Link>
          </div>
        </div>
      )}
    </main>
  )
}
