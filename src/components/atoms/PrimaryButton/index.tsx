import Button from '../Button'

import { TButtonProps } from '@src/types/react.types'

export default function PrimaryButton({
  children,
  className,
  ...props
}: TButtonProps) {
  return (
    <Button
      className={`bg-black text-white rounded-3xl px-5 py-3 ${className}`}
      {...props}
    >
      {children}
    </Button>
  )
}
