import { SectionCard } from '../components/SectionCard'
import { useLearningStore } from '../stores/useLearningStore'
import { formatKoreanDate, getRecentDateKeys, getShortWeekday } from '../utils/date'

export const HistoryPage = () => {
  const { history, xp, streak } = useLearningStore()
  const recentDays = getRecentDateKeys(7)
  const activeDays = recentDays.filter((date) =>
    history.some((item) => item.date === date),
  ).length

  return (
    <div className="space-y-4">
      <SectionCard>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-3xl bg-cream-100 p-4">
            <p className="text-xs font-semibold text-slate-500">누적 XP</p>
            <p className="mt-2 text-2xl font-extrabold">{xp}</p>
          </div>
          <div className="rounded-3xl bg-mint-300/30 p-4">
            <p className="text-xs font-semibold text-slate-500">최신 streak</p>
            <p className="mt-2 text-2xl font-extrabold">{streak}일</p>
          </div>
        </div>
      </SectionCard>

      <SectionCard className="bg-gradient-to-br from-white via-cream-50 to-mint-300/20">
        <p className="text-sm font-semibold text-slate-500">최근 7일 활동</p>
        <h2 className="mt-2 text-xl font-extrabold">루틴이 눈에 보이게 쌓이고 있어요</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          최근 7일 중 <span className="font-bold text-ink-900">{activeDays}일</span> 학습했습니다.
          짧게라도 칸을 채우는 것이 streak 유지에 가장 중요해요.
        </p>
        <div className="mt-5 grid grid-cols-7 gap-2">
          {recentDays.map((date) => {
            const entry = history.find((item) => item.date === date)
            const isActive = Boolean(entry)

            return (
              <div
                key={date}
                className={[
                  'rounded-3xl p-3 text-center',
                  isActive
                    ? 'bg-ink-900 text-white shadow-md'
                    : 'bg-white text-slate-400 shadow-sm',
                ].join(' ')}
              >
                <p className="text-[11px] font-bold">{getShortWeekday(date)}</p>
                <p className="mt-2 text-lg font-extrabold">
                  {Number(date.slice(-2))}
                </p>
                <p className="mt-1 text-[10px] font-semibold">
                  {isActive ? `+${entry?.xpEarned ?? 0}XP` : '휴식'}
                </p>
              </div>
            )
          })}
        </div>
      </SectionCard>

      <SectionCard>
        <h2 className="text-xl font-extrabold">학습 히스토리</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          최근 14회의 학습 기록을 저장합니다. localStorage 기반이라 브라우저에 바로 남습니다.
        </p>
        <div className="mt-5 space-y-3">
          {history.length === 0 ? (
            <div className="rounded-3xl bg-cream-50 p-5 text-sm text-slate-500">
              아직 기록이 없어요. 오늘 학습을 시작해 첫 XP를 쌓아보세요.
            </div>
          ) : (
            history.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-extrabold">{item.setTitle}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">
                      {formatKoreanDate(item.date)}
                    </p>
                  </div>
                  <div className="rounded-full bg-sun-300/40 px-3 py-2 text-xs font-bold text-ink-900">
                    +{item.xpEarned} XP
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                  <span>
                    점수 {item.score}/{item.total}
                  </span>
                  <span>streak {item.streakAfter}일</span>
                </div>
              </div>
            ))
          )}
        </div>
      </SectionCard>
    </div>
  )
}
