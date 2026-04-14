import type { ConceptSet } from '../types'

export const mcuBasicsSet: ConceptSet = {
  id: 'mcu-basics',
  title: 'MCU 기초와 GPIO',
  subtitle: '입출력 핀과 레지스터 감각 익히기',
  description:
    '임베디드 입문에서 가장 먼저 잡아야 하는 MCU 구조와 GPIO 제어 흐름을 짧게 익힙니다.',
  category: 'MCU 기초',
  estimatedMinutes: 6,
  cards: [
    {
      id: 'gpio-1',
      question: 'MCU는 무엇을 하는 칩일까?',
      answer: 'CPU, 메모리, 주변장치를 한 칩에 모아 센서와 장치를 제어하는 소형 컴퓨터입니다.',
      explanation:
        '임베디드 제품은 작은 자원으로 빠르게 반응해야 하므로 MCU처럼 통합된 구조를 많이 사용합니다.',
      difficulty: 'easy',
      category: 'MCU 기초',
    },
    {
      id: 'gpio-2',
      question: 'GPIO의 핵심 역할은?',
      answer: '핀을 입력 또는 출력으로 설정해 외부 장치와 신호를 주고받는 것입니다.',
      explanation:
        '버튼은 입력, LED는 출력으로 연결하는 식으로 가장 기본적인 하드웨어 상호작용을 만듭니다.',
      difficulty: 'easy',
      category: 'MCU 기초',
    },
    {
      id: 'gpio-3',
      question: '레지스터를 직접 다룬다는 말의 의미는?',
      answer: '하드웨어 제어 값을 메모리 맵 레지스터에 직접 써서 동작을 바꾸는 것입니다.',
      explanation:
        '핀 방향, 출력 값, 인터럽트 허용 여부 같은 상태를 레지스터 비트로 제어합니다.',
      difficulty: 'medium',
      category: 'ATmega',
    },
  ],
  quiz: [
    {
      id: 'gpio-q1',
      question: 'GPIO 출력 설정이 필요한 상황은 무엇일까요?',
      answer: 'led',
      explanation: 'LED를 켜고 끄려면 MCU가 신호를 보내야 하므로 출력 설정이 필요합니다.',
      difficulty: 'easy',
      category: 'MCU 기초',
      type: 'multiple',
      options: [
        { id: 'button', text: '버튼 눌림 읽기' },
        { id: 'led', text: 'LED 켜기' },
        { id: 'sensor', text: '온도값 수집만 하기' },
        { id: 'uart', text: '시리얼 로그 보기' },
      ],
    },
    {
      id: 'gpio-q2',
      question: 'MCU는 CPU와 메모리, 주변장치를 한 칩에 통합한 구조다.',
      answer: 'o',
      explanation: '이 통합 구조 덕분에 소형 장치 제어에 적합합니다.',
      difficulty: 'easy',
      category: 'MCU 기초',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'gpio-q3',
      question: '레지스터 제어와 가장 가까운 설명은?',
      answer: 'register',
      explanation: '하드웨어 상태를 나타내는 비트를 직접 읽고 쓰는 방식입니다.',
      difficulty: 'medium',
      category: 'ATmega',
      type: 'multiple',
      options: [
        { id: 'compiler', text: '컴파일러가 알아서 핀을 배치하는 기능' },
        { id: 'register', text: '메모리 맵 비트값을 직접 설정하는 방법' },
        { id: 'cache', text: 'CPU 캐시 용량을 늘리는 작업' },
        { id: 'boot', text: '부트로더만 수정하는 과정' },
      ],
    },
    {
      id: 'gpio-q4',
      question: '버튼 입력을 읽으려면 일반적으로 해당 핀은 입력 모드여야 한다.',
      answer: 'o',
      explanation: '입력 모드로 두어야 외부에서 들어오는 전기 신호를 읽을 수 있습니다.',
      difficulty: 'easy',
      category: '센서 / 통신',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'gpio-q5',
      question: 'GPIO 학습이 중요한 이유로 가장 적절한 것은?',
      answer: 'foundation',
      explanation:
        '대부분의 임베디드 프로젝트는 센서 입력과 액추에이터 출력을 다루므로 GPIO가 기초가 됩니다.',
      difficulty: 'medium',
      category: '펌웨어',
      type: 'multiple',
      options: [
        { id: 'design', text: 'UI 디자인을 빠르게 하기 위해서' },
        { id: 'foundation', text: '하드웨어 상호작용의 출발점이기 때문에' },
        { id: 'network', text: '클라우드 배포를 위해서' },
        { id: 'database', text: 'DB 스키마를 만들기 위해서' },
      ],
    },
  ],
}
