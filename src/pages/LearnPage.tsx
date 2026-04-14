import { useMemo, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { MetaBadge } from '../components/MetaBadge'
import { PrimaryButton } from '../components/PrimaryButton'
import { SectionCard } from '../components/SectionCard'
import { getConceptSetById } from '../data/learningContent'
import { getProgressPercent } from '../utils/date'

export const LearnPage = () => {
  const navigate = useNavigate()
  const { setId = '' } = useParams()
  const conceptSet = getConceptSetById(setId)
  const [cardIndex, setCardIndex] = useState(0)

  const progress = useMemo(() => {
    if (!conceptSet) {
      return 0
    }

    return getProgressPercent(cardIndex + 1, conceptSet.cards.length)
  }, [cardIndex, conceptSet])

  if (!conceptSet) {
    return <Navigate to="/" replace />
  }

  const currentCard = conceptSet.cards[cardIndex]
  const isLast = cardIndex === conceptSet.cards.length - 1

  return (
    <div className="space-y-4">
      <SectionCard className="bg-gradient-to-br from-white via-cream-50 to-mint-300/25">
        <div className="mb-4 flex items-center justify-between text-sm font-semibold text-slate-500">
          <span>{conceptSet.category}</span>
          <span>{progress}%</span>
        </div>
        <div className="mb-5 h-2 rounded-full bg-white">
          <div
            className="h-full rounded-full bg-gradient-to-r from-mint-400 to-ocean-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="animate-pop-in rounded-[28px] bg-white p-5 shadow-sm">
          <div className="mb-3 flex flex-wrap gap-2">
            <div className="inline-flex rounded-full bg-cream-100 px-3 py-2 text-xs font-bold text-ocean-500">
              핵심 개념 {cardIndex + 1}
            </div>
            <MetaBadge label={currentCard.category} />
            <MetaBadge
              label={
                currentCard.difficulty === 'easy'
                  ? '쉬움'
                  : currentCard.difficulty === 'medium'
                    ? '보통'
                    : '어려움'
              }
              variant="difficulty"
              difficulty={currentCard.difficulty}
            />
          </div>
          <h2 className="text-xl font-extrabold">{currentCard.question}</h2>
          <p className="mt-4 text-base font-bold leading-7 text-ink-900">{currentCard.answer}</p>
          <p className="mt-4 rounded-2xl bg-cream-50 p-4 text-sm leading-6 text-slate-500">
            {currentCard.explanation}
          </p>
        </div>
      </SectionCard>

      <SectionCard>
        <p className="text-sm font-semibold text-slate-500">짧게 보고 바로 기억 점검</p>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          틀리면 곧바로 해설을 보고 다시 학습하도록 설계했습니다.
        </p>
        <div className="mt-5 flex gap-3">
          <button
            type="button"
            onClick={() => setCardIndex((current) => Math.max(0, current - 1))}
            disabled={cardIndex === 0}
            className="flex-1 rounded-3xl border border-slate-200 px-4 py-4 text-sm font-bold text-slate-500 disabled:opacity-40"
          >
            이전
          </button>
          <div className="flex-1">
            {isLast ? (
              <PrimaryButton onClick={() => navigate(`/quiz/${conceptSet.id}`)}>퀴즈 시작</PrimaryButton>
            ) : (
              <PrimaryButton onClick={() => setCardIndex((current) => current + 1)}>다음 카드</PrimaryButton>
            )}
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
