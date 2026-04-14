import type { ConceptSet } from '../types'

export const embeddedCSet: ConceptSet = {
  id: 'embedded-c',
  title: '임베디드 C와 메모리',
  subtitle: '포인터보다 중요한 건 메모리 감각',
  description:
    '임베디드 C에서 자주 만나는 스택, 전역 변수, volatile 키워드를 짧게 정리합니다.',
  category: '임베디드 C',
  estimatedMinutes: 7,
  cards: [
    {
      id: 'c-1',
      question: '임베디드 C에서 메모리를 의식해야 하는 이유는?',
      answer: 'RAM과 Flash가 제한적이어서 코드와 데이터 크기가 곧 성능과 안정성에 영향을 줍니다.',
      explanation:
        '데스크톱보다 훨씬 작은 자원에서 돌아가기 때문에 변수 위치와 크기를 이해하는 것이 중요합니다.',
      difficulty: 'easy',
      category: '임베디드 C',
    },
    {
      id: 'c-2',
      question: 'volatile은 언제 필요할까?',
      answer: '인터럽트나 하드웨어 레지스터처럼 값이 예기치 않게 바뀔 수 있을 때 필요합니다.',
      explanation:
        '컴파일러 최적화가 값을 고정해 버리지 않도록 알려주는 역할을 합니다.',
      difficulty: 'medium',
      category: '펌웨어',
    },
    {
      id: 'c-3',
      question: '스택을 과하게 쓰면 어떤 위험이 있을까?',
      answer: '작은 RAM에서 스택 오버플로우가 발생해 예기치 않은 동작이나 크래시가 날 수 있습니다.',
      explanation:
        '재귀 호출, 큰 지역 배열, 깊은 함수 호출 구조는 임베디드에서 특히 조심해야 합니다.',
      difficulty: 'medium',
      category: '임베디드 C',
    },
  ],
  quiz: [
    {
      id: 'c-q1',
      question: '하드웨어 레지스터 값을 읽는 변수에 자주 사용하는 키워드는?',
      answer: 'volatile',
      explanation: '값이 외부에서 바뀔 수 있음을 컴파일러에 알려야 합니다.',
      difficulty: 'medium',
      category: '펌웨어',
      type: 'multiple',
      options: [
        { id: 'static', text: 'static' },
        { id: 'volatile', text: 'volatile' },
        { id: 'inline', text: 'inline' },
        { id: 'typedef', text: 'typedef' },
      ],
    },
    {
      id: 'c-q2',
      question: '임베디드 시스템은 일반적으로 RAM 여유가 크므로 메모리 위치를 신경 쓰지 않아도 된다.',
      answer: 'x',
      explanation: '오히려 RAM이 매우 작기 때문에 메모리 감각이 중요합니다.',
      difficulty: 'easy',
      category: '임베디드 C',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'c-q3',
      question: '스택 사용량이 급격히 커질 수 있는 예시는?',
      answer: 'local-array',
      explanation: '큰 지역 배열이나 깊은 재귀는 작은 메모리 환경에서 위험합니다.',
      difficulty: 'medium',
      category: '임베디드 C',
      type: 'multiple',
      options: [
        { id: 'const', text: 'const 매크로 선언' },
        { id: 'local-array', text: '큰 지역 배열 선언' },
        { id: 'header', text: '헤더 파일 분리' },
        { id: 'uart', text: 'UART baudrate 조정' },
      ],
    },
    {
      id: 'c-q4',
      question: 'volatile은 최적화를 완전히 끄는 키워드다.',
      answer: 'x',
      explanation: '특정 변수 접근을 보존하게 돕지만 전체 최적화를 끄는 것은 아닙니다.',
      difficulty: 'medium',
      category: '펌웨어',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'c-q5',
      question: '임베디드 C 학습에서 중요한 관점은?',
      answer: 'resource',
      explanation:
        '문법 자체보다 제한된 자원에서 안전하고 예측 가능하게 동작하게 만드는 감각이 중요합니다.',
      difficulty: 'hard',
      category: '직무 면접 지식',
      type: 'multiple',
      options: [
        { id: 'syntax', text: '문법 암기만 완벽히 하기' },
        { id: 'resource', text: '자원 제약 안에서 동작을 예측하기' },
        { id: 'css', text: '시각적 레이아웃 최적화' },
        { id: 'prompt', text: '프롬프트 작성 속도 높이기' },
      ],
    },
  ],
}
