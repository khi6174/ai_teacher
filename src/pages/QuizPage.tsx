import { useMemo, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { MetaBadge } from '../components/MetaBadge'
import { PrimaryButton } from '../components/PrimaryButton'
import { SectionCard } from '../components/SectionCard'
import { getConceptSetById } from '../data/learningContent'
import type { QuizReview } from '../data/types'
import { useLearningStore } from '../stores/useLearningStore'

export const QuizPage = () => {
  const navigate = useNavigate()
  const { setId = '' } = useParams()
  const conceptSet = getConceptSetById(setId)
  const completeSession = useLearningStore((state) => state.completeSession)

  const [questionIndex, setQuestionIndex] = useState(0)
  const [reviews, setReviews] = useState<QuizReview[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const currentQuiz = conceptSet?.quiz[questionIndex]
  const score = useMemo(() => reviews.filter((review) => review.isCorrect).length, [reviews])
  const isAnswered = selectedAnswer !== null

  if (!conceptSet || !currentQuiz) {
    return <Navigate to="/" replace />
  }

  const handleSelect = (answerId: string) => {
    if (isAnswered) {
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
    if (!isAnswered) {
      return
    }

    if (questionIndex === conceptSet.quiz.length - 1) {
      completeSession({
        setId: conceptSet.id,
        score,
        total: conceptSet.quiz.length,
        reviews,
      })
      navigate('/result')
      return
    }

    setQuestionIndex((current) => current + 1)
    setSelectedAnswer(null)
  }

  const latestReview = reviews.find((review) => review.quizId === currentQuiz.id)
  const answerCorrect = latestReview?.isCorrect ?? false
  const progress = Math.round(((questionIndex + 1) / conceptSet.quiz.length) * 100)

  return (
    <div className="space-y-4">
      <SectionCard className="bg-gradient-to-br from-white via-cream-50 to-sun-300/20">
        <div className="mb-4 flex items-center justify-between text-sm font-semibold text-slate-500">
          <span>
            퀴즈 {questionIndex + 1} / {conceptSet.quiz.length}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="mb-5 h-2 rounded-full bg-white">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sun-400 to-ocean-500 transition-all"
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
          <MetaBadge label={currentQuiz.type === 'ox' ? 'OX' : '객관식'} />
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
              {answerCorrect ? '정답입니다. 바로 다음으로 넘어가도 좋아요.' : '아쉽지만 괜찮아요. 해설로 바로 복습해봅시다.'}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-500">{currentQuiz.explanation}</p>
            <div className="mt-5">
              <PrimaryButton onClick={handleNext}>
                {questionIndex === conceptSet.quiz.length - 1 ? '결과 보기' : '다음 문제'}
              </PrimaryButton>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm leading-6 text-slate-500">
              즉시 피드백으로 틀린 문제를 바로 이해하도록 돕습니다.
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
