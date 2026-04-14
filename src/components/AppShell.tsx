import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: '홈' },
  { to: '/roadmap', label: '로드맵' },
  { to: '/history', label: '기록' },
]

export const AppShell = () => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 pb-24 pt-6 text-ink-900 sm:max-w-lg">
      <header className="mb-6 flex items-center justify-between rounded-[28px] border border-white/60 bg-white/55 px-4 py-4 shadow-[0_14px_35px_-28px_rgba(24,49,83,0.45)] backdrop-blur">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-ocean-500 uppercase">
            Embedded Sprint
          </p>
          <h1 className="mt-2 text-2xl font-extrabold">매일 10분 임베디드</h1>
        </div>
        <div className="rounded-full border border-white/70 bg-white/80 px-3 py-2 text-xs font-semibold shadow-sm backdrop-blur">
          가볍게, 꾸준히
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <nav className="fixed inset-x-0 bottom-4 mx-auto flex w-[calc(100%-2rem)] max-w-md items-center justify-center gap-2 rounded-full border border-white/80 bg-white/92 p-2 shadow-[0_20px_40px_-24px_rgba(24,49,83,0.35)] backdrop-blur">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              [
                'flex-1 rounded-full px-4 py-3 text-center text-sm font-semibold transition',
                isActive
                  ? 'bg-ocean-500 text-white shadow-sm'
                  : 'text-slate-500 hover:bg-cream-100',
              ].join(' ')
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
