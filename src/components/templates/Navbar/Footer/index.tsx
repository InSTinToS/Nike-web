'use client'

import SliderItem from './SliderItem'

import ArrowButton from '@src/components/atoms/ArrowButton'

import Arrow from '@src/components/icons/Arrow'

import SimpleSlider, {
  ISimpleSliderForward
} from '@src/components/molecules/SimpleSlider'

import { ReactNode, useRef } from 'react'

const items: ReactNode[] = [
  <SliderItem
    key='1'
    alt='caixa da Nike'
    bold='FRETE GRÁTIS 1:'
    text='acima de R$ 69,90 para todo o Brasil.'
    src='https://static.nike.com.br/v10-27-0/images/pitchbar/free-shipping.png'
  />,
  <SliderItem
    key='2'
    alt='caixa da Nike'
    bold='FRETE GRÁTIS 2:'
    text='acima de R$ 69,90 para todo o Brasil.'
    src='https://static.nike.com.br/v10-27-0/images/pitchbar/free-shipping.png'
  />
]

export default function Footer() {
  const sliderRef = useRef<ISimpleSliderForward>(null)

  return (
    <footer className='py-2 w-screen bg-gray-100 px-2 sm:py-4'>
      <ul className='flex items-center overflow-x-hidden'>
        <SimpleSlider
          items={items}
          ref={sliderRef}
          liProps={{
            className: 'flex flex-1 px-2 justify-center items-center'
          }}
          leftButton={
            <ArrowButton
              Arrow={Arrow}
              arrowProps={{ className: 'h-6 w-6' }}
              direction='left'
              onClick={() => {
                sliderRef.current?.onLeftClick()
              }}
            />
          }
          rightButton={
            <ArrowButton
              Arrow={Arrow}
              arrowProps={{ className: 'h-6 w-6' }}
              direction='right'
              onClick={() => {
                sliderRef.current?.onRightClick()
              }}
            />
          }
        />
      </ul>
    </footer>
  )
}
