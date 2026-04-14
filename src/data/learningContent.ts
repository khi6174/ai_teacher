import {
  arduinoBasicsSet,
  atmegaRegistersSet,
  embeddedCSet,
  firmwareDebugSet,
  firmwareInterviewSet,
  linuxBootSet,
  linuxInterviewSet,
  mcuBasicsSet,
  raspberryPiLinuxSet,
  sensorCommSet,
} from './sets'

export const conceptSets = [
  mcuBasicsSet,
  arduinoBasicsSet,
  atmegaRegistersSet,
  sensorCommSet,
  embeddedCSet,
  firmwareDebugSet,
  firmwareInterviewSet,
  raspberryPiLinuxSet,
  linuxBootSet,
  linuxInterviewSet,
]

export const getTodayConceptSet = (date: string) => {
  const dayIndex = Number(date.split('-').join('')) % conceptSets.length

  return conceptSets[dayIndex]
}

export const getConceptSetById = (setId: string) =>
  conceptSets.find((set) => set.id === setId)

export const getRecommendedNextSet = (
  currentSetId: string,
  completedSetIds: string[] = [],
) => {
  const candidates = conceptSets.filter((set) => set.id !== currentSetId)
  const unlocked = candidates.filter((set) =>
    isSetUnlocked(set.id, completedSetIds),
  )
  const uncompleted = unlocked.find((set) => !completedSetIds.includes(set.id))

  return uncompleted ?? unlocked[0] ?? conceptSets[0]
}

export const getSetIndex = (setId: string) =>
  conceptSets.findIndex((set) => set.id === setId)

export const isSetUnlocked = (setId: string, completedSetIds: string[] = []) => {
  const index = getSetIndex(setId)

  if (index <= 0) {
    return true
  }

  const previousSet = conceptSets[index - 1]

  return completedSetIds.includes(previousSet.id)
}
