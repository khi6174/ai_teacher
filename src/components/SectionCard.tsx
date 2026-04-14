import type { PropsWithChildren } from 'react'

type SectionCardProps = PropsWithChildren<{
  className?: string
}>

export const SectionCard = ({ children, className = '' }: SectionCardProps) => {
  return (
    <section
      className={`rounded-[30px] border border-white/80 bg-white/88 p-5 shadow-[0_18px_45px_-28px_rgba(24,49,83,0.28)] backdrop-blur ${className}`}
    >
      {children}
    </section>
  )
}
