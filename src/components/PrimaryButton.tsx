import type { PropsWithChildren } from 'react'

type PrimaryButtonProps = PropsWithChildren<{
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
}>

export const PrimaryButton = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        'w-full rounded-[26px] bg-ink-900 px-5 py-4 text-base font-extrabold text-white shadow-[0_14px_30px_-18px_rgba(24,49,83,0.7)] transition duration-200',
        'enabled:hover:-translate-y-0.5 enabled:hover:bg-ocean-500 enabled:hover:shadow-[0_18px_35px_-18px_rgba(22,119,255,0.7)] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none',
        className,
      ].join(' ')}
    >
      {children}
    </button>
  )
}
