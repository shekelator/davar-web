import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { ParashaSidebar } from './components/ParashaSidebar'
import { TodayPage } from './pages/TodayPage'
import { ParashaPage } from './pages/ParashaPage'

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-stone-50 flex flex-col">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <ParashaSidebar />
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<TodayPage />} />
              <Route path="/parasha/:slug" element={<ParashaPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
