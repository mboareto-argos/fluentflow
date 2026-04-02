import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import BottomNav from './BottomNav'
import { useProgressStore } from '../../store/progressStore'

export default function Layout() {
  const { loadStats } = useProgressStore()

  useEffect(() => {
    // Refresh stats every time the app gains focus (user switches tabs or
    // comes back from the phone home screen). Keeps streak/words in sync.
    const handleFocus = () => loadStats()
    window.addEventListener('focus', handleFocus)
    return () => window.removeEventListener('focus', handleFocus)
  }, [])

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar: visible only on md+ */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Main content — extra bottom padding on mobile for bottom nav */}
      <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
        <Outlet />
      </main>

      {/* Bottom nav: visible only on mobile */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  )
}
