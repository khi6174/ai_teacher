import { getTodayConceptSet } from '../data/learningContent'
import { getTodayKey } from '../utils/date'

export const useTodaySet = () => {
  const todayKey = getTodayKey()
  const todaySet = getTodayConceptSet(todayKey)

  return {
    todayKey,
    todaySet,
  }
}
