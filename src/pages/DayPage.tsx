import { Link, useParams } from 'react-router-dom'
import { getReading, todayKey, formatDate, getParashaWeekForDate, getPrevNextReadings, getNextReadingAfterDate, getParashaWeek } from '../utils/schedule'
import { DayCard } from '../components/DayCard'

export function DayPage() {
  const params = useParams()
  const date = params.date || todayKey()
  
  const reading = getReading(date)
  const week = getParashaWeekForDate(date)
  const { prev, next } = getPrevNextReadings(date)

  // Check if it's Shabbat (Saturday) and we have no reading
  const isShabbat = new Date(date).getUTCDay() === 6
  let nextWeekParasha = null
  let nextReading = null

  if (!reading && isShabbat) {
    nextReading = getNextReadingAfterDate(date)
    if (nextReading) {
      nextWeekParasha = getParashaWeek(nextReading.parashaSlug)
    }
  }

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
          {isShabbat && nextWeekParasha ? (
            <>
              <p className="text-4xl mb-4">🕯️</p>
              <p className="text-lg font-medium text-stone-700">Shabbat Shalom</p>
              <p className="text-sm mt-1 mb-8">
                There are no readings for today.
              </p>
              
              <div className="bg-stone-50 rounded-xl p-6 border border-stone-100 max-w-sm mx-auto">
                <p className="text-xs text-stone-400 uppercase tracking-wider font-semibold mb-2">Up Next</p>
                <Link 
                  to={`/parasha/${nextWeekParasha.slug}`}
                  className="block text-xl font-bold text-stone-800 hover:text-amber-700 transition-colors mb-1"
                >
                  Parashat {nextWeekParasha.name}
                </Link>
                <p className="text-sm text-stone-500">
                  Week of {formatDate(nextReading!.date)}
                </p>
              </div>

              <div className="flex justify-center gap-4 mt-8">
                {prev && (
                  <Link to={`/date/${prev.date}`} className="text-stone-400 hover:text-amber-700 transition-colors flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    Previous Day
                  </Link>
                )}
                {next && (
                  <Link to={`/date/${next.date}`} className="text-stone-400 hover:text-amber-700 transition-colors flex items-center gap-1">
                    Next Day
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                )}
              </div>
            </>
          ) : (
            <>
              <p className="text-4xl mb-4">📖</p>
              <p className="text-lg font-medium text-stone-700">No reading found</p>
              <p className="text-sm mt-1">
                {formatDate(date)} isn't in the schedule yet.
              </p>
              <div className="flex justify-center gap-4 mt-8">
                <Link to="/" className="text-amber-700 hover:underline">Go to Today</Link>
              </div>
            </>
          )}
        </div>
      )}
    </main>
  )
}
