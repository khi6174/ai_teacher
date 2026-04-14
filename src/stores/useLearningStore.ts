import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { getConceptSetById } from '../data/learningContent'
import type { QuizReview, StudyHistory } from '../data/types'
import { getDayDifference, getTodayKey } from '../utils/date'
import { calculateXp } from '../utils/xp'

type LastResult = {
  setId: string
  score: number
  total: number
  xpEarned: number
  reviews: QuizReview[]
}

type LearningState = {
  xp: number
  streak: number
  lastCompletedDate: string | null
  lastPlayedDate: string | null
  learnedToday: boolean
  completedSetIds: string[]
  reviewQueueBySet: Record<string, string[]>
  history: StudyHistory[]
  lastResult: LastResult | null
  completeSession: (input: {
    setId: string
    score: number
    total: number
    reviews: QuizReview[]
  }) => void
  markLessonStarted: () => void
  clearReviewQueue: (setId: string) => void
  setReviewQueue: (setId: string, quizIds: string[]) => void
}

const isLearnedToday = (lastPlayedDate: string | null) => lastPlayedDate === getTodayKey()

export const useLearningStore = create<LearningState>()(
  persist(
    (set) => ({
      xp: 0,
      streak: 0,
      lastCompletedDate: null,
      lastPlayedDate: null,
      learnedToday: false,
      completedSetIds: [],
      reviewQueueBySet: {},
      history: [],
      lastResult: null,
      markLessonStarted: () =>
        set(() => ({
          lastPlayedDate: getTodayKey(),
          learnedToday: true,
        })),
      clearReviewQueue: (setId) =>
        set((state) => ({
          reviewQueueBySet: {
            ...state.reviewQueueBySet,
            [setId]: [],
          },
        })),
      setReviewQueue: (setId, quizIds) =>
        set((state) => ({
          reviewQueueBySet: {
            ...state.reviewQueueBySet,
            [setId]: quizIds,
          },
        })),
      completeSession: ({ setId, score, total, reviews }) =>
        set((state) => {
          const todayKey = getTodayKey()
          const xpEarned = calculateXp(score, total)
          const setInfo = getConceptSetById(setId)
          const wrongQuizIds = reviews
            .filter((review) => !review.isCorrect)
            .map((review) => review.quizId)

          let nextStreak = 1
          if (state.lastCompletedDate) {
            const diff = getDayDifference(state.lastCompletedDate, todayKey)
            if (diff === 0) {
              nextStreak = state.streak
            } else if (diff === 1) {
              nextStreak = state.streak + 1
            }
          }

          const historyId = `${todayKey}-${setId}`
          const nextHistory: StudyHistory[] = [
            {
              id: historyId,
              date: todayKey,
              setId,
              setTitle: setInfo?.title ?? '오늘의 학습',
              score,
              total,
              xpEarned,
              streakAfter: nextStreak,
            },
            ...state.history.filter((item) => item.id !== historyId),
          ].slice(0, 14)

          return {
            xp: state.lastCompletedDate === todayKey ? state.xp : state.xp + xpEarned,
            streak: nextStreak,
            lastCompletedDate: todayKey,
            lastPlayedDate: todayKey,
            learnedToday: true,
            completedSetIds: state.completedSetIds.includes(setId)
              ? state.completedSetIds
              : [...state.completedSetIds, setId],
            reviewQueueBySet: {
              ...state.reviewQueueBySet,
              [setId]: wrongQuizIds,
            },
            history: nextHistory,
            lastResult: {
              setId,
              score,
              total,
              xpEarned,
              reviews,
            },
          }
        }),
    }),
    {
      name: 'embedded-learning-store',
      partialize: (state) => ({
        xp: state.xp,
        streak: state.streak,
        lastCompletedDate: state.lastCompletedDate,
        lastPlayedDate: state.lastPlayedDate,
        learnedToday: state.learnedToday,
        completedSetIds: state.completedSetIds,
        reviewQueueBySet: state.reviewQueueBySet,
        history: state.history,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.learnedToday = isLearnedToday(state.lastPlayedDate)
        }
      },
    },
  ),
)
