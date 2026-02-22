import { useParams, Link } from 'react-router-dom'
import { getParashaWeek, getWeekReadings, getPrevNextWeeks, todayKey } from '../utils/schedule'
import { DayCard } from '../components/DayCard'
import { ParashaNav } from '../components/ParashaNav'

export function ParashaPage() {
  const { slug } = useParams<{ slug: string }>()
  const week = slug ? getParashaWeek(slug) : null
  const days = slug ? getWeekReadings(slug) : []
  const { prev, next } = slug ? getPrevNextWeeks(slug) : { prev: null, next: null }
  const today = todayKey()

  if (!week) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-16 text-center text-stone-500">
        <p className="text-4xl mb-4">📖</p>
        <p className="text-lg font-medium text-stone-700">Parasha not found</p>
        <Link to="/" className="mt-4 inline-block text-sm text-amber-700 hover:text-amber-900">
          ← Back to today
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-6">
      <ParashaNav current={week} prev={prev} next={next} />

      <div className="mt-4 flex flex-col gap-5">
        {days.map((day) => (
          <div key={day.date} className={day.date === today ? 'ring-2 ring-amber-400 ring-offset-2 rounded-2xl' : ''}>
            <DayCard day={day} />
          </div>
        ))}

        {days.length === 0 && (
          <p className="text-center py-12 text-stone-400">No readings available for this week yet.</p>
        )}
      </div>
    </main>
  )
}
