import type { ConceptSet } from '../types'

export const firmwareInterviewSet: ConceptSet = {
  id: 'firmware-interview',
  title: '펌웨어 면접 기초',
  subtitle: '실무형 답변의 구조를 짧게 익히기',
  description:
    '펌웨어 면접에서 자주 나오는 질문과 답변 포인트를 짧게 학습하며 설명 구조를 익힙니다.',
  category: '직무 면접 지식',
  estimatedMinutes: 7,
  cards: [
    {
      id: 'fwi-1',
      question: '면접에서 "인터럽트란?"을 어떻게 답하면 좋을까?',
      answer: '이벤트가 발생했을 때 CPU가 현재 흐름을 잠시 멈추고 우선 처리 루틴을 수행하는 메커니즘이라고 설명하면 좋습니다.',
      explanation:
        '정의만 말하지 말고 버튼 입력, 타이머, UART 수신 같은 실제 예시를 함께 말하면 더 좋습니다.',
      difficulty: 'easy',
      category: '직무 면접 지식',
    },
    {
      id: 'fwi-2',
      question: '디버깅 경험 질문에는 무엇을 포함해야 할까?',
      answer: '문제 상황, 재현 방법, 원인 추적 과정, 수정 방법, 결과 검증 순서로 말하는 것이 좋습니다.',
      explanation:
        '결과만 말하는 것보다 문제 해결 절차를 구조적으로 설명하면 실무 감각이 잘 드러납니다.',
      difficulty: 'medium',
      category: '직무 면접 지식',
    },
    {
      id: 'fwi-3',
      question: 'volatile을 물었을 때 핵심 포인트는?',
      answer: '하드웨어 레지스터나 인터럽트 공유 변수처럼 외부 요인으로 값이 바뀔 수 있을 때 최적화 오해를 막기 위해 사용한다고 설명하면 됩니다.',
      explanation:
        '정의와 함께 왜 필요한지, 어떤 상황에서 쓰는지를 같이 설명하는 것이 중요합니다.',
      difficulty: 'medium',
      category: '직무 면접 지식',
    },
  ],
  quiz: [
    {
      id: 'fwi-q1',
      question: '면접 답변에서 좋은 구조로 가장 적절한 것은?',
      answer: 'structure',
      explanation: '정의, 예시, 실무 적용 순서로 답하면 이해하기 쉽습니다.',
      difficulty: 'easy',
      category: '직무 면접 지식',
      type: 'multiple',
      options: [
        { id: 'speed', text: '최대한 빨리 말하기' },
        { id: 'structure', text: '정의와 예시를 구조적으로 설명하기' },
        { id: 'short', text: '한 단어로만 답하기' },
        { id: 'avoid', text: '모르면 무조건 회피하기' },
      ],
    },
    {
      id: 'fwi-q2',
      question: '디버깅 경험 답변에서는 문제 해결 절차를 함께 말하는 것이 좋다.',
      answer: 'o',
      explanation: '실무형 문제 해결 능력을 보여주기 좋기 때문입니다.',
      difficulty: 'easy',
      category: '직무 면접 지식',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'fwi-q3',
      question: 'volatile 설명에 가장 적절한 요소는?',
      answer: 'external-change',
      explanation: '값이 외부 요인으로 바뀔 수 있다는 점이 핵심입니다.',
      difficulty: 'medium',
      category: '직무 면접 지식',
      type: 'multiple',
      options: [
        { id: 'syntax', text: '문법 모양만 설명하기' },
        { id: 'external-change', text: '외부 변경 가능성과 최적화 맥락 설명하기' },
        { id: 'ui', text: 'UI 코드와 연결하기' },
        { id: 'db', text: 'DB 성능과 연결하기' },
      ],
    },
    {
      id: 'fwi-q4',
      question: '인터럽트 답변에서 실제 사용 예시를 함께 말하면 더 좋다.',
      answer: 'o',
      explanation: '실무 적용 감각을 보여줄 수 있습니다.',
      difficulty: 'medium',
      category: '직무 면접 지식',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'fwi-q5',
      question: '펌웨어 면접에서 면접관이 보고 싶은 역량은?',
      answer: 'reasoning',
      explanation:
        '정답 암기보다도 문제를 이해하고 구조적으로 설명하며 원인을 추론하는 역량이 중요합니다.',
      difficulty: 'hard',
      category: '직무 면접 지식',
      type: 'multiple',
      options: [
        { id: 'memorize', text: '암기한 정의만 빠르게 말하기' },
        { id: 'reasoning', text: '개념과 문제 해결 과정을 논리적으로 설명하기' },
        { id: 'design', text: '색상 조합 설명하기' },
        { id: 'sales', text: '영업 전략 설명하기' },
      ],
    },
  ],
}
