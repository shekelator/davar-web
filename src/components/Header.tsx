export function Header() {
  return (
    <header className="bg-stone-900 text-amber-50 px-6 py-4 shadow-md">
      <div className="max-w-2xl mx-auto flex items-center gap-3">
        <span className="text-2xl select-none" aria-hidden>✡</span>
        <div>
          <h1 className="text-xl font-semibold tracking-wide">Daily Davar</h1>
          <p className="text-xs text-amber-200/70 tracking-widest uppercase">דבר יומי</p>
        </div>
      </div>
    </header>
  )
}
