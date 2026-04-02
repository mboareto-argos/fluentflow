import { useState } from 'react'
import { useProgressStore } from '../store/progressStore'

export default function Onboarding() {
  const [name, setName] = useState('')
  const [error, setError] = useState(false)
  const { setUserName } = useProgressStore()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      setError(true)
      return
    }
    setUserName(name.trim())
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
            <span className="text-white text-lg font-bold">FF</span>
          </div>
          <span className="text-2xl font-semibold text-gray-900">FluentFlow</span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="text-center mb-6">
            <div className="text-4xl mb-3">👋</div>
            <h1 className="text-xl font-semibold text-gray-900 mb-1">Bem-vindo!</h1>
            <p className="text-sm text-gray-500">Como você quer ser chamado?</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                autoFocus
                placeholder="Seu primeiro nome"
                value={name}
                onChange={e => { setName(e.target.value); setError(false) }}
                className={`w-full px-4 py-3 text-sm rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-100 ${
                  error
                    ? 'border-red-300 focus:border-red-400'
                    : 'border-gray-200 focus:border-blue-400'
                }`}
              />
              {error && (
                <p className="text-xs text-red-500 mt-1.5 ml-1">Por favor, informe seu nome.</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors text-sm"
            >
              Começar a aprender →
            </button>
          </form>
        </div>

        {/* Feature bullets */}
        <div className="mt-6 space-y-2">
          {[
            { icon: '🔁', text: 'Repetição espaçada inteligente (SM-2)' },
            { icon: '📊', text: 'Acompanhe seu progresso diário' },
            { icon: '🏆', text: 'Conquistas e sequências de estudo' },
          ].map(item => (
            <div key={item.text} className="flex items-center gap-3 px-2">
              <span className="text-base">{item.icon}</span>
              <p className="text-xs text-gray-500">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
