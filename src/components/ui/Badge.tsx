import type { CardLevel } from '../../types'

interface BadgeProps {
  level: CardLevel
}

const COLORS: Record<CardLevel, string> = {
  'Iniciante': 'bg-blue-50 text-blue-600',
  'Intermediário': 'bg-yellow-50 text-yellow-600',
  'Avançado': 'bg-green-50 text-green-600',
}

export default function Badge({ level }: BadgeProps) {
  return (
    <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${COLORS[level]}`}>
      {level}
    </span>
  )
}
