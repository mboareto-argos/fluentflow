import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSessionStore } from '../store/sessionStore'
import type { SessionMode } from '../store/sessionStore'
import { useProgressStore } from '../store/progressStore'
import type { Rating } from '../types'
import FlashCard from '../components/flashcard/FlashCard'
import RatingButtons from '../components/flashcard/RatingButtons'
import ProgressBar from '../components/ui/ProgressBar'
import SessionComplete from '../components/flashcard/SessionComplete'
import QuizCard from '../components/flashcard/QuizCard'
import { flashcards } from '../data/flashcards'

export default function FlashcardSession() {
  const { categoryId } = useParams()
  const navigate = useNavigate()
  const { queue, currentIndex, sessionCorrect, sessionTotal, isFlipped, isComplete,
    startSession, flipCard, rateCurrentCard, resetSession } = useSessionStore()
  const [mode, setMode] = useState<SessionMode>('review')
  const [reversed, setReversed] = useState(() => localStorage.getItem('ff_reverse_mode') === 'true')

  function toggleReversed() {
    setReversed(prev => {
      localStorage.setItem('ff_reverse_mode', String(!prev))
      return !prev
    })
  }
  const { stats, recordSession, loadStats } = useProgressStore()

  // Keep a ref with the latest session values so the cleanup function always
  // has access to them (closures over stale state are a common React pitfall).
  const sessionRef = useRef({ total: sessionTotal, correct: sessionCorrect, complete: isComplete })
  sessionRef.current = { total: sessionTotal, correct: sessionCorrect, complete: isComplete }

  useEffect(() => {
    startSession(categoryId, mode)
    return () => {
      // Save partial session progress when navigating away mid-session.
      // This ensures streak and word count update even if the user doesn't
      // reach the "Sessão concluída" screen.
      const { total, correct, complete } = sessionRef.current
      if (total > 0 && !complete) {
        recordSession(total, correct)
      }
      resetSession()
    }
  }, [categoryId, mode])

  // Also record when session naturally completes (full queue reviewed).
  useEffect(() => {
    if (isComplete && sessionTotal > 0) {
      recordSession(sessionTotal, sessionCorrect)
      loadStats()
    }
  }, [isComplete])

  const currentCard = queue[currentIndex]
  const progress = queue.length > 0 ? Math.round((currentIndex / queue.length) * 100) : 0

  if (isComplete) {
    return (
      <SessionComplete
        total={sessionTotal}
        correct={sessionCorrect}
        streak={stats.streak}
        wordsLearned={stats.wordsLearned}
        onNewSession={() => startSession(categoryId)}
        onGoHome={() => navigate('/')}
        onGoCategories={() => navigate('/categories')}
      />
    )
  }

  if (!currentCard) return null

  return (
    <div className="p-4 md:p-8 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          {([['review', 'Revisar'], ['learn', 'Aprender'], ['quiz', 'Quiz']] as [SessionMode, string][]).map(([m, label]) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                mode === m ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleReversed}
            title={reversed ? 'Modo normal (EN → PT)' : 'Modo reverso (PT → EN)'}
            className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg border transition-colors ${
              reversed
                ? 'bg-purple-50 border-purple-200 text-purple-700'
                : 'bg-gray-50 border-gray-200 text-gray-500 hover:text-gray-700'
            }`}
          >
            <SwapIcon className="w-3.5 h-3.5" />
            {reversed ? 'PT → EN' : 'EN → PT'}
          </button>
          <span className="text-sm text-gray-400">
            {currentIndex + 1} / {queue.length}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <ProgressBar value={progress} className="mb-6 md:mb-8" />

      {/* Category tag */}
      <p className="text-center text-xs text-blue-500 font-medium mb-4 flex items-center justify-center gap-1">
        <FlashIcon className="w-3.5 h-3.5" />
        {currentCard.categoryId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
      </p>

      {mode === 'quiz' ? (
        <QuizCard
          card={currentCard}
          allCards={flashcards}
          onCorrect={() => rateCurrentCard('good')}
          onWrong={() => rateCurrentCard('hard')}
        />
      ) : (
        <>
          {/* Flash card */}
          <FlashCard card={currentCard} isFlipped={isFlipped} reversed={reversed} onClick={flipCard} />

          {/* Context example (shown after flip) */}
          {isFlipped && (
            <div className="mt-4 bg-white rounded-xl border border-gray-100 shadow-sm p-4 md:p-5">
              <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
                <QuoteIcon className="w-3.5 h-3.5" /> Exemplo em contexto
              </p>
              <p className="text-sm font-medium text-gray-800">{currentCard.exampleEn}</p>
              <p className="text-sm text-gray-400 mt-1">{currentCard.examplePt}</p>
            </div>
          )}

          {/* Rating / hint */}
          <div className="mt-4">
            {isFlipped ? (
              <RatingButtons onRate={rating => rateCurrentCard(rating as Rating)} />
            ) : (
              <p className="text-center text-sm text-gray-400">
                Clique no card para ver a resposta
              </p>
            )}
          </div>

          {/* Skip */}
          {!isFlipped && (
            <div className="mt-4 text-center">
              <button
                onClick={() => rateCurrentCard('hard')}
                className="text-xs text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1 mx-auto"
              >
                <SkipIcon className="w-3.5 h-3.5" /> Pular este card
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

function SwapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  )
}

function FlashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  )
}

function SkipIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <polygon points="5 4 15 12 5 20 5 4" />
      <line x1="19" y1="5" x2="19" y2="19" />
    </svg>
  )
}
