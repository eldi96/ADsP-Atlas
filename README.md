# ADsP ATLAS

**ADsP 3과목을 마인드맵처럼 탐색하는 개인 학습 교재**

## 🌐 사이트 바로가기

### **[ADsP ATLAS 열기 →](https://eldi96.github.io/ADsP-Atlas/)**

접속 주소: https://eldi96.github.io/ADsP-Atlas/

> 설치 없이 PC·노트북·모바일 브라우저에서 열 수 있습니다. 집과 강의실에서 같은 학습 내용을 사용하려면 각 기기에서 한 번씩 같은 이메일로 인증하세요.

## 주요 기능

- **시각형 마인드맵**: 원형 개념을 클릭하여 하위 주제로 이동
- **개념 정리**: 설명, 예시, 암기 포인트 확인 및 수정
- **개념 추가·연결**: 사용자 학습 항목과 연결 관계 편집
- **클라우드 동기화**: Supabase에 로그인 계정별 데이터 저장
- **오프라인 대비**: 브라우저 임시 저장 및 JSON 백업/복원

## 프로젝트 구성

```text
ADsP-Atlas/
├── index.html        # 화면 구조
├── assets/
│   ├── atlas.css     # 디자인과 반응형 스타일
│   └── atlas.js      # 마인드맵 동작 · 편집 · 클라우드 동기화
└── README.md
```

HTML, CSS, JavaScript를 분리하여 각 파일을 독립적으로 수정할 수 있습니다. 별도 빌드 도구 없이 GitHub Pages에서 배포됩니다.

## 클라우드 동기화 사용법

1. [웹사이트](https://eldi96.github.io/ADsP-Atlas/)를 엽니다.
2. 상단 **클라우드**를 선택하고 이메일 인증 링크로 최초 로그인합니다.
3. 개념을 추가·수정한 뒤 화면의 **자동 동기화 완료** 상태를 확인합니다.
4. 다른 PC에서도 **같은 이메일**로 로그인하면 저장한 내용을 불러올 수 있습니다.

**참고:** 브라우저별 인증은 한 번씩 필요합니다. 세션이 만료되거나 브라우저 데이터를 지우면 다시 로그인해야 할 수 있습니다. 같은 내용을 두 기기에서 동시에 편집할 때는 충돌 선택 화면이 표시될 수 있습니다.

## 관리자 설정

- GitHub Pages: [저장소 배포 설정](https://github.com/eldi96/ADsP-Atlas/settings/pages)에서 `main` · `/(root)` 배포
- Supabase Auth: [URL Configuration](https://supabase.com/dashboard/project/mrljhjtcydjugiirmxxe/auth/url-configuration)에서 다음 사이트 주소와 Redirect URL 등록

```text
https://eldi96.github.io/ADsP-Atlas/
```

- Supabase 데이터베이스: `public.atlas_documents` 테이블에 로그인 사용자별 RLS 정책 적용
- 보안: 공개 웹 클라이언트에 **Publishable key**만 사용. `service_role`, `secret` 키와 데이터베이스 비밀번호는 절대 공개 파일에 넣지 않음

## 기술 스택

HTML · CSS · JavaScript · GitHub Pages · Supabase Auth · Supabase Database
