import type { ConceptSet } from '../types'

export const sensorCommSet: ConceptSet = {
  id: 'sensor-comm',
  title: '센서와 통신 기초',
  subtitle: 'UART, I2C, SPI 차이를 빠르게 정리하기',
  description:
    '센서 연결과 통신 인터페이스의 차이를 이해해 임베디드 프로젝트의 기본 연결 감각을 잡습니다.',
  category: '센서 / 통신',
  estimatedMinutes: 7,
  cards: [
    {
      id: 'sensor-1',
      question: 'UART의 특징은 무엇일까?',
      answer: 'TX, RX 선을 이용해 비동기식으로 직렬 데이터를 주고받는 방식입니다.',
      explanation:
        '디버깅 로그 출력이나 간단한 모듈 통신에 자주 쓰이며, baudrate 설정이 중요합니다.',
      difficulty: 'easy',
      category: '센서 / 통신',
    },
    {
      id: 'sensor-2',
      question: 'I2C는 왜 센서 연결에 자주 쓰일까?',
      answer: 'SDA, SCL 두 선으로 여러 장치를 주소 기반으로 연결할 수 있기 때문입니다.',
      explanation:
        '배선 수가 적고 센서 모듈이 많아 작은 보드 프로젝트에서 특히 편리합니다.',
      difficulty: 'medium',
      category: '센서 / 통신',
    },
    {
      id: 'sensor-3',
      question: 'SPI는 어떤 상황에 유리할까?',
      answer: '상대적으로 빠른 통신이 필요하고 마스터-슬레이브 연결이 명확할 때 유리합니다.',
      explanation:
        'CS, SCLK, MOSI, MISO 선을 사용하며 속도가 중요한 디스플레이나 메모리 장치에 자주 쓰입니다.',
      difficulty: 'medium',
      category: '센서 / 통신',
    },
  ],
  quiz: [
    {
      id: 'sensor-q1',
      question: '두 선만으로 여러 장치를 주소 기반으로 연결하는 통신은?',
      answer: 'i2c',
      explanation: 'I2C는 SDA, SCL 두 선으로 여러 장치를 연결할 수 있습니다.',
      difficulty: 'medium',
      category: '센서 / 통신',
      type: 'multiple',
      options: [
        { id: 'uart', text: 'UART' },
        { id: 'i2c', text: 'I2C' },
        { id: 'spi', text: 'SPI' },
        { id: 'can', text: 'CAN' },
      ],
    },
    {
      id: 'sensor-q2',
      question: 'UART는 일반적으로 TX/RX 라인을 사용하는 직렬 통신이다.',
      answer: 'o',
      explanation: 'TX와 RX는 UART 통신의 핵심 선입니다.',
      difficulty: 'easy',
      category: '센서 / 통신',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'sensor-q3',
      question: '속도가 중요하고 별도 CS 라인을 쓰는 통신은?',
      answer: 'spi',
      explanation: 'SPI는 빠른 통신 속도와 명확한 장치 선택 방식이 특징입니다.',
      difficulty: 'medium',
      category: '센서 / 통신',
      type: 'multiple',
      options: [
        { id: 'gpio', text: 'GPIO' },
        { id: 'spi', text: 'SPI' },
        { id: 'adc', text: 'ADC' },
        { id: 'pwm', text: 'PWM' },
      ],
    },
    {
      id: 'sensor-q4',
      question: 'I2C는 장치마다 고유 주소를 이용해 통신 대상을 구분할 수 있다.',
      answer: 'o',
      explanation: '여러 슬레이브를 주소로 구분하는 것이 I2C의 핵심입니다.',
      difficulty: 'medium',
      category: '센서 / 통신',
      type: 'ox',
      options: [
        { id: 'o', text: 'O' },
        { id: 'x', text: 'X' },
      ],
    },
    {
      id: 'sensor-q5',
      question: '센서 통신 학습이 중요한 이유는?',
      answer: 'integration',
      explanation:
        '실제 임베디드 프로젝트는 센서 데이터를 읽고 다른 장치와 연결하는 작업이 매우 많기 때문입니다.',
      difficulty: 'medium',
      category: '펌웨어',
      type: 'multiple',
      options: [
        { id: 'integration', text: '하드웨어 연동의 핵심이기 때문이다' },
        { id: 'seo', text: '검색 엔진 최적화에 유리해서' },
        { id: 'design', text: '디자인 시스템을 만들기 위해서' },
        { id: 'billing', text: '결제 로직을 구현하기 위해서' },
      ],
    },
  ],
}
