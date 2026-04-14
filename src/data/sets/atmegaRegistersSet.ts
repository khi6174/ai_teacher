import type { ConceptSet } from '../types'

export const atmegaRegistersSet: ConceptSet = {
  id: 'atmega-registers',
  title: 'ATmega 레지스터 제어',
  subtitle: 'DDRx, PORTx, PINx를 실제 감각으로 이해하기',
  description:
    'ATmega에서 GPIO를 레지스터 단위로 제어하는 기초를 익히고 Arduino 추상화 아래 동작을 이해합니다.',
  category: 'ATmega',
  estimatedMinutes: 7,
  cards: [
    {
      id: 'atmega-1',
      question: 'DDRx 레지스터는 무엇을 설정할까?',
      answer: '각 핀을 입력으로 쓸지 출력으로 쓸지 방향을 설정합니다.',
      explanation:
        '예를 들어 비트를 1로 두면 출력, 0으로 두면 입력으로 동작하는 식으로 방향을 정합니다.',
      difficulty: 'easy',
      category: 'ATmega',
    },
    {
      id: 'atmega-2',
      question: 'PORTx 레지스터의 주 역할은?',
      answer: '출력 모드에서는 핀의 HIGH/LOW를 결정하고, 입력 모드에서는 풀업 설정에 사용됩니다.',
      explanation:
        '같은 레지스터라도 핀 모드에 따라 의미가 달라지므로 문맥을 함께 이해해야 합니다.',
      difficulty: 'medium',
      category: 'ATmega',
    },
    {
      id: 'atmega-3',
      question: 'PINx 레지스터는 언제 볼까?',
      answer: '입력 핀의 현재 상태를 읽고 싶을 때 확인합니다.',
      explanation:
        '버튼 입력처럼 외부에서 들어오는 신호를 읽을 때 PIN 레지스터 값을 확인합니다.',
      difficulty: 'medium',
      category: 'ATmega',
    },
  ],
  quiz: [
    {
      id: 'atmega-q1',
      question: 'ATmega에서 핀 방향을 설정하는 레지스터는?',
      answer: 'ddr',
      explanation: 'DDRx는 데이터 방향 레지스터로 입력/출력을 정합니다.',
      difficulty: 'easy',
      category: 'ATmega',
      type: 'multiple',
      options: [
        { id: 'ddr', text: 'DDRx' },
        { id: 'pin', text: 'PINx' },
        { id: 'adc', text: 'ADCx' },
        { id: 'tmr', text: 'TMRx' },
      ],
    },
    {
      id: 'atmega-q2',
      question: 'PORTx는 출력 상태 제어에 사용될 수 있다.',
      answer: 'o',
      explanation: '출력 모드일 때 PORTx 값으로 HIGH/LOW를 설정합니다.',
      difficulty: 'easy',
      category: 'ATmega',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'atmega-q3',
      question: '입력 핀 상태를 읽을 때 주로 확인하는 것은?',
      answer: 'pin',
      explanation: 'PINx 레지스터는 현재 입력 상태를 읽는 데 사용됩니다.',
      difficulty: 'medium',
      category: 'ATmega',
      type: 'multiple',
      options: [
        { id: 'port', text: 'PORTx' },
        { id: 'pin', text: 'PINx' },
        { id: 'ddr', text: 'DDRx' },
        { id: 'ram', text: 'RAM' },
      ],
    },
    {
      id: 'atmega-q4',
      question: '레지스터를 직접 다루면 하드웨어 제어가 더 명확하게 보일 수 있다.',
      answer: 'o',
      explanation: '추상화 아래 동작을 이해하는 데 큰 도움이 됩니다.',
      difficulty: 'medium',
      category: '펌웨어',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'atmega-q5',
      question: 'ATmega 레지스터 학습의 장점은?',
      answer: 'hardware-view',
      explanation:
        '핀 제어가 실제로 어떤 비트 조작으로 이루어지는지 이해하게 되어 임베디드 기초가 단단해집니다.',
      difficulty: 'hard',
      category: '직무 면접 지식',
      type: 'multiple',
      options: [
        { id: 'hardware-view', text: '하드웨어 동작을 비트 수준으로 이해할 수 있다' },
        { id: 'seo', text: '검색 노출이 자동 개선된다' },
        { id: 'billing', text: '결제 시스템 구현이 쉬워진다' },
        { id: 'design', text: '디자인 툴 사용이 쉬워진다' },
      ],
    },
  ],
}
