import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { categories } from '../data/categories'
import { getCardCountByCategory } from '../data/flashcards'
import type { CardLevel } from '../types'
import CategoryIcon from '../components/ui/CategoryIcon'
import Badge from '../components/ui/Badge'

const FILTER_OPTIONS: { label: string; value: CardLevel | 'Todas' }[] = [
  { label: 'Todas', value: 'Todas' },
  { label: 'Iniciante', value: 'Iniciante' },
  { label: 'Intermediário', value: 'Intermediário' },
  { label: 'Avançado', value: 'Avançado' },
]

export default function Categories() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<CardLevel | 'Todas'>('Todas')
  const [search, setSearch] = useState('')

  const filtered = categories.filter(cat => {
    const matchLevel = filter === 'Todas' || cat.level === filter
    const matchSearch = cat.name.toLowerCase().includes(search.toLowerCase()) ||
      cat.description.toLowerCase().includes(search.toLowerCase())
    return matchLevel && matchSearch
  })

  return (
    <div className="p-4 md:p-8 max-w-5xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">Categorias &amp; Biblioteca</h1>
        <div className="relative w-full sm:w-auto">
          <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar categorias..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full sm:w-56 pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
          />
        </div>
      </div>

      {/* Filter tabs — scrollable on mobile */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1 scrollbar-none">
        {FILTER_OPTIONS.map(opt => (
          <button
            key={opt.value}
            onClick={() => setFilter(opt.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
              filter === opt.value
                ? 'bg-gray-900 text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">Nenhuma categoria encontrada</p>
          <p className="text-sm mt-1">Tente outro filtro ou busca</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(cat => (
            <button
              key={cat.id}
              onClick={() => navigate(`/flashcards/${cat.id}`)}
              className={`${cat.bgColor} rounded-xl p-5 border border-transparent hover:shadow-md active:scale-95 transition-all text-left`}
            >
              <CategoryIcon icon={cat.icon} className={`w-7 h-7 mb-3 ${cat.color}`} />
              <p className="text-base font-semibold text-gray-900 mb-1">{cat.name}</p>
              <p className="text-xs text-gray-500 mb-3 line-clamp-2">{cat.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{getCardCountByCategory(cat.id)} cards</span>
                <Badge level={cat.level} />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}
