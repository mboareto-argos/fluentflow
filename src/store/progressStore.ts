import { create } from 'zustand'
import type { UserStats } from '../types'
import { getUserStats, saveUserStats, recordStudySession, getUserName, saveUserName, getAllCardProgress } from '../lib/storage'

interface ProgressStore {
  stats: UserStats
  userName: string | null
  loadStats: () => void
  recordSession: (cardsReviewed: number, correctCount: number) => void
  setDailyGoal: (goal: number) => void
  setUserName: (name: string) => void
}

// Recomputes wordsLearned from the actual card progress saved in localStorage,
// so the count is always accurate even if the session was never "completed".
function computeStats(): UserStats {
  const stats = getUserStats()
  stats.wordsLearned = Object.values(getAllCardProgress()).filter(p => p.reviews > 0).length
  return stats
}

export const useProgressStore = create<ProgressStore>((set) => ({
  stats: computeStats(),
  userName: getUserName(),

  loadStats: () => {
    set({ stats: computeStats() })
  },

  recordSession: (cardsReviewed, correctCount) => {
    const updated = recordStudySession(cardsReviewed, correctCount)
    // Recompute wordsLearned after saving session, since recordStudySession
    // already calls getAllCardProgress() internally — keep them in sync.
    updated.wordsLearned = Object.values(getAllCardProgress()).filter(p => p.reviews > 0).length
    saveUserStats(updated)
    set({ stats: updated })
  },

  setDailyGoal: (goal) => {
    const stats = computeStats()
    stats.dailyGoal = goal
    saveUserStats(stats)
    set({ stats })
  },

  setUserName: (name) => {
    saveUserName(name)
    set({ userName: name })
  },
}))
