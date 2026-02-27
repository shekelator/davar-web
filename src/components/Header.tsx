export function Header() {
  return (
    <header className="relative bg-stone-900 text-amber-50 shadow-md overflow-hidden h-32 md:h-40">
      {/* Background Banner */}
      <img 
        src="/header-banner.png" 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
      />
      
      {/* Content Overlay */}
      <div className="relative h-full px-4 md:px-8 flex items-center z-10">
        <div className="flex items-center gap-4 md:gap-6">
          <img 
            src="/davar-logo.png" 
            alt="Daily Davar Logo" 
            className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-md"
          />
          <div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-white drop-shadow-sm font-serif">
              Daily Davar
            </h1>
            <p className="text-sm md:text-lg text-amber-100/90 tracking-widest uppercase mt-0.5 font-medium drop-shadow-sm">
              דבר יומי
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
