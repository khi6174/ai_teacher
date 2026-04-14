export const calculateXp = (score: number, total: number) => {
  const accuracyBonus = Math.round((score / total) * 20)
  return 20 + accuracyBonus
}

export const getResultMessage = (score: number, total: number) => {
  const ratio = score / total

  if (ratio === 1) {
    return {
      title: '완벽해요!',
      subtitle: '오늘 학습을 깔끔하게 마무리했습니다.',
      emotion: '😄',
    }
  }

  if (ratio >= 0.6) {
    return {
      title: '좋아요, 감이 오고 있어요',
      subtitle: '틀린 문제만 한 번 더 보면 훨씬 단단해집니다.',
      emotion: '🙂',
    }
  }

  return {
    title: '다시 보면 더 잘 풀 수 있어요',
    subtitle: '오답 해설을 보고 개념 카드를 한 번 더 복습해봅시다.',
    emotion: '🫠',
  }
}

export const getDailyGoalMessage = (completedCount: number, goalCount: number) => {
  if (completedCount >= goalCount) {
    return {
      title: '오늘 목표를 달성했어요',
      subtitle: '가볍게 복습하거나 다른 카테고리도 이어서 볼 수 있습니다.',
      tone: 'success' as const,
      cta: '복습 이어가기',
    }
  }

  if (completedCount > 0) {
    return {
      title: '좋아요, 오늘 루틴이 이어지고 있어요',
      subtitle: '한 번만 더 학습하면 오늘 목표를 깔끔하게 채울 수 있어요.',
      tone: 'progress' as const,
      cta: '한 번 더 학습하기',
    }
  }

  return {
    title: '지금 5분만 시작하면 충분해요',
    subtitle: '짧은 카드 학습과 퀴즈 한 세트로 오늘 streak를 지킬 수 있습니다.',
    tone: 'start' as const,
    cta: '오늘 학습 시작하기',
  }
}
