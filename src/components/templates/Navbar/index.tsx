import Content from './Content'
import Footer from './Footer'

import Jordan from '@src/components/icons/Jordan'
import SNKRS from '@src/components/icons/SNKRS'

export default function Navbar() {
  return (
    <nav className='sticky top-0 bg-white w-full shadow-md'>
      <header className='hidden lg:bg-gray-100 lg:px-4 lg:flex lg:items-center lg:justify-between lg:py-1'>
        <button className='flex flex-row items-center'>
          <Jordan className='h-6 w-6 mr-2' />

          <SNKRS className='h-8 w-10' />
        </button>

        <ul className='flex flex-row items-center'>
          <li className='px-4 border-r-[1px] border-r-black font-thin text-sm'>
            <a href=''>Ajuda</a>
          </li>

          <li className='px-4 border-r-[1px] border-r-black font-thin text-sm'>
            <a href=''>Junte-se a nós</a>
          </li>

          <li className='px-4 font-thin text-sm'>
            <a href=''>Entrar</a>
          </li>
        </ul>
      </header>

      <Content />

      <Footer />
    </nav>
  )
}
