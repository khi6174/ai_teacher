type StatPillProps = {
  label: string
  value: string
  tone?: 'yellow' | 'green' | 'blue'
}

const toneClasses = {
  yellow: 'bg-sun-300/50 text-ink-900',
  green: 'bg-mint-300/50 text-ink-900',
  blue: 'bg-white text-ocean-500',
}

export const StatPill = ({ label, value, tone = 'blue' }: StatPillProps) => {
  return (
    <div className={`rounded-3xl px-4 py-3 shadow-sm ${toneClasses[tone]}`}>
      <p className="text-xs font-semibold text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-extrabold">{value}</p>
    </div>
  )
}
