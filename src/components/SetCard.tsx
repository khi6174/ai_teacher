import { Link } from 'react-router-dom'
import type { ConceptSet } from '../data/types'

type SetCardProps = {
  set: ConceptSet
  completed: boolean
  isToday?: boolean
  hasReview?: boolean
  locked?: boolean
}

export const SetCard = ({
  set,
  completed,
  isToday = false,
  hasReview = false,
  locked = false,
}: SetCardProps) => {
  const cardClass = locked
    ? 'block rounded-[30px] border border-slate-200 bg-white/70 p-5 opacity-75 shadow-sm'
    : 'block rounded-[30px] border border-white/80 bg-white/92 p-5 shadow-[0_18px_40px_-28px_rgba(24,49,83,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_45px_-28px_rgba(22,119,255,0.32)]'

  return (
    <Link
      to={locked ? '/roadmap' : `/learn/${set.id}`}
      className={cardClass}
      aria-disabled={locked}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap gap-2">
            {locked ? (
              <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-500">
                잠금
              </span>
            ) : null}
            {isToday ? (
              <span className="rounded-full bg-sun-300/40 px-3 py-1 text-xs font-bold text-ink-900">
                오늘 추천
              </span>
            ) : null}
            {completed ? (
              <span className="rounded-full bg-mint-300/40 px-3 py-1 text-xs font-bold text-ink-900">
                완료
              </span>
            ) : (
              <span className="rounded-full bg-cream-100 px-3 py-1 text-xs font-bold text-slate-500">
                학습 전
              </span>
            )}
            {hasReview ? (
              <span className="rounded-full bg-coral-400/20 px-3 py-1 text-xs font-bold text-ink-900">
                오답 복습
              </span>
            ) : null}
          </div>
          <h3 className="mt-3 text-lg font-extrabold text-ink-900">{set.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">{set.subtitle}</p>
        </div>
        <div className="rounded-2xl bg-ink-900 px-3 py-2 text-sm font-bold text-white">
          {set.estimatedMinutes}분
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
        <span>{set.category}</span>
        <span>
          카드 {set.cards.length}장 · 퀴즈 {set.quiz.length}문제
        </span>
      </div>
      {locked ? (
        <p className="mt-3 text-xs font-semibold text-slate-400">
          이전 세트를 완료하면 열립니다.
        </p>
      ) : null}
    </Link>
  )
}
