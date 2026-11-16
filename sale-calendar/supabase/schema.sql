-- 로맨티누어 세일 캘린더 · Supabase 스키마 (SQL Editor에 붙여 넣어 실행)
create table if not exists public.events (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.events enable row level security;
-- 누구나 읽기, 로그인한 사용자만 쓰기
create policy "events read" on public.events for select using (true);
create policy "events write" on public.events for insert to authenticated with check (true);
create policy "events update" on public.events for update to authenticated using (true) with check (true);
create policy "events delete" on public.events for delete to authenticated using (true);
-- 실시간 반영
alter publication supabase_realtime add table public.events;
