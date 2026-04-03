import type { Flashcard } from '../../types'

interface Props {
  card: Flashcard
  isFlipped: boolean
  onClick: () => void
}

function speak(text: string) {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'en-US'
  utterance.rate = 0.85
  window.speechSynthesis.speak(utterance)
}

export default function FlashCard({ card, isFlipped, onClick }: Props) {
  return (
    <div className="card-flip w-full max-w-2xl mx-auto cursor-pointer" onClick={onClick}>
      <div className={`card-flip-inner relative ${isFlipped ? 'flipped' : ''}`} style={{ minHeight: 260 }}>
        {/* Front */}
        <div className="card-face absolute inset-0 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center p-6 md:p-8">
          <p className="text-xs text-gray-400 mb-4 flex items-center gap-1.5">
            <RotateIcon className="w-3.5 h-3.5" /> Clique para virar
          </p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">{card.front}</p>

          {/* Fonética em português + botão de áudio */}
          <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2 mb-3">
            <button
              onClick={e => { e.stopPropagation(); speak(card.front) }}
              className="text-blue-400 hover:text-blue-600 transition-colors"
              title="Ouvir pronúncia"
            >
              <SpeakerIcon className="w-4 h-4" />
            </button>
            <p className="text-sm text-blue-700 font-medium">{card.phonetic}</p>
          </div>

          <span className="bg-yellow-50 text-yellow-600 text-xs px-3 py-1 rounded-full font-medium">
            {card.type}
          </span>
        </div>

        {/* Back */}
        <div className="card-face card-back absolute inset-0 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center p-6 md:p-8">
          <p className="text-2xl font-bold text-gray-900 text-center mb-2">{card.back}</p>

          {/* Fonética no verso + botão de áudio */}
          <div className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2 mb-3">
            <button
              onClick={e => { e.stopPropagation(); speak(card.front) }}
              className="text-blue-400 hover:text-blue-600 transition-colors"
              title="Ouvir pronúncia"
            >
              <SpeakerIcon className="w-4 h-4" />
            </button>
            <p className="text-sm text-blue-700 font-medium">{card.phonetic}</p>
          </div>

          <span className="bg-yellow-50 text-yellow-600 text-xs px-3 py-1 rounded-full font-medium">
            {card.type}
          </span>
        </div>
      </div>
    </div>
  )
}

function RotateIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
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
