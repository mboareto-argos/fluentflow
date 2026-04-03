import type { CardProgress, UserStats, DailyActivity } from '../types'

const KEYS = {
  CARD_PROGRESS: 'ff_card_progress',
  USER_STATS: 'ff_user_stats',
  USER_NAME: 'ff_user_name',
}

// ─── User Name ────────────────────────────────────────────────────────────────

export function getUserName(): string | null {
  return localStorage.getItem(KEYS.USER_NAME)
}

export function saveUserName(name: string): void {
  localStorage.setItem(KEYS.USER_NAME, name.trim())
}

// ─── Card Progress ────────────────────────────────────────────────────────────

export function getAllCardProgress(): Record<string, CardProgress> {
  try {
    const raw = localStorage.getItem(KEYS.CARD_PROGRESS)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function saveCardProgress(progress: CardProgress): void {
  const all = getAllCardProgress()
  all[progress.cardId] = progress
  localStorage.setItem(KEYS.CARD_PROGRESS, JSON.stringify(all))
}

export function getCardProgress(cardId: string): CardProgress | null {
  return getAllCardProgress()[cardId] ?? null
}

// ─── User Stats ───────────────────────────────────────────────────────────────

const DEFAULT_STATS: UserStats = {
  wordsLearned: 0,
  streak: 0,
  bestStreak: 0,
  lastStudyDate: null,
  totalReviews: 0,
  correctReviews: 0,
  dailyGoal: 20,
  dailyActivity: [],
  achievements: [],
}

export function getUserStats(): UserStats {
  try {
    const raw = localStorage.getItem(KEYS.USER_STATS)
    return raw ? { ...DEFAULT_STATS, ...JSON.parse(raw) } : { ...DEFAULT_STATS }
  } catch {
    return { ...DEFAULT_STATS }
  }
}

export function saveUserStats(stats: UserStats): void {
  localStorage.setItem(KEYS.USER_STATS, JSON.stringify(stats))
}

export function recordStudySession(cardsReviewed: number, correctCount: number): UserStats {
  const stats = getUserStats()
  const today = new Date().toISOString().slice(0, 10)

  // Update streak
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
  if (stats.lastStudyDate === today) {
    // Already studied today, just update counts
  } else if (stats.lastStudyDate === yesterday) {
    stats.streak += 1
  } else {
    stats.streak = 1
  }
  stats.bestStreak = Math.max(stats.bestStreak, stats.streak)
  stats.lastStudyDate = today

  // Update totals
  stats.totalReviews += cardsReviewed
  stats.correctReviews += correctCount
  stats.wordsLearned = Object.values(getAllCardProgress()).filter(p => p.reviews > 0).length

  // Update daily activity
  const existing = stats.dailyActivity.find(d => d.date === today)
  if (existing) {
    existing.cardsReviewed += cardsReviewed
  } else {
    stats.dailyActivity.push({ date: today, cardsReviewed })
  }
  // Keep last 30 days only
  stats.dailyActivity = stats.dailyActivity.slice(-30)

  // Check achievements
  checkAndGrantAchievements(stats)

  saveUserStats(stats)
  return stats
}

function checkAndGrantAchievements(stats: UserStats): void {
  const grant = (id: string) => {
    if (!stats.achievements.includes(id)) stats.achievements.push(id)
  }
  if (stats.streak >= 7) grant('streak_7')
  if (stats.streak >= 30) grant('streak_30')
  if (stats.totalReviews >= 100) grant('reviews_100')
  if (stats.wordsLearned >= 50) grant('words_50')
  if (stats.wordsLearned >= 200) grant('words_200')
  if (getTodayCardsReviewed(stats) >= stats.dailyGoal) grant('daily_goal')
}

export function getTodayCardsReviewed(stats: UserStats): number {
  const today = new Date().toISOString().slice(0, 10)
  return stats.dailyActivity.find(d => d.date === today)?.cardsReviewed ?? 0
}

export function getLast7DaysActivity(stats: UserStats): DailyActivity[] {
  const days: DailyActivity[] = []
  for (let i = 6; i >= 0; i--) {
    const date = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10)
    const found = stats.dailyActivity.find(d => d.date === date)
    days.push(found ?? { date, cardsReviewed: 0 })
  }
  return days
}

export function getLast30DaysActivity(stats: UserStats): DailyActivity[] {
  const days: DailyActivity[] = []
  for (let i = 29; i >= 0; i--) {
    const date = new Date(Date.now() - i * 86400000).toISOString().slice(0, 10)
    const found = stats.dailyActivity.find(d => d.date === date)
    days.push(found ?? { date, cardsReviewed: 0 })
  }
  return days
}
