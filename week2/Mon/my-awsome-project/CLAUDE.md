# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

"my-awsome-project"는 클로드 코드 책 실습용 최소 Node.js 프로젝트입니다. `npm init`으로 생성된 기본 `package.json`만 존재하며, 소스 코드·의존성·프레임워크는 아직 없습니다.

## 현재 상태

- **프로젝트 타입**: Node.js (최소 설정, 엔트리 포인트 `index.js`는 아직 미생성)
- **패키지 매니저**: npm
- **의존성**: 없음
- **테스트**: `npm test`는 플레이스홀더로, 항상 오류로 종료됨

## 개발 명령어

```bash
# 의존성 설치 (패키지 추가 시)
npm install

# 테스트 실행 (현재 플레이스홀더 — 항상 실패)
npm test
```

## Git 워크플로우

- 이 디렉토리는 자체 저장소가 아니라 상위 `_Book_Claude-Code` 저장소의 일부입니다 (저장소 루트: `week2/Mon/my-awsome-project`의 세 단계 상위).
- 기본 브랜치는 `main`입니다.
- 커밋 시 저장소 루트 기준으로 다른 실습 디렉토리의 변경 사항이 섞이지 않도록 이 디렉토리 경로만 스테이징하세요.

## 개발 다음 단계

프로젝트에 코드가 추가되면 이 파일을 다음 내용으로 갱신하세요:

- 선택한 프레임워크의 실행·빌드 명령어
- 실제 테스트 프레임워크 설정 후의 테스트 실행 방법 (단일 테스트 실행 포함)
- 디렉토리 구조와 아키텍처 설명
