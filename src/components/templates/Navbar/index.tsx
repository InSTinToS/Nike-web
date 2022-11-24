import Arrow from '@components/icons/Arrow'
import Bag from '@components/icons/Bag'
import Hamburger from '@components/icons/Hamburger'
import Logo from '@components/icons/Logo'
import Loupe from '@components/icons/Loupe'
import SimpleSlider, {
  ISliderForward
} from '@components/molecules/SimpleSlider'
import { ReactNode, useRef } from 'react'

const SliderItem = () => (
  <li className='flex flex-1 px-2 justify-center items-center' key='0'>
    <img
      className='h-8'
      alt='caixa da Nike'
      src='https://static.nike.com.br/v10-27-0/images/pitchbar/free-shipping.png'
    />

    <p className='pl-4 text-center'>
      <strong>FRETE GRÁTIS 2: </strong>
      acima de R$ 69,90 para todo o Brasil.
    </p>
  </li>
)

const items: ReactNode[] = [<SliderItem />, <SliderItem />]

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
        <ul className='flex items-center'>
          <button
            type='button'
            onClick={() => {
              sliderRef.current?.onLeftClick()
            }}
          >
            <Arrow className='h-6 w-6' />
          </button>

          <SimpleSlider
            ref={sliderRef}
            items={items}
            motionProps={{ className: 'flex-1' }}
          />

          <Arrow
            className='h-6 w-6 rotate-180'
            onClick={() => {
              sliderRef.current?.onRightClick()
            }}
          />
        </ul>
      </footer>
    </nav>
  )
}
