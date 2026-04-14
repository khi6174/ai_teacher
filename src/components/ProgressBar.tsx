type ProgressBarProps = {
  value: number
  total: number
}

export const ProgressBar = ({ value, total }: ProgressBarProps) => {
  const percent = total === 0 ? 0 : Math.min(100, Math.round((value / total) * 100))

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm font-semibold text-slate-500">
        <span>오늘 목표</span>
        <span>{percent}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white/80">
        <div
          className="h-full rounded-full bg-gradient-to-r from-mint-400 to-ocean-500 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
