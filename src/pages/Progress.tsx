import { useEffect } from 'react'
import { useProgressStore } from '../store/progressStore'
import { getLast7DaysActivity, getAllCardProgress } from '../lib/storage'
import { categories } from '../data/categories'
import { flashcards, getCardCountByCategory } from '../data/flashcards'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell
} from 'recharts'

const DAY_LABELS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

// Explicit classes so Tailwind includes them in the build (dynamic strings get purged)
const BAR_COLOR: Record<string, string> = {
  'conversas':     'bg-blue-500',
  'phrasal-verbs': 'bg-yellow-500',
  'negocios':      'bg-green-600',
  'idioms':        'bg-purple-500',
  'viagens':       'bg-orange-500',
  'tv-filmes':     'bg-cyan-500',
}

const ACHIEVEMENTS = [
  { id: 'streak_7', label: '7 dias', icon: '🔥', desc: 'Sequência de 7 dias' },
  { id: 'streak_30', label: '30 dias', icon: '🏆', desc: 'Sequência de 30 dias' },
  { id: 'reviews_100', label: '100 cards', icon: '⭐', desc: '100 cards revisados' },
  { id: 'words_50', label: '50 palavras', icon: '📚', desc: '50 palavras aprendidas' },
  { id: 'words_200', label: '200 palavras', icon: '🎓', desc: '200 palavras aprendidas' },
  { id: 'daily_goal', label: 'Meta diária', icon: '✅', desc: 'Meta diária atingida' },
]

export default function Progress() {
  const { stats, loadStats } = useProgressStore()

  useEffect(() => { loadStats() }, [])

  const last7 = getLast7DaysActivity(stats)
  const chartData = last7.map(d => ({
    day: DAY_LABELS[new Date(d.date + 'T12:00:00').getDay()],
    cards: d.cardsReviewed,
    isToday: d.date === new Date().toISOString().slice(0, 10),
  }))

  const accuracy = stats.totalReviews > 0
    ? Math.round((stats.correctReviews / stats.totalReviews) * 100)
    : 0

  const allProgress = getAllCardProgress()
  const categoryStats = categories.map(cat => {
    const total = getCardCountByCategory(cat.id)
    const cardIds = new Set(flashcards.filter(c => c.categoryId === cat.id).map(c => c.id))
    const learned = Object.values(allProgress).filter(p =>
      cardIds.has(p.cardId) && p.reviews > 0
    ).length
    const pct = total > 0 ? Math.round((learned / total) * 100) : 0
    return { ...cat, learned, total, pct }
  })

  return (
    <div className="p-4 md:p-8 max-w-5xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">Meu Progresso</h1>
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1 self-start sm:self-auto">
          {['7 dias', '30 dias', 'Todo período'].map((label, i) => (
            <button
              key={i}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                i === 0 ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Top stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div className="bg-white rounded-xl p-4 md:p-5 border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500 mb-1">Palavras Aprendidas</p>
          <p className="text-3xl font-bold text-gray-900">{stats.wordsLearned}</p>
          <p className="text-xs text-green-500 mt-1">↑ em crescimento</p>
        </div>

        <div className="bg-blue-500 rounded-xl p-4 md:p-5 text-white shadow-sm">
          <p className="text-xs text-blue-100 mb-1">Sequência Atual</p>
          <p className="text-3xl font-bold">🔥 {stats.streak} dias</p>
          <p className="text-xs text-blue-200 mt-1">Melhor: {stats.bestStreak} dias</p>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-5 border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500 mb-1">Taxa de Acerto</p>
          <p className="text-3xl font-bold text-gray-900">{accuracy}%</p>
          <p className="text-xs text-green-500 mt-1">↑ em evolução</p>
        </div>
      </div>

      {/* Chart + category progress — stack on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Weekly chart */}
        <div className="lg:col-span-3 bg-white rounded-xl border border-gray-100 shadow-sm p-4 md:p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-800">Atividade Semanal</h2>
            <p className="text-xs text-gray-400 hidden sm:block">Cards revisados por dia</p>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={chartData} barCategoryGap="30%">
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#9ca3af' }} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip
                contentStyle={{ fontSize: 12, borderRadius: 8, border: '1px solid #e5e7eb' }}
                cursor={{ fill: '#f3f4f6' }}
              />
              <Bar dataKey="cards" name="Cards" radius={[4, 4, 0, 0]}>
                {chartData.map((entry, i) => (
                  <Cell key={i} fill={entry.isToday ? '#3b82f6' : entry.cards > 0 ? '#93c5fd' : '#e5e7eb'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category progress */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-4 md:p-5">
          <h2 className="text-sm font-semibold text-gray-800 mb-4">Por Categoria</h2>
          <div className="space-y-3">
            {categoryStats.map(cat => (
              <div key={cat.id}>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs text-gray-700 truncate">{cat.name}</p>
                  <p className={`text-xs font-semibold ml-2 shrink-0 ${cat.color}`}>{cat.pct}%</p>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full transition-all ${BAR_COLOR[cat.id] ?? 'bg-gray-400'}`}
                    style={{ width: `${cat.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements — scrollable on mobile */}
      <div className="mt-4 bg-white rounded-xl border border-gray-100 shadow-sm p-4 md:p-5">
        <h2 className="text-sm font-semibold text-gray-800 mb-4">Conquistas</h2>
        <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-none">
          {ACHIEVEMENTS.map(ach => {
            const earned = stats.achievements.includes(ach.id)
            return (
              <div
                key={ach.id}
                title={ach.desc}
                className={`flex flex-col items-center gap-1 px-4 py-3 rounded-xl border shrink-0 transition-colors ${
                  earned ? 'border-blue-200 bg-blue-50' : 'border-gray-100 bg-gray-50 opacity-40'
                }`}
              >
                <span className="text-xl">{ach.icon}</span>
                <span className="text-xs font-medium text-gray-700 whitespace-nowrap">{ach.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
