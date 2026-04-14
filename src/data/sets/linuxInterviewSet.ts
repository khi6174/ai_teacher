import type { ConceptSet } from '../types'

export const linuxInterviewSet: ConceptSet = {
  id: 'linux-interview',
  title: '임베디드 리눅스 면접 기초',
  subtitle: '부팅, 프로세스, 서비스 질문 대비하기',
  description:
    '임베디드 리눅스 면접에서 자주 나오는 핵심 질문을 짧게 정리하고 답변 포인트를 익힙니다.',
  category: '직무 면접 지식',
  estimatedMinutes: 7,
  cards: [
    {
      id: 'lxi-1',
      question: '부팅 과정을 설명하라는 질문에는 어떻게 답할까?',
      answer: 'Bootloader, Kernel, Device Tree, init/systemd, User Space 순서로 핵심 역할을 짧게 설명하면 좋습니다.',
      explanation:
        '순서와 역할을 함께 말해야 면접관이 전체 흐름을 이해하고 있다고 느낍니다.',
      difficulty: 'medium',
      category: '직무 면접 지식',
    },
    {
      id: 'lxi-2',
      question: '프로세스와 스레드 차이는 어떻게 정리할까?',
      answer: '프로세스는 독립 자원을 가진 실행 단위이고, 스레드는 같은 프로세스 자원을 공유하는 실행 흐름이라고 설명할 수 있습니다.',
      explanation:
        '메모리 공유 여부와 문맥 전환 비용 차이를 간단히 덧붙이면 더 좋습니다.',
      difficulty: 'medium',
      category: '직무 면접 지식',
    },
    {
      id: 'lxi-3',
      question: '서비스 자동 실행 경험은 왜 중요할까?',
      answer: '실제 제품은 부팅 후 특정 기능이 자동으로 살아나야 하므로 systemd 서비스 경험이 실무성과 연결됩니다.',
      explanation:
        '단순 명령 사용보다 운영 관점에서 설명하면 더 좋은 인상을 줄 수 있습니다.',
      difficulty: 'easy',
      category: '직무 면접 지식',
    },
  ],
  quiz: [
    {
      id: 'lxi-q1',
      question: '부팅 흐름 설명의 기본 순서로 가장 적절한 것은?',
      answer: 'boot-seq',
      explanation: 'Bootloader에서 시작해 Kernel, init/systemd, User Space로 이어지는 흐름이 핵심입니다.',
      difficulty: 'medium',
      category: '직무 면접 지식',
      type: 'multiple',
      options: [
        { id: 'boot-seq', text: 'Bootloader → Kernel → init/systemd → User Space' },
        { id: 'app-first', text: 'App → Browser → Kernel → Bootloader' },
        { id: 'db-first', text: 'Database → Shell → Kernel' },
        { id: 'random', text: '순서 없이 키워드만 나열하기' },
      ],
    },
    {
      id: 'lxi-q2',
      question: '프로세스와 스레드 차이를 설명할 때 자원 공유 여부는 중요한 포인트다.',
      answer: 'o',
      explanation: '같은 프로세스 내 스레드는 자원을 공유한다는 점이 핵심입니다.',
      difficulty: 'medium',
      category: '직무 면접 지식',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'lxi-q3',
      question: 'systemd 서비스 경험을 말할 때 강조하면 좋은 것은?',
      answer: 'operation',
      explanation: '부팅 후 자동 실행과 운영 관리 관점이 실무 연결 포인트입니다.',
      difficulty: 'easy',
      category: '직무 면접 지식',
      type: 'multiple',
      options: [
        { id: 'operation', text: '부팅 후 자동 실행과 운영 관리 경험' },
        { id: 'color', text: '서비스 파일 색상' },
        { id: 'design', text: 'UI 디자인 구조' },
        { id: 'billing', text: '결제 정책' },
      ],
    },
    {
      id: 'lxi-q4',
      question: '부팅 과정 설명에서는 각 단계의 역할까지 같이 말하는 것이 좋다.',
      answer: 'o',
      explanation: '단계 이름만 나열하는 것보다 역할 설명이 훨씬 중요합니다.',
      difficulty: 'medium',
      category: '직무 면접 지식',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'lxi-q5',
      question: '임베디드 리눅스 면접에서 좋은 답변의 특징은?',
      answer: 'practical-linux',
      explanation:
        '키워드 암기보다 실제 사용 경험과 단계별 역할을 연결해 설명하는 답변이 더 설득력 있습니다.',
      difficulty: 'hard',
      category: '직무 면접 지식',
      type: 'multiple',
      options: [
        { id: 'practical-linux', text: '실제 경험과 시스템 흐름을 연결해 설명하기' },
        { id: 'memorize', text: '정의만 외워서 말하기' },
        { id: 'avoid', text: '모르는 건 무조건 회피하기' },
        { id: 'frontend', text: '프론트엔드 용어로만 설명하기' },
      ],
    },
  ],
}
