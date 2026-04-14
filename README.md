# 임베디드 학습 웹앱 MVP

듀오링고 스타일의 가볍고 직관적인 임베디드 학습 웹앱입니다.

React + TypeScript + Vite 기반으로 만들었고, 짧은 카드 학습과 5문제 퀴즈, XP, streak, 오답 복습, 학습 기록 저장까지 포함한 실행 가능한 MVP입니다.

## 핵심 목표

- 하루 1회 이상 짧게 임베디드 학습하기
- 개념 요약 후 바로 퀴즈로 복습하기
- XP / streak / 오답 복습으로 습관 만들기
- 임베디드, 펌웨어, 리눅스, 면접 준비까지 자연스럽게 연결하기

## 현재 포함 기능

- 오늘의 학습 추천
- 카드 기반 개념 학습
- 객관식 / OX 퀴즈
- 즉시 정답 / 오답 피드백
- 오답만 다시 풀기
- XP 획득
- 연속 학습 streak
- 최근 학습 기록 저장
- 최근 7일 활동 보드
- 카테고리 필터가 있는 로드맵
- 순차 해금 방식의 학습 경로
- 홈 화면의 보조 추천 세트

## 학습 범위

- MCU 기초
- Arduino
- ATmega
- 센서 / 통신
- 임베디드 C
- 펌웨어
- Raspberry Pi
- 임베디드 리눅스
- 직무 면접 지식

## 기술 스택

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- react-router-dom
- localStorage

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 기본적으로 `http://localhost:5173` 에서 확인할 수 있습니다.

### 검증 명령

```bash
npm run lint
npm run build
```

## 배포 체크리스트

- `npm run lint` 통과
- `npm run build` 통과
- `localStorage` 기반이라 별도 환경 변수 없음
- SPA 라우팅 대응을 위해 `vercel.json` 설정 포함
- 홈 → 학습 → 퀴즈 → 결과 → 기록 흐름 확인
- 로드맵 / 오답 복습 / streak / XP 저장 확인

## Vercel 배포

이 프로젝트는 정적 프론트엔드 앱으로 바로 배포할 수 있습니다.

- Framework: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

`vercel.json`에서 모든 경로를 `index.html`로 연결하도록 설정해, `/roadmap`, `/history`, `/learn/:setId` 같은 라우트에 직접 접속해도 정상 동작합니다.

## 사용자 흐름

1. 홈에서 오늘의 학습 시작
2. 카드 기반으로 핵심 개념 확인
3. 5문제 퀴즈 풀이
4. 즉시 해설 확인
5. 결과 화면에서 XP / streak / 오답 확인
6. 필요하면 오답만 다시 풀기
7. 기록 페이지에서 누적 학습 확인

## 데이터 저장 방식

- Zustand `persist` 미들웨어 사용
- 브라우저 `localStorage` 에 저장
- 저장 항목:
  - 누적 XP
  - streak
  - 오늘 학습 여부
  - 완료한 세트
  - 세트별 오답 큐
  - 최근 학습 히스토리

## 프로젝트 구조

```text
src/
  components/   공통 UI 컴포넌트
  data/         학습 데이터와 타입
  hooks/        today set 같은 간단한 훅
  pages/        홈, 학습, 퀴즈, 결과, 기록, 로드맵
  stores/       Zustand 전역 상태
  utils/        날짜, XP, 계산 유틸
```

## 학습 세트 구성 방식

학습 데이터는 카테고리별 파일로 분리되어 있습니다.

```text
src/data/sets/
  mcuBasicsSet.ts
  arduinoBasicsSet.ts
  atmegaRegistersSet.ts
  sensorCommSet.ts
  embeddedCSet.ts
  firmwareDebugSet.ts
  firmwareInterviewSet.ts
  raspberryPiLinuxSet.ts
  linuxBootSet.ts
  linuxInterviewSet.ts
```

`src/data/learningContent.ts` 에서 전체 세트를 모아서 로드맵, 오늘의 세트, 추천 세트, 순차 해금 계산에 사용합니다.

## MVP에서 의도적으로 제외한 것

- 로그인
- 결제
- 커뮤니티
- AI 자동 생성 학습
- 서버 DB 연동

초기 목표는 작지만 완성된 학습 루프를 만드는 것이므로, 학습 데이터는 정적 코드 기반으로 유지했습니다.

## 다음 확장 아이디어

- 학습 세트 더 추가하기
- 카테고리별 난이도 경로 세분화
- 주간 목표 / 월간 목표
- 문제 수 늘리기
- 서버 저장 및 계정 연동
- 관리자용 콘텐츠 편집 도구

## 현재 상태

- MVP 기능 구현 완료
- `npm run lint` 통과
- `npm run build` 통과
- 실제 로컬 실행 가능
