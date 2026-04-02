import { NavLink } from 'react-router-dom'
import { useProgressStore } from '../../store/progressStore'

const navItems = [
  { to: '/', label: 'Início', icon: HomeIcon, exact: true },
  { to: '/flashcards', label: 'Flashcards', icon: LayersIcon },
  { to: '/categories', label: 'Categorias', icon: FolderIcon },
  { to: '/progress', label: 'Progresso', icon: ChartIcon },
  { to: '/settings', label: 'Configurações', icon: SettingsIcon },
]

export default function Sidebar() {
  const { userName, stats } = useProgressStore()
  const initials = userName ? userName.slice(0, 2).toUpperCase() : 'FF'

  return (
    <aside className="w-52 bg-white border-r border-gray-100 flex flex-col py-4 shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 mb-8">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
          <span className="text-white text-xs font-bold">FF</span>
        </div>
        <span className="font-semibold text-gray-900 text-sm">FluentFlow</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 space-y-0.5">
        {navItems.map(({ to, label, icon: Icon, exact }) => (
          <NavLink
            key={to}
            to={to}
            end={exact}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600 font-medium'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <Icon className="w-4 h-4 shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* User info */}
      <div className="px-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-semibold">{initials}</span>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-medium text-gray-800 truncate">{userName}</p>
            <p className="text-xs text-gray-400 truncate">
              {stats.streak > 0 ? `🔥 ${stats.streak} dias` : 'Iniciante'}
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
    </svg>
  )
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
      <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  )
}
