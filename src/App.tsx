import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { TodayPage } from './pages/TodayPage'
import { ParashaPage } from './pages/ParashaPage'

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-stone-50 flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<TodayPage />} />
          <Route path="/parasha/:slug" element={<ParashaPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
