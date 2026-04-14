import type { ConceptSet } from '../types'

export const raspberryPiLinuxSet: ConceptSet = {
  id: 'raspberrypi-linux',
  title: 'Raspberry Pi와 리눅스 활용',
  subtitle: 'GPIO, 패키지, 서비스 실행 감각 익히기',
  description:
    'Raspberry Pi를 임베디드 리눅스 학습 보드로 활용할 때 자주 만나는 기본 개념을 짧게 익힙니다.',
  category: 'Raspberry Pi',
  estimatedMinutes: 8,
  cards: [
    {
      id: 'rpi-1',
      question: 'Raspberry Pi가 임베디드 학습에 자주 쓰이는 이유는?',
      answer: '리눅스 환경과 GPIO 제어를 함께 다뤄 볼 수 있어 학습 진입이 쉽기 때문입니다.',
      explanation:
        '보드 접근성이 좋고 자료가 많아 임베디드 리눅스와 하드웨어 제어를 함께 익히기 좋습니다.',
      difficulty: 'easy',
      category: 'Raspberry Pi',
    },
    {
      id: 'rpi-2',
      question: 'systemd 서비스 등록의 의미는?',
      answer: '부팅 후 특정 프로그램이나 스크립트를 자동으로 실행하고 관리하는 것입니다.',
      explanation:
        '라즈베리 파이에서 센서 수집 프로그램을 부팅 시 자동 시작하게 만들 때 자주 사용합니다.',
      difficulty: 'medium',
      category: '임베디드 리눅스',
    },
    {
      id: 'rpi-3',
      question: '패키지 관리가 중요한 이유는?',
      answer: '필요한 라이브러리와 도구를 일관되게 설치하고 유지하기 위해서입니다.',
      explanation:
        '리눅스 환경에서는 의존성 관리와 업데이트 흐름을 이해하는 것이 실무에서도 중요합니다.',
      difficulty: 'medium',
      category: 'Raspberry Pi',
    },
  ],
  quiz: [
    {
      id: 'rpi-q1',
      question: '부팅 후 프로그램을 자동 실행하도록 관리하는 대표 기능은?',
      answer: 'systemd',
      explanation: 'systemd 서비스로 등록하면 시작/중지/재시작까지 관리할 수 있습니다.',
      difficulty: 'medium',
      category: '임베디드 리눅스',
      type: 'multiple',
      options: [
        { id: 'systemd', text: 'systemd service' },
        { id: 'gpio', text: 'GPIO header' },
        { id: 'flash', text: 'Flash memory' },
        { id: 'uart', text: 'UART cable' },
      ],
    },
    {
      id: 'rpi-q2',
      question: 'Raspberry Pi는 리눅스와 GPIO 제어를 함께 학습하기에 적합하다.',
      answer: 'o',
      explanation: '이 두 영역을 함께 다뤄 볼 수 있다는 점이 큰 장점입니다.',
      difficulty: 'easy',
      category: 'Raspberry Pi',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'rpi-q3',
      question: '패키지 관리의 목적과 가장 가까운 것은?',
      answer: 'dependency',
      explanation: '필요한 도구와 의존성을 일관되게 설치하고 유지하는 것이 핵심입니다.',
      difficulty: 'medium',
      category: 'Raspberry Pi',
      type: 'multiple',
      options: [
        { id: 'dependency', text: '도구와 의존성을 일관되게 관리하기' },
        { id: 'battery', text: '배터리 용량 늘리기' },
        { id: 'screen', text: '화면 해상도 높이기' },
        { id: 'design', text: '시각 디자인 변경하기' },
      ],
    },
    {
      id: 'rpi-q4',
      question: 'systemd는 서비스 자동 시작과 상태 관리를 돕는다.',
      answer: 'o',
      explanation: '실행, 중지, 재시작 같은 서비스 관리에 쓰입니다.',
      difficulty: 'medium',
      category: '임베디드 리눅스',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'rpi-q5',
      question: 'Raspberry Pi 학습 경험을 면접에서 설명할 때 좋은 포인트는?',
      answer: 'practical',
      explanation:
        'GPIO 제어, 리눅스 명령어, 서비스 실행 같은 실제 사용 경험을 함께 설명하면 좋습니다.',
      difficulty: 'hard',
      category: '직무 면접 지식',
      type: 'multiple',
      options: [
        { id: 'practical', text: '실제 보드에서 실행한 경험을 구조적으로 설명하기' },
        { id: 'luck', text: '운 좋게 됐다고 말하기' },
        { id: 'ignore', text: '리눅스 부분은 생략하기' },
        { id: 'frontend', text: '프론트엔드 색상만 설명하기' },
      ],
    },
  ],
}
