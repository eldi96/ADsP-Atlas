# ADsP ATLAS

ADsP 3과목(데이터 이해 · 데이터분석 기획 · 데이터분석)을 시각적으로 탐색하는 개인 학습용 마인드맵입니다.

## 실행
GitHub Pages: https://eldi96.github.io/ADsP-Atlas/

- 원형 개념을 클릭해 하위 내용을 확인
- 노드와 설명 추가·수정, 개념 간 연결
- 기기별 임시 저장 및 Supabase 계정별 클라우드 동기화
- JSON 내보내기/불러오기

## 최초 배포 설정(저장소 관리자)
1. [Settings → Pages](https://github.com/eldi96/ADsP-Atlas/settings/pages)에서 **Deploy from a branch**, **main**, **/(root)** 선택 후 **Save**
2. [Supabase Authentication → URL Configuration](https://supabase.com/dashboard/project/mrljhjtcydjugiirmxxe/auth/url-configuration)에서 아래 설정
   - Site URL: `https://eldi96.github.io/ADsP-Atlas/`
   - Redirect URLs에 `https://eldi96.github.io/ADsP-Atlas/` 추가
3. 사이트 상단 **클라우드** 메뉴에서 이메일 인증을 한 번 수행. 집·강의실 컴퓨터에서 각각 같은 이메일로 인증하면 동일한 개인 데이터를 사용합니다.

> 사용자의 학습 내용은 로그인된 계정의 데이터로 분리되며, public.atlas_documents 테이블에 사용자별 RLS가 적용되어 있습니다. 단, 클라우드 저장 성공 상태가 표시되는지 확인한 뒤 기기를 옮기세요.

## 기술
- GitHub Pages: 정적 HTML 배포
- Supabase Auth: 이메일 링크 인증 및 세션 유지
- Supabase Database: 개인별 학습 데이터, RLS
- 일반 브라우저 로컬 저장: 오프라인/동기화 대기
- 주의: `service_role`이나 `secret` 키를 공개 파일에 넣지 마세요.
