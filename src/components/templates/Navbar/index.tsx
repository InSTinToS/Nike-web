'use client'

import ArrowButton from '@src/components/atoms/ArrowButton'
import Arrow from '@src/components/icons/Arrow'

import Bag from '@src/components/icons/Bag'
import Hamburger from '@src/components/icons/Hamburger'
import Logo from '@src/components/icons/Logo'
import Loupe from '@src/components/icons/Loupe'
import SimpleSlider, {
  ISliderForward
} from '@src/components/molecules/SimpleSlider'
import { ReactNode, useRef } from 'react'
import SliderItem from './SliderItem'

const items: ReactNode[] = [
  <SliderItem
    alt='caixa da Nike'
    bold='FRETE GRÁTIS 2:'
    text='acima de R$ 69,90 para todo o Brasil.'
    src='https://static.nike.com.br/v10-27-0/images/pitchbar/free-shipping.png'
  />,
  <SliderItem alt='' bold='' src='' text='' />
]

export default function Navbar() {
  const sliderRef = useRef<ISliderForward>(null)

  return (
    <nav className='flex flex-col'>
      <header className='flex py-2 px-4 items-center justify-between'>
        <Logo className='h-10 w-10 mr-auto' />

        <Bag className='h-6 w-6' />

        <Hamburger className='h-6 w-6 ml-4' />
      </header>

      <form className='relative flex mb-4'>
        <Loupe className='absolute -translate-y-1/2 h-6 w-6 mx-4  left-2 top-1/2' />

        <input
          type='text'
          placeholder='Buscar'
          className='flex-1 pl-10 h-10 flex mx-4 items-center border-2 bg-gray-200 rounded-3xl'
        />
      </form>

      <footer className='py-2 bg-gray-100 sm:px-4'>
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
    </nav>
  )
}
