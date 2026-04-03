interface Props {
  total: number
  correct: number
  streak: number
  wordsLearned: number
  onNewSession: () => void
  onGoHome: () => void
  onGoCategories: () => void
}

export default function SessionComplete({
  total, correct, streak, wordsLearned,
  onNewSession, onGoHome, onGoCategories,
}: Props) {
  if (total === 0) {
    return (
      <div className="p-4 md:p-8 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="text-center max-w-sm w-full">
          <div className="text-5xl mb-4">📭</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Tudo em dia!</h2>
          <p className="text-gray-500 text-sm mb-6">
            Nenhum card para revisar agora. Volte mais tarde ou explore outra categoria.
          </p>
          <button
            onClick={onGoCategories}
            className="px-5 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors text-sm"
          >
            Ver categorias
          </button>
        </div>
      </div>
    )
  }

  const accuracy = Math.round((correct / total) * 100)
  const emoji = accuracy >= 80 ? '🏆' : accuracy >= 50 ? '🎯' : '💪'
  const message = accuracy >= 80
    ? 'Excelente trabalho!'
    : accuracy >= 50
    ? 'Bom progresso!'
    : 'Continue praticando!'

  return (
    <div className="p-4 md:p-8 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-6xl mb-3">{emoji}</div>
          <h2 className="text-2xl font-bold text-gray-900">Sessão concluída!</h2>
          <p className="text-gray-500 text-sm mt-1">{message}</p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
            <p className="text-3xl font-bold text-gray-900">{total}</p>
            <p className="text-xs text-gray-500 mt-1">Cards revisados</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
            <p className={`text-3xl font-bold ${accuracy >= 70 ? 'text-green-600' : accuracy >= 40 ? 'text-yellow-500' : 'text-red-500'}`}>
              {accuracy}%
            </p>
            <p className="text-xs text-gray-500 mt-1">Taxa de acerto</p>
          </div>

          <div className="bg-blue-50 rounded-xl border border-blue-100 p-4 text-center">
            <p className="text-3xl font-bold text-blue-600">🔥 {streak}</p>
            <p className="text-xs text-blue-500 mt-1">Dias seguidos</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center">
            <p className="text-3xl font-bold text-gray-900">{wordsLearned}</p>
            <p className="text-xs text-gray-500 mt-1">Palavras aprendidas</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onNewSession}
            className="w-full py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 active:bg-blue-700 transition-colors text-sm"
          >
            Nova sessão
          </button>
          <button
            onClick={onGoHome}
            className="w-full py-3 border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors text-sm"
          >
            Voltar ao início
          </button>
        </div>
      </div>
    </div>
  )
}
