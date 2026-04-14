import type { Difficulty } from '../data/types'

type MetaBadgeProps = {
  label: string
  variant?: 'category' | 'difficulty'
  difficulty?: Difficulty
}

const difficultyToneMap: Record<Difficulty, string> = {
  easy: 'bg-mint-300/40 text-ink-900 ring-1 ring-mint-400/30',
  medium: 'bg-sun-300/40 text-ink-900 ring-1 ring-sun-400/25',
  hard: 'bg-coral-400/20 text-ink-900 ring-1 ring-coral-400/25',
}

export const MetaBadge = ({
  label,
  variant = 'category',
  difficulty = 'easy',
}: MetaBadgeProps) => {
  const toneClass =
    variant === 'difficulty'
      ? difficultyToneMap[difficulty]
      : 'bg-cream-100 text-slate-500 ring-1 ring-slate-200/60'

  return (
    <span className={`rounded-full px-3 py-1 text-[11px] font-extrabold tracking-[0.01em] ${toneClass}`}>
      {label}
    </span>
  )
}
