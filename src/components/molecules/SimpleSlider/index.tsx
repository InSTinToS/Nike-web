'use client'

import {
  ISimpleSliderProps,
  SimpleSlider as OriginalSimpleSlider
} from 'instintos-library'

const SimpleSlider = ({ ...props }: ISimpleSliderProps) => (
  <OriginalSimpleSlider {...props} />
)

export default SimpleSlider
