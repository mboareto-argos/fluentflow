import { useState } from 'react'

const STEPS = [
  {
    emoji: '🔁',
    title: 'Repetição Espaçada',
    body: 'Depois de ver um card, você avalia se foi fácil ou difícil. O app decide quando mostrar o card de novo — mais cedo se foi difícil, mais tarde se foi fácil. Isso fixa o conteúdo na memória de longo prazo.',
    hint: 'É o método usado por quem aprende idiomas de forma eficiente.',
  },
  {
    emoji: '😓 😊 😄',
    title: 'Os botões Difícil / Bom / Fácil',
    body: (
      <div className="space-y-2 text-left">
        <div className="flex items-start gap-2"><span className="text-red-500 font-bold text-xs w-14 shrink-0">Difícil</span><span className="text-sm text-gray-600">Não lembrei — volto amanhã</span></div>
        <div className="flex items-start gap-2"><span className="text-yellow-500 font-bold text-xs w-14 shrink-0">Bom</span><span className="text-sm text-gray-600">Lembrei com esforço — volto em 2 dias</span></div>
        <div className="flex items-start gap-2"><span className="text-green-500 font-bold text-xs w-14 shrink-0">Fácil</span><span className="text-sm text-gray-600">Lembrei fácil — volto em 7 dias</span></div>
      </div>
    ),
    hint: 'Seja honesto — isso ajuda o app a calibrar o ritmo certo para você.',
  },
  {
    emoji: '🔥',
    title: 'Streak e Meta Diária',
    body: 'Estudar todo dia é mais eficaz do que estudar muito de vez em quando. Seu streak conta quantos dias seguidos você praticou. A meta diária te ajuda a manter o hábito sem exagerar.',
    hint: 'Você pode ajustar a meta diária em Configurações.',
  },
]

interface Props {
  onDone: () => void
}

export default function OnboardingTour({ onDone }: Props) {
  const [step, setStep] = useState(0)
  const current = STEPS[step]
  const isLast = step === STEPS.length - 1

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
        {/* Step indicator */}
        <div className="flex gap-1.5 justify-center mb-5">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === step ? 'w-6 bg-blue-500' : 'w-1.5 bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="text-center mb-5">
          <div className="text-4xl mb-3">{current.emoji}</div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">{current.title}</h2>
          {typeof current.body === 'string' ? (
            <p className="text-sm text-gray-600 leading-relaxed">{current.body}</p>
          ) : (
            <div className="text-sm">{current.body}</div>
          )}
        </div>

        {/* Hint */}
        <p className="text-xs text-blue-600 bg-blue-50 rounded-lg px-3 py-2 text-center mb-5">
          💡 {current.hint}
        </p>

        {/* Actions */}
        <div className="flex gap-2">
          {step > 0 && (
            <button
              onClick={() => setStep(s => s - 1)}
              className="flex-1 py-2.5 border border-gray-200 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Voltar
            </button>
          )}
          <button
            onClick={() => isLast ? onDone() : setStep(s => s + 1)}
            className="flex-1 py-2.5 bg-blue-500 text-white rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors"
          >
            {isLast ? 'Começar!' : 'Próximo →'}
          </button>
        </div>

        {!isLast && (
          <button
            onClick={onDone}
            className="w-full mt-2 text-xs text-gray-400 hover:text-gray-600 transition-colors py-1"
          >
            Pular tutorial
          </button>
        )}
      </div>
    </div>
  )
}
