interface ProgressBarProps {
  value: number  // 0–100
  className?: string
  color?: string
}

export default function ProgressBar({ value, className = '', color = 'bg-blue-500' }: ProgressBarProps) {
  return (
    <div className={`w-full bg-gray-100 rounded-full h-2 overflow-hidden ${className}`}>
      <div
        className={`h-2 rounded-full transition-all duration-500 ${color}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
}
