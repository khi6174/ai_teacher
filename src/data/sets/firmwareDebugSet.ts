import type { ConceptSet } from '../types'

export const firmwareDebugSet: ConceptSet = {
  id: 'firmware-debug',
  title: '펌웨어 디버깅 기초',
  subtitle: '로그, breakpoint, 재현 조건을 먼저 잡기',
  description:
    '펌웨어 문제를 빠르게 찾기 위해 필요한 디버깅 관점과 기본 절차를 짧게 정리합니다.',
  category: '펌웨어',
  estimatedMinutes: 7,
  cards: [
    {
      id: 'debug-1',
      question: '펌웨어 버그를 볼 때 가장 먼저 해야 할 일은?',
      answer: '문제가 언제, 어떤 조건에서 재현되는지 정확히 정리하는 것입니다.',
      explanation:
        '재현 조건이 모호하면 원인을 좁히기 어렵고 수정 후 검증도 불안정해집니다.',
      difficulty: 'easy',
      category: '펌웨어',
    },
    {
      id: 'debug-2',
      question: '시리얼 로그가 왜 중요할까?',
      answer: '실행 흐름과 상태 변화를 빠르게 확인할 수 있기 때문입니다.',
      explanation:
        '메모리 값, 센서 입력, 상태 전이 같은 정보를 남기면 실제 현상을 훨씬 빨리 파악할 수 있습니다.',
      difficulty: 'easy',
      category: '펌웨어',
    },
    {
      id: 'debug-3',
      question: 'breakpoint는 언제 특히 유용할까?',
      answer: '특정 조건에서 코드 흐름을 멈추고 변수 상태를 직접 확인하고 싶을 때 유용합니다.',
      explanation:
        '실시간 제약이 심한 환경에서는 로그와 함께 적절히 섞어 사용하는 것이 좋습니다.',
      difficulty: 'medium',
      category: '펌웨어',
    },
  ],
  quiz: [
    {
      id: 'debug-q1',
      question: '디버깅의 첫 단계로 가장 적절한 것은?',
      answer: 'reproduce',
      explanation: '재현 조건이 명확해야 원인 분석과 수정 검증이 가능합니다.',
      difficulty: 'easy',
      category: '펌웨어',
      type: 'multiple',
      options: [
        { id: 'guess', text: '감으로 의심 코드부터 수정하기' },
        { id: 'reproduce', text: '재현 조건을 정리하기' },
        { id: 'rewrite', text: '모듈 전체를 다시 작성하기' },
        { id: 'deploy', text: '배포부터 다시 하기' },
      ],
    },
    {
      id: 'debug-q2',
      question: '시리얼 로그는 실행 흐름을 추적하는 데 도움이 된다.',
      answer: 'o',
      explanation: '로그는 상태 변화를 빠르게 추적하는 가장 기본적인 도구 중 하나입니다.',
      difficulty: 'easy',
      category: '펌웨어',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'debug-q3',
      question: '특정 지점에서 변수 값을 멈춰서 보고 싶을 때 적절한 도구는?',
      answer: 'breakpoint',
      explanation: 'breakpoint는 코드 흐름을 멈추고 상태를 확인하는 데 적합합니다.',
      difficulty: 'medium',
      category: '펌웨어',
      type: 'multiple',
      options: [
        { id: 'breakpoint', text: 'breakpoint' },
        { id: 'bootloader', text: 'bootloader' },
        { id: 'header', text: 'header file' },
        { id: 'compiler', text: 'compiler warning' },
      ],
    },
    {
      id: 'debug-q4',
      question: '재현 조건을 확인하지 않고 바로 수정하면 검증이 어려워질 수 있다.',
      answer: 'o',
      explanation: '무엇이 문제였는지 모른 채 수정하면 수정 효과를 확신하기 어렵습니다.',
      difficulty: 'medium',
      category: '직무 면접 지식',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'debug-q5',
      question: '면접에서 좋은 디버깅 답변의 핵심은?',
      answer: 'process',
      explanation:
        '재현, 원인 추적, 가설 검증, 수정 후 확인 같은 절차를 구조적으로 설명하면 좋습니다.',
      difficulty: 'hard',
      category: '직무 면접 지식',
      type: 'multiple',
      options: [
        { id: 'speed', text: '빨리 고쳤다고만 말하기' },
        { id: 'process', text: '문제 해결 절차를 구조적으로 설명하기' },
        { id: 'luck', text: '운 좋게 발견했다고 말하기' },
        { id: 'ignore', text: '하드웨어 문제는 무시하기' },
      ],
    },
  ],
}
