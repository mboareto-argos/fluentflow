import { create } from 'zustand'
import type { Flashcard, Rating } from '../types'
import { getAllCardProgress, saveCardProgress, getCardProgress } from '../lib/storage'
import { createCardProgress, rateCard, isDue } from '../lib/srs'
import { flashcards, getFlashcardsByCategory } from '../data/flashcards'

interface SessionStore {
  queue: Flashcard[]
  currentIndex: number
  sessionCorrect: number
  sessionTotal: number
  isFlipped: boolean
  isComplete: boolean

  startSession: (categoryId?: string) => void
  flipCard: () => void
  rateCurrentCard: (rating: Rating) => void
  resetSession: () => void
  getDueCount: (categoryId?: string) => number
}

function buildQueue(categoryId?: string): Flashcard[] {
  const pool = categoryId ? getFlashcardsByCategory(categoryId) : flashcards
  const allProgress = getAllCardProgress()

  const due = pool.filter(card => {
    const progress = allProgress[card.id]
    return !progress || isDue(progress)
  })

  // Limit to 20 cards per session
  return due.slice(0, 20)
}

export const useSessionStore = create<SessionStore>((set, get) => ({
  queue: [],
  currentIndex: 0,
  sessionCorrect: 0,
  sessionTotal: 0,
  isFlipped: false,
  isComplete: false,

  startSession: (categoryId) => {
    const queue = buildQueue(categoryId)
    set({
      queue,
      currentIndex: 0,
      sessionCorrect: 0,
      sessionTotal: 0,
      isFlipped: false,
      isComplete: queue.length === 0,
    })
  },

  flipCard: () => {
    set(state => ({ isFlipped: !state.isFlipped }))
  },

  rateCurrentCard: (rating) => {
    const { queue, currentIndex, sessionCorrect, sessionTotal } = get()
    const card = queue[currentIndex]
    if (!card) return

    const existing = getCardProgress(card.id) ?? createCardProgress(card.id)
    saveCardProgress(rateCard(existing, rating))

    const nextIndex = currentIndex + 1
    const isComplete = nextIndex >= queue.length

    set({
      currentIndex: nextIndex,
      sessionCorrect: sessionCorrect + (rating !== 'hard' ? 1 : 0),
      sessionTotal: sessionTotal + 1,
      isFlipped: false,
      isComplete,
    })
  },

  resetSession: () => {
    set({
      queue: [],
      currentIndex: 0,
      sessionCorrect: 0,
      sessionTotal: 0,
      isFlipped: false,
      isComplete: false,
    })
  },

  getDueCount: (categoryId) => {
    return buildQueue(categoryId).length
  },
}))
