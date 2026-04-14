export const getTodayKey = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = `${today.getMonth() + 1}`.padStart(2, '0')
  const day = `${today.getDate()}`.padStart(2, '0')

  return `${year}-${month}-${day}`
}

export const formatKoreanDate = (date: string) =>
  new Intl.DateTimeFormat('ko-KR', {
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  }).format(new Date(date))

export const getProgressPercent = (value: number, total: number) => {
  if (total === 0) {
    return 0
  }

  return Math.min(100, Math.round((value / total) * 100))
}

export const getDayDifference = (from: string, to: string) => {
  const fromDate = new Date(from)
  const toDate = new Date(to)

  return Math.round((toDate.getTime() - fromDate.getTime()) / 86400000)
}

export const getRecentDateKeys = (days: number) => {
  const dates: string[] = []
  const today = new Date()

  for (let index = days - 1; index >= 0; index -= 1) {
    const current = new Date(today)
    current.setDate(today.getDate() - index)

    const year = current.getFullYear()
    const month = `${current.getMonth() + 1}`.padStart(2, '0')
    const day = `${current.getDate()}`.padStart(2, '0')

    dates.push(`${year}-${month}-${day}`)
  }

  return dates
}

export const getShortWeekday = (date: string) =>
  new Intl.DateTimeFormat('ko-KR', {
    weekday: 'short',
  }).format(new Date(date))
