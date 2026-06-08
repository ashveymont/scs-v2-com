create table applications (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  status text default 'received',

  -- Identity
  full_name text not null,
  email text not null,
  city text not null,
  linkedin text not null,
  referred_by text,

  -- Chess
  chess_experience text not null,
  chess_rating text,
  chess_description text not null,

  -- Professional
  role text not null,
  company text not null,
  industry text not null,
  years_experience text not null,
  built_or_operate text not null,

  -- Essay
  why_belong text not null,
  significant_decision text not null,

  -- References
  ref1_name text not null,
  ref1_role text not null,
  ref1_company text not null,
  ref1_email text not null,
  ref2_name text not null,
  ref2_role text not null,
  ref2_company text not null,
  ref2_email text not null
);

-- Enable RLS
alter table applications enable row level security;

-- Allow inserts from anon (the form)
create policy "Allow application inserts"
on applications for insert
to anon
with check (true);

-- Only authenticated users can read
create policy "Allow authenticated reads"
on applications for select
to authenticated
using (true);
