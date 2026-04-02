import { useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSessionStore } from '../store/sessionStore'
import { useProgressStore } from '../store/progressStore'
import type { Rating } from '../types'
import FlashCard from '../components/flashcard/FlashCard'
import RatingButtons from '../components/flashcard/RatingButtons'
import ProgressBar from '../components/ui/ProgressBar'

export default function FlashcardSession() {
  const { categoryId } = useParams()
  const navigate = useNavigate()
  const { queue, currentIndex, sessionCorrect, sessionTotal, isFlipped, isComplete,
    startSession, flipCard, rateCurrentCard, resetSession } = useSessionStore()
  const { recordSession } = useProgressStore()

  // Keep a ref with the latest session values so the cleanup function always
  // has access to them (closures over stale state are a common React pitfall).
  const sessionRef = useRef({ total: sessionTotal, correct: sessionCorrect, complete: isComplete })
  sessionRef.current = { total: sessionTotal, correct: sessionCorrect, complete: isComplete }

  useEffect(() => {
    startSession(categoryId)
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
  }, [categoryId])

  // Also record when session naturally completes (full queue reviewed).
  useEffect(() => {
    if (isComplete && sessionTotal > 0) {
      recordSession(sessionTotal, sessionCorrect)
    }
  }, [isComplete])

  const currentCard = queue[currentIndex]
  const progress = queue.length > 0 ? Math.round((currentIndex / queue.length) * 100) : 0

  if (isComplete) {
    return (
      <div className="p-4 md:p-8 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="text-center max-w-sm w-full">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Sessão concluída!</h2>
          {sessionTotal > 0 ? (
            <>
              <p className="text-gray-500 text-sm mb-6">
                Você revisou <strong>{sessionTotal}</strong> cards com{' '}
                <strong className="text-green-600">
                  {Math.round((sessionCorrect / sessionTotal) * 100)}% de acerto
                </strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => startSession(categoryId)}
                  className="px-5 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 active:bg-blue-700 transition-colors text-sm"
                >
                  Nova sessão
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="px-5 py-3 border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors text-sm"
                >
                  Voltar ao início
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-500 text-sm mb-6">
                Nenhum card para revisar agora. Volte mais tarde ou escolha outra categoria.
              </p>
              <button
                onClick={() => navigate('/categories')}
                className="px-5 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors text-sm"
              >
                Ver categorias
              </button>
            </>
          )}
        </div>
      </div>
    )
  }

  if (!currentCard) return null

  return (
    <div className="p-4 md:p-8 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <FlashIcon className="w-4 h-4 text-blue-500" />
          <span className="text-sm font-medium text-gray-700">Sessão Ativa</span>
        </div>
        <span className="text-sm text-gray-400">
          Card {currentIndex + 1} de {queue.length}
        </span>
      </div>

      {/* Progress bar */}
      <ProgressBar value={progress} className="mb-6 md:mb-8" />

      {/* Category tag */}
      <p className="text-center text-xs text-blue-500 font-medium mb-4 flex items-center justify-center gap-1">
        <FlashIcon className="w-3.5 h-3.5" />
        {currentCard.categoryId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
      </p>

      {/* Flash card */}
      <FlashCard card={currentCard} isFlipped={isFlipped} onClick={flipCard} />

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
    </div>
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
