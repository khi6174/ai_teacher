import { useMemo, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { MetaBadge } from '../components/MetaBadge'
import { PrimaryButton } from '../components/PrimaryButton'
import { SectionCard } from '../components/SectionCard'
import { getConceptSetById } from '../data/learningContent'
import type { QuizReview } from '../data/types'
import { useLearningStore } from '../stores/useLearningStore'

export const ReviewPage = () => {
  const navigate = useNavigate()
  const { setId = '' } = useParams()
  const conceptSet = getConceptSetById(setId)
  const reviewQueue = useLearningStore((state) => state.reviewQueueBySet[setId] ?? [])
  const clearReviewQueue = useLearningStore((state) => state.clearReviewQueue)
  const setReviewQueue = useLearningStore((state) => state.setReviewQueue)

  const reviewQuiz = useMemo(() => {
    if (!conceptSet) {
      return []
    }

    return conceptSet.quiz.filter((quiz) => reviewQueue.includes(quiz.id))
  }, [conceptSet, reviewQueue])

  const [questionIndex, setQuestionIndex] = useState(0)
  const [reviews, setReviews] = useState<QuizReview[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isFinished, setIsFinished] = useState(false)

  const currentQuiz = reviewQuiz[questionIndex]
  const isAnswered = selectedAnswer !== null
  const score = reviews.filter((review) => review.isCorrect).length

  if (!conceptSet) {
    return <Navigate to="/" replace />
  }

  if (reviewQueue.length === 0) {
    return (
      <div className="space-y-4">
        <SectionCard className="bg-gradient-to-br from-white via-cream-50 to-mint-300/25">
          <p className="text-sm font-semibold text-slate-500">오답 복습</p>
          <h2 className="mt-2 text-2xl font-extrabold">복습할 문제가 없어요</h2>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            현재 세트의 오답이 비어 있습니다. 새로운 학습을 진행하거나 다른 세트를 풀어보세요.
          </p>
          <div className="mt-5">
            <PrimaryButton onClick={() => navigate('/roadmap')}>로드맵으로 이동</PrimaryButton>
          </div>
        </SectionCard>
      </div>
    )
  }

  if (!currentQuiz && !isFinished) {
    return <Navigate to="/" replace />
  }

  const handleSelect = (answerId: string) => {
    if (isAnswered || !currentQuiz) {
      return
    }

    const review: QuizReview = {
      quizId: currentQuiz.id,
      selectedAnswer: answerId,
      isCorrect: answerId === currentQuiz.answer,
    }

    setSelectedAnswer(answerId)
    setReviews((current) => [...current, review])
  }

  const handleNext = () => {
    if (!currentQuiz || !isAnswered) {
      return
    }

    if (questionIndex === reviewQuiz.length - 1) {
      const remainingWrongIds = reviews
        .filter((review) => !review.isCorrect)
        .map((review) => review.quizId)

      if (remainingWrongIds.length === 0) {
        clearReviewQueue(setId)
      } else {
        setReviewQueue(setId, remainingWrongIds)
      }

      setIsFinished(true)
      return
    }

    setQuestionIndex((current) => current + 1)
    setSelectedAnswer(null)
  }

  if (isFinished) {
    const wrongCount = reviewQuiz.length - score

    return (
      <div className="space-y-4">
        <SectionCard className="bg-gradient-to-br from-white via-cream-50 to-sun-300/30">
          <p className="text-sm font-semibold text-slate-500">오답 복습 완료</p>
          <h2 className="mt-2 text-2xl font-extrabold">
            {wrongCount === 0 ? '오답을 모두 정리했어요' : '조금만 더 보면 끝나요'}
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            {wrongCount === 0
              ? '틀렸던 문제를 전부 다시 맞혔습니다. 같은 세트의 복습 큐는 비워졌어요.'
              : `${wrongCount}문제가 아직 남아 있습니다. 한 번 더 복습하면 더 단단해집니다.`}
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-3xl bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold text-slate-500">다시 푼 문제</p>
              <p className="mt-2 text-2xl font-extrabold">{reviewQuiz.length}</p>
            </div>
            <div className="rounded-3xl bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold text-slate-500">정답 수</p>
              <p className="mt-2 text-2xl font-extrabold">{score}</p>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {wrongCount > 0 ? (
              <PrimaryButton onClick={() => navigate(`/review/${setId}`)}>한 번 더 복습하기</PrimaryButton>
            ) : (
              <PrimaryButton onClick={() => navigate(`/learn/${setId}`)}>세트 다시 보기</PrimaryButton>
            )}
            <button
              type="button"
              onClick={() => navigate('/roadmap')}
              className="w-full rounded-3xl border border-slate-200 px-5 py-4 text-base font-bold text-slate-500"
            >
              로드맵으로 돌아가기
            </button>
          </div>
        </SectionCard>
      </div>
    )
  }

  const latestReview = reviews.find((review) => review.quizId === currentQuiz.id)
  const answerCorrect = latestReview?.isCorrect ?? false
  const progress = Math.round(((questionIndex + 1) / reviewQuiz.length) * 100)

  return (
    <div className="space-y-4">
      <SectionCard className="bg-gradient-to-br from-white via-cream-50 to-coral-400/10">
        <div className="mb-4 flex items-center justify-between text-sm font-semibold text-slate-500">
          <span>
            오답 복습 {questionIndex + 1} / {reviewQuiz.length}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="mb-5 h-2 rounded-full bg-white">
          <div
            className="h-full rounded-full bg-gradient-to-r from-coral-400 to-ocean-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mb-3 flex flex-wrap gap-2">
          <MetaBadge label={currentQuiz.category} />
          <MetaBadge
            label={
              currentQuiz.difficulty === 'easy'
                ? '쉬움'
                : currentQuiz.difficulty === 'medium'
                  ? '보통'
                  : '어려움'
            }
            variant="difficulty"
            difficulty={currentQuiz.difficulty}
          />
          <MetaBadge label="오답 복습" />
        </div>
        <h2 className="text-xl font-extrabold">{currentQuiz.question}</h2>
        <div className="mt-5 space-y-3">
          {currentQuiz.options.map((option) => {
            const isPicked = selectedAnswer === option.id
            const isCorrect = currentQuiz.answer === option.id
            const resultClass = !isAnswered
              ? 'border-slate-200 bg-white hover:border-ocean-500'
              : isCorrect
                ? 'border-mint-400 bg-mint-300/30'
                : isPicked
                  ? 'border-coral-400 bg-coral-400/20'
                  : 'border-slate-200 bg-white/60'

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelect(option.id)}
                className={`w-full rounded-3xl border px-4 py-4 text-left text-base font-semibold transition ${resultClass}`}
              >
                {option.text}
              </button>
            )
          })}
        </div>
      </SectionCard>

      <SectionCard>
        {isAnswered ? (
          <>
            <div
              className={`rounded-3xl p-4 text-sm font-semibold ${answerCorrect ? 'bg-mint-300/30 text-ink-900' : 'bg-coral-400/20 text-ink-900'}`}
            >
              {answerCorrect ? '좋아요. 이 문제는 이제 정리됐어요.' : '아직 헷갈릴 수 있어요. 해설로 한 번 더 잡아봅시다.'}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-500">{currentQuiz.explanation}</p>
            <div className="mt-5">
              <PrimaryButton onClick={handleNext}>
                {questionIndex === reviewQuiz.length - 1 ? '복습 완료 보기' : '다음 오답'}
              </PrimaryButton>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm leading-6 text-slate-500">
              틀렸던 문제만 다시 모아 짧게 복습하는 모드입니다.
            </p>
            <div className="mt-5">
              <PrimaryButton disabled>답을 선택해 주세요</PrimaryButton>
            </div>
          </>
        )}
      </SectionCard>
    </div>
  )
}
