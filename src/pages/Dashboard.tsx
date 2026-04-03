import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgressStore } from '../store/progressStore'
import { useSessionStore } from '../store/sessionStore'
import { categories } from '../data/categories'
import { getWordOfTheDay, getCardCountByCategory } from '../data/flashcards'
import { getTodayCardsReviewed } from '../lib/storage'
import CategoryIcon from '../components/ui/CategoryIcon'
import ProgressBar from '../components/ui/ProgressBar'
import OnboardingTour from '../components/ui/OnboardingTour'

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Bom dia'
  if (h < 18) return 'Boa tarde'
  return 'Boa noite'
}

export default function Dashboard() {
  const navigate = useNavigate()
  const { stats, userName, loadStats } = useProgressStore()
  const [showTour, setShowTour] = useState(() => !localStorage.getItem('ff_onboarding_seen'))

  function dismissTour() {
    localStorage.setItem('ff_onboarding_seen', 'true')
    setShowTour(false)
  }

  useEffect(() => { loadStats() }, [])
  const getDueCount = useSessionStore(s => s.getDueCount)

  const wordOfDay = getWordOfTheDay()
  const todayReviewed = getTodayCardsReviewed(stats)
  const goalPercent = Math.min(100, Math.round((todayReviewed / stats.dailyGoal) * 100))
  const dueCount = getDueCount()
  const firstName = userName?.split(' ')[0] ?? 'você'

  return (
    <div className="p-4 md:p-8 max-w-5xl">
      {showTour && <OnboardingTour onDone={dismissTour} />}
      {/* Header */}
      <div className="mb-5">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
          {getGreeting()}, {firstName}! 👋
        </h1>
        <p className="text-gray-500 text-sm mt-0.5">Continue de onde você parou.</p>
      </div>

      {/* Reminder banner */}
      {todayReviewed === 0 && (
        <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-4">
          <span className="text-xl shrink-0">🎯</span>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-amber-800">Você ainda não estudou hoje!</p>
            <p className="text-xs text-amber-600 mt-0.5">Só 20 minutos fazem diferença. Vamos lá?</p>
          </div>
          <button
            onClick={() => navigate('/flashcards')}
            className="shrink-0 px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-medium rounded-lg transition-colors"
          >
            Estudar agora
          </button>
        </div>
      )}

      {/* Top row stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        {/* Streak */}
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <p className="text-xs text-gray-500 mb-1">🔥 Sequência atual</p>
          <p className="text-3xl font-bold text-gray-900">{stats.streak} dias</p>
          <p className="text-xs text-gray-400 mt-1">Continue assim! 🏆</p>
        </div>

        {/* Daily goal */}
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs text-gray-500">Meta de Hoje</p>
            <p className="text-xs font-semibold text-blue-600">{goalPercent}%</p>
          </div>
          <p className="text-base font-semibold text-gray-900 mb-3">
            {todayReviewed} / {stats.dailyGoal} cards revisados
          </p>
          <ProgressBar value={goalPercent} />
        </div>

        {/* Start session CTA */}
        <button
          onClick={() => navigate('/flashcards')}
          className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-xl p-4 text-left transition-colors shadow-sm"
        >
          <div className="flex items-center gap-2 mb-1">
            <PlayIcon className="w-5 h-5 shrink-0" />
            <span className="font-semibold text-sm md:text-base">Iniciar Sessão de Hoje</span>
          </div>
          <p className="text-blue-100 text-xs">
            {dueCount > 0 ? `${dueCount} cards esperando` : 'Tudo em dia!'}
          </p>
        </button>
      </div>

      {/* Middle row */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Word of the day */}
        <div className="lg:col-span-2 bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-1.5 mb-3">
            <StarIcon className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-medium text-blue-500">Palavra do Dia</span>
          </div>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{wordOfDay.front}</p>
          <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-1.5 mb-3 self-start">
            <button
              onClick={() => { window.speechSynthesis?.cancel(); window.speechSynthesis?.speak(Object.assign(new SpeechSynthesisUtterance(wordOfDay.front), { lang: 'en-US', rate: 0.85 })) }}
              className="text-blue-400 hover:text-blue-600 transition-colors"
              title="Ouvir pronúncia"
            >
              <SpeakerIcon className="w-4 h-4" />
            </button>
            <p className="text-sm text-blue-700 font-medium">{wordOfDay.phonetic}</p>
          </div>
          <div className="bg-gray-50 rounded-lg px-3 py-2 mb-3">
            <p className="text-xs text-gray-400 mb-0.5">Português 🇧🇷</p>
            <p className="text-sm text-gray-700 font-medium">{wordOfDay.back}</p>
          </div>
          <p className="text-xs text-gray-500 italic leading-relaxed">"{wordOfDay.exampleEn}"</p>
        </div>

        {/* Categories grid */}
        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Categorias</h2>
          <div className="grid grid-cols-2 gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => navigate(`/flashcards/${cat.id}`)}
                className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-md active:scale-95 transition-all text-left"
              >
                <CategoryIcon icon={cat.icon} className={`w-5 h-5 mb-2 ${cat.color}`} />
                <p className="text-xs md:text-sm font-medium text-gray-800 leading-tight">{cat.name}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {getCardCountByCategory(cat.id)} cards
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function SpeakerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    </svg>
  )
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}
