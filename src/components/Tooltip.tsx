import * as ToolTip from '@radix-ui/react-tooltip'

interface TooltipProps {
  children: React.ReactNode
  text: string
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  return (
    <ToolTip.Provider>
      <ToolTip.Root>
        <ToolTip.Trigger asChild>
          <span className='cursor-pointer'>{children}</span>
        </ToolTip.Trigger>
        <ToolTip.Portal>
          <ToolTip.Content
            className='data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade shadow-[hsl(206_22%_7%_/_35%) _0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] z-50 select-none rounded-[4px] border border-neutral-800 bg-neutral-900 px-[12px] py-[8px] text-[13px] leading-none text-neutral-200 will-change-[transform,opacity]'
            sideOffset={5}
          >
            {text}
          </ToolTip.Content>
        </ToolTip.Portal>
      </ToolTip.Root>
    </ToolTip.Provider>
  )
}

export default Tooltip
