import type { Rating } from '../../types'

interface Props {
  onRate: (rating: Rating) => void
}

export default function RatingButtons({ onRate }: Props) {
  return (
    <div className="flex gap-3 justify-center">
      <button
        onClick={() => onRate('hard')}
        className="flex-1 max-w-48 border border-red-200 bg-red-50 hover:bg-red-100 rounded-xl py-4 transition-colors"
      >
        <p className="text-red-600 font-semibold text-sm">Difícil</p>
        <p className="text-red-400 text-xs mt-0.5">Vou revisar em breve</p>
      </button>
      <button
        onClick={() => onRate('good')}
        className="flex-1 max-w-48 border border-gray-200 bg-white hover:bg-gray-50 rounded-xl py-4 transition-colors"
      >
        <p className="text-gray-800 font-semibold text-sm">Bom</p>
        <p className="text-gray-400 text-xs mt-0.5">Revisar em 2 dias</p>
      </button>
      <button
        onClick={() => onRate('easy')}
        className="flex-1 max-w-48 border border-green-200 bg-green-50 hover:bg-green-100 rounded-xl py-4 transition-colors"
      >
        <p className="text-green-600 font-semibold text-sm">Fácil</p>
        <p className="text-green-400 text-xs mt-0.5">Revisar em 7 dias</p>
      </button>
    </div>
  )
}
