import { useMemo, useState } from 'react'
import { SectionCard } from '../components/SectionCard'
import { SetCard } from '../components/SetCard'
import { conceptSets, isSetUnlocked } from '../data/learningContent'
import { useTodaySet } from '../hooks/useTodaySet'
import { useLearningStore } from '../stores/useLearningStore'

export const RoadmapPage = () => {
  const { todaySet } = useTodaySet()
  const completedSetIds = useLearningStore((state) => state.completedSetIds)
  const reviewQueueBySet = useLearningStore((state) => state.reviewQueueBySet)
  const [selectedCategory, setSelectedCategory] = useState('전체')

  const categories = useMemo(
    () => ['전체', ...new Set(conceptSets.map((set) => set.category))],
    [],
  )

  const filteredSets = useMemo(() => {
    if (selectedCategory === '전체') {
      return conceptSets
    }

    return conceptSets.filter((set) => set.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="space-y-4">
      <SectionCard className="bg-gradient-to-br from-white via-cream-50 to-sun-300/30">
        <p className="text-sm font-semibold text-slate-500">학습 로드맵</p>
        <h2 className="mt-2 text-2xl font-extrabold">기초부터 면접까지 한 칸씩</h2>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          오늘 추천 세트부터 차근차근 쌓아가면 임베디드 기초, C, 리눅스 감각까지 이어집니다.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={[
                  'rounded-full px-4 py-2 text-sm font-bold transition',
                  isActive
                    ? 'bg-ink-900 text-white'
                    : 'bg-white text-slate-500 shadow-sm hover:bg-cream-100',
                ].join(' ')}
              >
                {category}
              </button>
            )
          })}
        </div>
        <p className="mt-4 text-xs font-semibold text-slate-500">
          {selectedCategory === '전체'
            ? `전체 ${conceptSets.length}개 세트를 보고 있어요.`
            : `${selectedCategory} 카테고리 ${filteredSets.length}개 세트를 보고 있어요.`}
        </p>
      </SectionCard>

      <div className="space-y-0">
        {filteredSets.map((set, index) => {
          const completed = completedSetIds.includes(set.id)
          const locked = !isSetUnlocked(set.id, completedSetIds)
          const hasReview = (reviewQueueBySet[set.id] ?? []).length > 0
          const isCurrent = !completed && !locked
          const isLast = index === filteredSets.length - 1

          const nodeClass = locked
            ? 'bg-slate-200 text-slate-500'
            : completed
              ? 'bg-mint-400 text-white'
              : isCurrent
                ? 'bg-ocean-500 text-white ring-4 ring-ocean-500/15'
                : 'bg-ocean-500 text-white'

          const lineClass = locked ? 'bg-slate-200' : 'bg-ocean-200'

          return (
            <div key={set.id} className="grid grid-cols-[52px_1fr] gap-3">
              <div className="flex flex-col items-center">
                <div
                  className={[
                    'flex h-11 w-11 items-center justify-center rounded-full text-sm font-extrabold shadow-sm',
                    nodeClass,
                  ].join(' ')}
                >
                  {completed ? '✓' : index + 1}
                </div>
                {isCurrent ? (
                  <div className="mt-2 rounded-full bg-ocean-500/10 px-2 py-1 text-[10px] font-extrabold text-ocean-500">
                    NOW
                  </div>
                ) : null}
                {!isLast ? <div className={`mt-2 w-1 flex-1 rounded-full ${lineClass}`} /> : null}
              </div>
              <div className={isLast ? 'pb-0' : 'pb-4'}>
                <SetCard
                  set={set}
                  completed={completed}
                  isToday={todaySet.id === set.id}
                  hasReview={hasReview}
                  locked={locked}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
