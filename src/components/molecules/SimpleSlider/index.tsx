import {
  ISimpleSliderForward,
  ISimpleSliderProps,
  SimpleSlider as OriginalSimpleSlider
} from 'instintos-library'
import { forwardRef } from 'react'

const SimpleSlider = forwardRef<ISimpleSliderForward, ISimpleSliderProps>(
  ({ ...props }, ref) => <OriginalSimpleSlider {...props} ref={ref} />
)

SimpleSlider.displayName = 'SimpleSlider'

export default SimpleSlider

export type { ISimpleSliderForward }
