export type Difficulty = 'easy' | 'medium' | 'hard'

export type Flashcard = {
  id: string
  question: string
  answer: string
  explanation: string
  difficulty: Difficulty
  category: string
}

export type QuizOption = {
  id: string
  text: string
}

export type Quiz = {
  id: string
  question: string
  answer: string
  explanation: string
  difficulty: Difficulty
  category: string
  type: 'multiple' | 'ox'
  options: QuizOption[]
}

export type ConceptSet = {
  id: string
  title: string
  subtitle: string
  description: string
  category: string
  estimatedMinutes: number
  cards: Flashcard[]
  quiz: Quiz[]
}

export type QuizReview = {
  quizId: string
  selectedAnswer: string
  isCorrect: boolean
}

export type StudyHistory = {
  id: string
  date: string
  setId: string
  setTitle: string
  score: number
  total: number
  xpEarned: number
  streakAfter: number
}
