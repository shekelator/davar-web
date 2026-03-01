import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="relative bg-stone-900 text-amber-50 shadow-md overflow-hidden shrink-0">
      {/* Background Banner */}
      <img 
        src="/header-banner.png" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
      />
      
      {/* Content Overlay */}
      <div className="relative h-full px-4 py-4 md:px-8 flex items-center justify-between z-10 w-full">
        <Link to="/" className="hover:opacity-95 transition-opacity">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-white drop-shadow-sm font-serif">
              Daily Davar
            </h1>
            <p className="text-sm md:text-lg text-amber-100/90 tracking-widest uppercase mt-0.5 font-medium drop-shadow-sm">
              דבר יומי
            </p>
          </div>
        </Link>
        
        <Link to="/" className="hover:opacity-95 transition-opacity">
          <img 
            src="/davar-logo.png" 
            alt="Daily Davar Logo" 
            className="w-24 h-24 md:w-40 md:h-40 object-contain drop-shadow-md"
          />
        </Link>
      </div>
    </header>
  )
}
