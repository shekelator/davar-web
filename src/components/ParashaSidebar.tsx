import { NavLink } from 'react-router-dom'
import { parashaWeeks } from '../data/schedule'

export function ParashaSidebar() {
  return (
    <nav
      aria-label="Parasha list"
      className="hidden md:flex flex-col w-52 shrink-0 border-r border-stone-200 bg-white py-6 px-3 gap-0.5 overflow-y-auto"
    >
      <p className="text-xs font-semibold tracking-widest uppercase text-stone-400 px-3 pb-2">
        Parashiyot
      </p>
      {parashaWeeks.map((week) => (
        <NavLink
          key={week.slug}
          to={`/parasha/${week.slug}`}
          className={({ isActive }) =>
            [
              'rounded-lg px-3 py-2 text-sm transition-colors',
              isActive
                ? 'bg-amber-50 text-amber-800 font-medium'
                : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900',
            ].join(' ')
          }
        >
          {week.name}
        </NavLink>
      ))}
    </nav>
  )
}
