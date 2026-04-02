export type CardLevel = 'Iniciante' | 'Intermediário' | 'Avançado'
export type CardType = 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase' | 'phrasal verb' | 'idiom' | 'expression'
export type Rating = 'hard' | 'good' | 'easy'

export interface Category {
  id: string
  name: string
  description: string
  level: CardLevel
  icon: string
  color: string
  bgColor: string
}

export interface Flashcard {
  id: string
  categoryId: string
  front: string
  back: string
  pronunciation: string  // IPA (kept for reference)
  phonetic: string       // Pronúncia aproximada em português, ex: "Uat ar iu dúin?"
  type: CardType
  exampleEn: string
  examplePt: string
}

export interface CardProgress {
  cardId: string
  nextReview: number   // timestamp ms
  interval: number     // days
  easeFactor: number
  reviews: number
  correct: number
}

export interface DailyActivity {
  date: string         // 'YYYY-MM-DD'
  cardsReviewed: number
}

export interface UserStats {
  wordsLearned: number
  streak: number
  bestStreak: number
  lastStudyDate: string | null
  totalReviews: number
  correctReviews: number
  dailyGoal: number
  dailyActivity: DailyActivity[]
  achievements: string[]
}
