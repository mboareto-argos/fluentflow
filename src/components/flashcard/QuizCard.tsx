import { useState, useEffect } from 'react'
import type { Flashcard } from '../../types'

interface Props {
  card: Flashcard
  allCards: Flashcard[]
  onCorrect: () => void
  onWrong: () => void
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5)
}

function buildOptions(card: Flashcard, pool: Flashcard[]): string[] {
  const distractors = pool
    .filter(c => c.id !== card.id && c.categoryId === card.categoryId)
    .map(c => c.back)
  const others = shuffle(distractors).slice(0, 3)
  // If not enough same-category distractors, fill from other categories
  if (others.length < 3) {
    const extra = shuffle(pool.filter(c => c.id !== card.id && c.categoryId !== card.categoryId))
      .map(c => c.back)
      .slice(0, 3 - others.length)
    others.push(...extra)
  }
  return shuffle([card.back, ...others])
}

export default function QuizCard({ card, allCards, onCorrect, onWrong }: Props) {
  const [options, setOptions] = useState<string[]>([])
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    setOptions(buildOptions(card, allCards))
    setSelected(null)
  }, [card.id])

  function handleSelect(option: string) {
    if (selected) return
    setSelected(option)
    setTimeout(() => {
      if (option === card.back) onCorrect()
      else onWrong()
    }, 700)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Question */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 text-center mb-4">
        <p className="text-xs text-gray-400 mb-3">Como se traduz?</p>
        <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{card.front}</p>
        <p className="text-sm text-blue-600 font-medium">{card.phonetic}</p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-2">
        {options.map(option => {
          const isCorrect = option === card.back
          const isSelected = selected === option

          let style = 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'
          if (selected) {
            if (isCorrect) style = 'border-green-400 bg-green-50 text-green-800'
            else if (isSelected) style = 'border-red-400 bg-red-50 text-red-800'
            else style = 'border-gray-100 bg-gray-50 text-gray-400'
          }

          return (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`w-full px-4 py-3 rounded-xl border text-sm font-medium text-left transition-colors ${style}`}
            >
              {selected && isCorrect && <span className="mr-2">✓</span>}
              {selected && isSelected && !isCorrect && <span className="mr-2">✗</span>}
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}
