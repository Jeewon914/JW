# 로맨티누어 세일 캘린더

플랫폼별 기획전·세일 일정을 한 달력에 모은 정적 웹앱입니다. 폰 홈 화면에 추가해 앱처럼 쓸 수 있습니다.

- `index.html` — 캘린더 페이지 (월간 / 세로 / 목록 보기)
- `events.json` — 행사 데이터 (Supabase 미연결 시 이 파일을 읽음, 읽기 전용)
- `config.js` — Supabase URL·anon key를 넣으면 폰에서 직접 추가·수정 가능
- `supabase/schema.sql`, `supabase/seed.sql` — Supabase 테이블·권한·초기 데이터

## Supabase 연결 (선택)
1. supabase.com 에서 프로젝트 생성 → SQL Editor에서 `supabase/schema.sql` 실행, 이어서 `supabase/seed.sql` 실행
2. Authentication → Providers → Email 활성화 (매직 링크 로그인)
3. Settings → API 의 Project URL / anon key 를 `config.js`에 입력 후 커밋
