import { Navigate, useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../components/PrimaryButton'
import { SectionCard } from '../components/SectionCard'
import { getConceptSetById } from '../data/learningContent'
import { useLearningStore } from '../stores/useLearningStore'
import { getResultMessage } from '../utils/xp'

export const ResultPage = () => {
  const navigate = useNavigate()
  const { lastResult, streak, xp } = useLearningStore()
  const reviewQueue = useLearningStore((state) =>
    lastResult ? state.reviewQueueBySet[lastResult.setId] ?? [] : [],
  )

  if (!lastResult) {
    return <Navigate to="/" replace />
  }

  const setInfo = getConceptSetById(lastResult.setId)
  const resultMessage = getResultMessage(lastResult.score, lastResult.total)
  const wrongAnswers = lastResult.reviews.filter((review) => !review.isCorrect)
  const accuracy = Math.round((lastResult.score / lastResult.total) * 100)

  return (
    <div className="space-y-4">
      <SectionCard className="bg-gradient-to-br from-ink-900 via-ocean-500 to-ink-900 text-white">
        <div className="inline-flex rounded-full bg-white/12 px-4 py-3 text-5xl shadow-inner">
          {resultMessage.emotion}
        </div>
        <h2 className="mt-4 text-2xl font-extrabold">{resultMessage.title}</h2>
        <p className="mt-2 text-sm leading-6 text-white/80">{resultMessage.subtitle}</p>
        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="rounded-3xl bg-white/12 p-4">
            <p className="text-xs text-white/70">점수</p>
            <p className="mt-2 text-xl font-extrabold">
              {lastResult.score}/{lastResult.total}
            </p>
          </div>
          <div className="rounded-3xl bg-white/12 p-4">
            <p className="text-xs text-white/70">획득 XP</p>
            <p className="mt-2 text-xl font-extrabold">+{lastResult.xpEarned}</p>
          </div>
          <div className="rounded-3xl bg-white/12 p-4">
            <p className="text-xs text-white/70">Streak</p>
            <p className="mt-2 text-xl font-extrabold">{streak}일</p>
          </div>
        </div>
      </SectionCard>

      <SectionCard className="bg-gradient-to-br from-white via-cream-50 to-sun-300/20">
        <p className="text-sm font-semibold text-slate-500">성장 요약</p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="rounded-3xl bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">누적 XP</p>
            <p className="mt-2 text-2xl font-extrabold">{xp}</p>
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">정답률</p>
            <p className="mt-2 text-2xl font-extrabold">{accuracy}%</p>
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">남은 오답</p>
            <p className="mt-2 text-2xl font-extrabold">{reviewQueue.length}</p>
          </div>
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/80">
          <div
            className="h-full rounded-full bg-gradient-to-r from-mint-400 via-sun-400 to-ocean-500"
            style={{ width: `${accuracy}%` }}
          />
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-500">
          오늘 학습으로 streak {streak}일, 누적 XP {xp}를 만들었습니다. 작은 완료를 매일 쌓는 방식으로
          취업 준비 루틴을 만듭니다.
        </p>
      </SectionCard>

      <SectionCard>
        <p className="text-sm font-semibold text-slate-500">오늘 학습 세트</p>
        <h3 className="mt-2 text-lg font-extrabold">{setInfo?.title}</h3>
        <div className="mt-4 space-y-3">
          {wrongAnswers.length === 0 ? (
            <div className="rounded-3xl bg-mint-300/30 p-4 text-sm font-semibold text-ink-900">
              모든 문제를 맞혔습니다. 내일은 다음 개념으로 이어가면 됩니다.
            </div>
          ) : (
            wrongAnswers.map((review) => {
              const quiz = setInfo?.quiz.find((item) => item.id === review.quizId)

              return (
                  <div key={review.quizId} className="rounded-3xl bg-cream-50 p-4 ring-1 ring-slate-100">
                    <p className="text-sm font-bold">{quiz?.question}</p>
                    <p className="mt-2 text-sm text-slate-500">{quiz?.explanation}</p>
                  </div>
              )
            })
          )}
        </div>
        <div className="mt-5 space-y-3">
          {reviewQueue.length > 0 ? (
            <PrimaryButton onClick={() => navigate(`/review/${lastResult.setId}`)}>오답만 다시 풀기</PrimaryButton>
          ) : (
            <PrimaryButton onClick={() => navigate(`/learn/${lastResult.setId}`)}>세트 다시 보기</PrimaryButton>
          )}
          <button
            type="button"
            onClick={() => navigate('/history')}
            className="w-full rounded-3xl border border-slate-200 px-5 py-4 text-base font-bold text-slate-500"
          >
            학습 기록 보기
          </button>
        </div>
      </SectionCard>
    </div>
  )
}
