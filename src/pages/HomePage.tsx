import { useNavigate } from 'react-router-dom'
import { ProgressBar } from '../components/ProgressBar'
import { PrimaryButton } from '../components/PrimaryButton'
import { SectionCard } from '../components/SectionCard'
import { StatPill } from '../components/StatPill'
import { getRecommendedNextSet, isSetUnlocked } from '../data/learningContent'
import { useTodaySet } from '../hooks/useTodaySet'
import { useLearningStore } from '../stores/useLearningStore'
import { getDailyGoalMessage } from '../utils/xp'

export const HomePage = () => {
  const navigate = useNavigate()
  const { todaySet } = useTodaySet()
  const { xp, streak, learnedToday, history, markLessonStarted, completedSetIds } =
    useLearningStore()

  const dailyGoal = 1
  const completedCount = learnedToday ? 1 : 0
  const goalMessage = getDailyGoalMessage(completedCount, dailyGoal)
  const nextSet = getRecommendedNextSet(todaySet.id, completedSetIds)
  const nextSetUnlocked = isSetUnlocked(nextSet.id, completedSetIds)

  const goalToneClass =
    goalMessage.tone === 'success'
      ? 'bg-mint-300/30 text-ink-900'
      : goalMessage.tone === 'progress'
        ? 'bg-sun-300/35 text-ink-900'
        : 'bg-ocean-500 text-white'

  const handleStart = () => {
    markLessonStarted()
    navigate(`/learn/${todaySet.id}`)
  }

  return (
    <div className="space-y-4">
      <SectionCard className="overflow-hidden bg-gradient-to-br from-sun-300/75 via-cream-50 to-white">
        <div className="animate-pop-in">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="inline-flex rounded-full bg-white/90 px-3 py-2 text-xs font-extrabold text-ocean-500 shadow-sm">
              오늘의 학습
            </div>
            <div className="rounded-full bg-ink-900 px-3 py-2 text-xs font-extrabold text-white">
              5~10분 루틴
            </div>
          </div>
          <h2 className="text-3xl font-extrabold tracking-[-0.02em]">{todaySet.title}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">{todaySet.subtitle}</p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            <StatPill label="예상 시간" value={`${todaySet.estimatedMinutes}분`} tone="yellow" />
            <StatPill label="카드" value={`${todaySet.cards.length}장`} tone="green" />
            <StatPill label="퀴즈" value={`${todaySet.quiz.length}문제`} />
          </div>
          <div className="mt-5">
            <PrimaryButton onClick={handleStart}>
              {goalMessage.cta}
            </PrimaryButton>
          </div>
        </div>
      </SectionCard>

      <SectionCard className="bg-gradient-to-br from-white via-cream-50 to-ocean-500/10">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-500">다음 추천</p>
            <h3 className="mt-2 text-xl font-extrabold">{nextSet.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">{nextSet.subtitle}</p>
          </div>
          <div className="rounded-2xl bg-white px-3 py-2 text-sm font-bold text-ocean-500 shadow-sm">
            {nextSet.estimatedMinutes}분
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
          <span>{nextSet.category}</span>
          <span>
            카드 {nextSet.cards.length}장 · 퀴즈 {nextSet.quiz.length}문제
          </span>
        </div>
        {nextSetUnlocked ? (
          <button
            type="button"
            onClick={() => {
              markLessonStarted()
              navigate(`/learn/${nextSet.id}`)
            }}
            className="mt-5 w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-ink-900 shadow-sm"
          >
            이 세트 이어서 보기
          </button>
        ) : (
          <div className="mt-5 rounded-3xl bg-cream-50 p-4 text-sm font-semibold text-slate-500">
            이 세트는 아직 잠겨 있어요. 먼저 이전 세트를 완료하면 열립니다.
          </div>
        )}
      </SectionCard>

      <SectionCard>
        <div className={`rounded-[24px] p-4 ${goalToneClass}`}>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em]">
            Daily Mission
          </p>
          <h3 className="mt-2 text-lg font-extrabold">{goalMessage.title}</h3>
          <p className="mt-2 text-sm leading-6 opacity-80">{goalMessage.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <StatPill label="누적 XP" value={`${xp} XP`} />
          <StatPill label="연속 학습" value={`${streak}일`} tone="green" />
        </div>
        <div className="mt-5">
          <ProgressBar value={completedCount} total={dailyGoal} />
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-500">
          목표는 하루 1회 학습 완료입니다. 짧게 배우고, 바로 퀴즈로 확인해요.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-3xl bg-cream-50 p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">오늘 완료</p>
            <p className="mt-2 text-2xl font-extrabold">
              {completedCount}/{dailyGoal}
            </p>
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">다음 행동</p>
            <p className="mt-2 text-sm font-bold text-ink-900">
              {learnedToday ? '로드맵에서 다른 세트 둘러보기' : '오늘 세트 바로 시작하기'}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => navigate('/roadmap')}
          className="mt-5 w-full rounded-3xl border border-slate-200 px-5 py-4 text-sm font-bold text-slate-500"
        >
          전체 학습 로드맵 보기
        </button>
      </SectionCard>

      <SectionCard className="bg-gradient-to-br from-ink-900 via-[#244a78] to-ink-900 text-white">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-white/70">장기 목표</p>
            <h3 className="mt-2 text-xl font-extrabold">펌웨어 취업 루틴 만들기</h3>
          </div>
          <div className="rounded-full bg-white/10 px-3 py-2 text-3xl">🚀</div>
        </div>
        <p className="mt-3 text-sm leading-6 text-white/75">
          MCU 기초부터 임베디드 리눅스, 면접 지식까지 짧은 루틴으로 연결합니다.
        </p>
        <div className="mt-4 rounded-3xl bg-white/10 p-4 text-sm text-white/80">
          최근 학습 횟수: <span className="font-bold text-white">{history.length}회</span>
        </div>
      </SectionCard>
    </div>
  )
}
