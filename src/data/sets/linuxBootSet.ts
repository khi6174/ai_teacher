import type { ConceptSet } from '../types'

export const linuxBootSet: ConceptSet = {
  id: 'linux-boot',
  title: '임베디드 리눅스 부팅 흐름',
  subtitle: 'Bootloader에서 User Space까지',
  description:
    '라즈베리 파이와 임베디드 리눅스 면접에서 자주 나오는 부팅 흐름을 짧게 학습합니다.',
  category: '임베디드 리눅스',
  estimatedMinutes: 8,
  cards: [
    {
      id: 'linux-1',
      question: '부팅 초기에 Bootloader가 하는 일은?',
      answer: '커널 이미지와 디바이스 트리 등을 준비하고 커널 실행을 시작합니다.',
      explanation: '하드웨어 초기 설정과 커널 로딩을 연결해 주는 다리 역할을 합니다.',
      difficulty: 'medium',
      category: '임베디드 리눅스',
    },
    {
      id: 'linux-2',
      question: '디바이스 트리는 왜 필요할까?',
      answer: '하드웨어 구성을 커널에 설명해 어떤 장치가 어떻게 연결됐는지 알게 해줍니다.',
      explanation:
        '같은 커널이라도 보드마다 주변장치 구성이 다르기 때문에 별도 정보가 필요합니다.',
      difficulty: 'medium',
      category: 'Raspberry Pi',
    },
    {
      id: 'linux-3',
      question: 'User Space 진입 이후 무엇이 시작될까?',
      answer: 'init/systemd 같은 첫 프로세스가 서비스와 애플리케이션을 순서대로 실행합니다.',
      explanation:
        '이 단계부터는 커널 위에서 실제 사용자 프로그램과 데몬이 동작합니다.',
      difficulty: 'easy',
      category: '임베디드 리눅스',
    },
  ],
  quiz: [
    {
      id: 'linux-q1',
      question: 'Bootloader 다음 단계로 가장 적절한 것은?',
      answer: 'kernel',
      explanation: '일반적으로 Bootloader가 커널 실행을 넘겨줍니다.',
      difficulty: 'easy',
      category: '임베디드 리눅스',
      type: 'multiple',
      options: [
        { id: 'browser', text: '웹 브라우저' },
        { id: 'kernel', text: 'Linux Kernel' },
        { id: 'docker', text: 'Docker daemon' },
        { id: 'database', text: '데이터베이스 엔진' },
      ],
    },
    {
      id: 'linux-q2',
      question: '디바이스 트리는 보드의 하드웨어 구성을 설명하는 데 쓰인다.',
      answer: 'o',
      explanation: '커널이 주변장치를 올바르게 인식하도록 돕습니다.',
      difficulty: 'medium',
      category: 'Raspberry Pi',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'linux-q3',
      question: 'User Space로 들어간 뒤 처음 시작되는 대표 프로세스는?',
      answer: 'init',
      explanation: 'init 또는 systemd가 서비스 시작을 담당합니다.',
      difficulty: 'easy',
      category: '임베디드 리눅스',
      type: 'multiple',
      options: [
        { id: 'shell', text: 'shell script 자체' },
        { id: 'init', text: 'init/systemd' },
        { id: 'gcc', text: 'gcc 컴파일러' },
        { id: 'gpio', text: 'GPIO driver 툴' },
      ],
    },
    {
      id: 'linux-q4',
      question: 'Bootloader는 커널 없이도 모든 사용자 앱을 직접 실행한다.',
      answer: 'x',
      explanation: 'Bootloader의 주 역할은 커널을 로드하고 실행을 넘기는 것입니다.',
      difficulty: 'medium',
      category: '임베디드 리눅스',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'linux-q5',
      question: '면접에서 부팅 흐름 설명 시 강조하면 좋은 포인트는?',
      answer: 'sequence',
      explanation:
        'Bootloader, Kernel, Device Tree, init 순의 역할과 연결을 설명하면 이해도가 잘 드러납니다.',
      difficulty: 'hard',
      category: '직무 면접 지식',
      type: 'multiple',
      options: [
        { id: 'sequence', text: '단계별 역할과 연결 순서' },
        { id: 'design', text: '앱 색상 조합' },
        { id: 'sales', text: '영업 전략' },
        { id: 'seo', text: '검색 엔진 최적화' },
      ],
    },
  ],
}
