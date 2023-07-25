import { ComponentProps, ReactNode } from 'react'

interface BubbleButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function BubbleButton(props: BubbleButtonProps) {
  return (
    <button
      className="flex items-center gap-1 p-2 text-sm leading-none text-zinc-700 hover:bg-zinc-100 data-[active=true]:text-violet-400"
      {...props}
    />
  )
}
