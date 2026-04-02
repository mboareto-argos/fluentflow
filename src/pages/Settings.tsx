import { useState } from 'react'
import { useProgressStore } from '../store/progressStore'

export default function Settings() {
  const { stats, setDailyGoal, userName, setUserName } = useProgressStore()
  const [goal, setGoal] = useState(stats.dailyGoal)
  const [nameInput, setNameInput] = useState(userName ?? '')
  const [savedGoal, setSavedGoal] = useState(false)
  const [savedName, setSavedName] = useState(false)

  const handleSaveGoal = () => {
    setDailyGoal(goal)
    setSavedGoal(true)
    setTimeout(() => setSavedGoal(false), 2000)
  }

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nameInput.trim()) return
    setUserName(nameInput.trim())
    setSavedName(true)
    setTimeout(() => setSavedName(false), 2000)
  }

  return (
    <div className="p-4 md:p-8 max-w-2xl">
      <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-5">Configurações</h1>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm divide-y divide-gray-100">
        {/* Name */}
        <div className="p-4 md:p-5">
          <h2 className="text-sm font-semibold text-gray-800 mb-1">Seu Nome</h2>
          <p className="text-xs text-gray-400 mb-4">Como você aparece no app</p>
          <form onSubmit={handleSaveName} className="flex gap-2">
            <input
              type="text"
              value={nameInput}
              onChange={e => setNameInput(e.target.value)}
              className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
              placeholder="Seu nome"
            />
            <button
              type="submit"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors shrink-0 ${
                savedName
                  ? 'bg-green-500 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              {savedName ? '✓ Salvo!' : 'Salvar'}
            </button>
          </form>
        </div>

        {/* Daily goal */}
        <div className="p-4 md:p-5">
          <h2 className="text-sm font-semibold text-gray-800 mb-1">Meta Diária</h2>
          <p className="text-xs text-gray-400 mb-4">Quantos cards você quer revisar por dia</p>
          <div className="flex gap-2 flex-wrap mb-4">
            {[10, 15, 20, 30, 50].map(n => (
              <button
                key={n}
                onClick={() => setGoal(n)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  goal === n
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                {n} cards
              </button>
            ))}
          </div>
          <button
            onClick={handleSaveGoal}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              savedGoal
                ? 'bg-green-500 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {savedGoal ? '✓ Salvo!' : 'Salvar'}
          </button>
        </div>

        {/* About */}
        <div className="p-4 md:p-5">
          <h2 className="text-sm font-semibold text-gray-800 mb-1">Sobre o FluentFlow</h2>
          <p className="text-xs text-gray-400 leading-relaxed">
            FluentFlow usa o algoritmo de repetição espaçada SM-2 para otimizar seu aprendizado.
            Cards que você achou difíceis aparecem com mais frequência; cards fáceis são revistos
            com menos frequência. Isso maximiza a retenção em menos tempo de estudo.
          </p>
        </div>

        {/* Reset */}
        <div className="p-4 md:p-5">
          <h2 className="text-sm font-semibold text-gray-800 mb-1">Resetar Dados</h2>
          <p className="text-xs text-gray-400 mb-3">
            Apaga todo o seu progresso e volta do zero. Essa ação não pode ser desfeita.
          </p>
          <button
            onClick={() => {
              if (confirm('Tem certeza? Isso apaga todo o seu progresso.')) {
                localStorage.clear()
                window.location.reload()
              }
            }}
            className="px-4 py-2 rounded-lg text-sm font-medium border border-red-200 text-red-600 hover:bg-red-50 active:bg-red-100 transition-colors"
          >
            Resetar progresso
          </button>
        </div>
      </div>
    </div>
  )
}
