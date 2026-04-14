import type { ConceptSet } from '../types'

export const arduinoBasicsSet: ConceptSet = {
  id: 'arduino-basics',
  title: 'Arduino 기초와 스케치',
  subtitle: 'setup, loop, 디지털 입출력 감각 잡기',
  description:
    'Arduino 입문에서 가장 먼저 익혀야 하는 스케치 구조와 디지털 입출력 흐름을 짧게 학습합니다.',
  category: 'Arduino',
  estimatedMinutes: 6,
  cards: [
    {
      id: 'arduino-1',
      question: 'Arduino 스케치에서 setup()은 언제 실행될까?',
      answer: '보드가 켜지거나 리셋된 직후 한 번 실행됩니다.',
      explanation:
        '핀 모드 초기화, 시리얼 통신 시작 같은 준비 작업은 보통 setup() 안에서 처리합니다.',
      difficulty: 'easy',
      category: 'Arduino',
    },
    {
      id: 'arduino-2',
      question: 'loop()의 역할은 무엇일까?',
      answer: '메인 동작을 계속 반복 실행하는 함수입니다.',
      explanation:
        '센서 읽기, LED 제어, 버튼 확인처럼 반복적으로 해야 하는 로직이 loop() 안에 들어갑니다.',
      difficulty: 'easy',
      category: 'Arduino',
    },
    {
      id: 'arduino-3',
      question: 'pinMode(13, OUTPUT)은 무엇을 의미할까?',
      answer: '13번 핀을 출력용으로 사용하겠다고 설정하는 코드입니다.',
      explanation:
        'digitalWrite()로 LED를 켜기 전에 해당 핀이 출력 핀인지 먼저 설정해야 합니다.',
      difficulty: 'medium',
      category: 'Arduino',
    },
  ],
  quiz: [
    {
      id: 'arduino-q1',
      question: 'Arduino에서 반복 실행되는 함수는?',
      answer: 'loop',
      explanation: 'loop()는 setup() 이후 계속 반복 실행됩니다.',
      difficulty: 'easy',
      category: 'Arduino',
      type: 'multiple',
      options: [
        { id: 'main', text: 'main()' },
        { id: 'loop', text: 'loop()' },
        { id: 'init', text: 'init()' },
        { id: 'run', text: 'run()' },
      ],
    },
    {
      id: 'arduino-q2',
      question: 'setup()은 일반적으로 보드 시작 시 한 번 실행된다.',
      answer: 'o',
      explanation: '초기화 작업을 위한 함수이므로 주로 시작 시 1회 실행됩니다.',
      difficulty: 'easy',
      category: 'Arduino',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'arduino-q3',
      question: 'LED를 켜기 전 주로 필요한 설정은?',
      answer: 'pinmode',
      explanation: '출력 핀으로 쓸 것이라면 pinMode(pin, OUTPUT) 설정이 먼저 필요합니다.',
      difficulty: 'medium',
      category: 'Arduino',
      type: 'multiple',
      options: [
        { id: 'delay', text: 'delay() 호출' },
        { id: 'pinmode', text: 'pinMode() 설정' },
        { id: 'serial', text: 'Serial.print() 출력' },
        { id: 'analog', text: 'analogRead() 호출' },
      ],
    },
    {
      id: 'arduino-q4',
      question: 'digitalWrite()는 출력 핀의 상태를 바꾸는 데 사용한다.',
      answer: 'o',
      explanation: 'HIGH 또는 LOW를 써서 디지털 출력 상태를 제어합니다.',
      difficulty: 'easy',
      category: 'Arduino',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'arduino-q5',
      question: 'Arduino 학습의 장점으로 가장 적절한 것은?',
      answer: 'fast-prototype',
      explanation:
        '하드웨어 제어를 빠르게 실습해 볼 수 있어 임베디드 입문과 프로토타이핑에 적합합니다.',
      difficulty: 'medium',
      category: '직무 면접 지식',
      type: 'multiple',
      options: [
        { id: 'fast-prototype', text: '센서와 제어를 빠르게 실습할 수 있다' },
        { id: 'database', text: 'DB 튜닝 성능이 자동 향상된다' },
        { id: 'cloud', text: '클라우드 배포가 자동 된다' },
        { id: 'design', text: 'UI 디자인이 자동 생성된다' },
      ],
    },
  ],
}
