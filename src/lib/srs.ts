import type { CardProgress, Rating } from '../types'

const INTERVALS: Record<Rating, number> = {
  hard: 1,
  good: 2,
  easy: 7,
}

const EASE_DELTA: Record<Rating, number> = {
  hard: -0.15,
  good: 0,
  easy: 0.1,
}

const MIN_EASE = 1.3

export function createCardProgress(cardId: string): CardProgress {
  return {
    cardId,
    nextReview: Date.now(),
    interval: 1,
    easeFactor: 2.5,
    reviews: 0,
    correct: 0,
  }
}

export function rateCard(progress: CardProgress, rating: Rating): CardProgress {
  const newEase = Math.max(MIN_EASE, progress.easeFactor + EASE_DELTA[rating])
  const baseInterval = INTERVALS[rating]
  const newInterval = progress.reviews === 0
    ? baseInterval
    : Math.round(baseInterval * newEase)

  return {
    ...progress,
    interval: newInterval,
    easeFactor: newEase,
    nextReview: Date.now() + newInterval * 24 * 60 * 60 * 1000,
    reviews: progress.reviews + 1,
    correct: progress.correct + (rating !== 'hard' ? 1 : 0),
  }
}

export function isDue(progress: CardProgress): boolean {
  return Date.now() >= progress.nextReview
}

export function getNextReviewLabel(progress: CardProgress): string {
  const days = Math.round((progress.nextReview - Date.now()) / (24 * 60 * 60 * 1000))
  if (days <= 0) return 'Hoje'
  if (days === 1) return 'Amanhã'
  return `Em ${days} dias`
}
