'use client'

import Button from '@src/components/atoms/Button'
import Link from '@src/components/atoms/Link'
import Search from '@src/components/atoms/Search'

import Bag from '@src/components/icons/Bag'
import Filter from '@src/components/icons/Filter'
import Hamburger from '@src/components/icons/Hamburger'
import Logo from '@src/components/icons/Logo'

import { usePathname } from 'next/navigation'

const navList = [
  'Seleçoes',
  'Lançamentos',
  'Feminino',
  'Masculino',
  'Infantil',
  'SNKRS',
  'Ícones'
]

const NavItem = ({ item }: { item: string }) => (
  <li
    className='
      lg:border-b-2 
      lg:border-b-transparent 
      lg:items-center 
      lg:justify-centers 
      lg:flex                  
      lg:px-4 
      lg:h-20
      hover:border-b-black
    '
  >
    <Link href='/shoes'>{item}</Link>
  </li>
)

export default function Content() {
  const pathname = usePathname()

  return (
    <section className='flex flex-row flex-wrap pt-2 pb-4 px-4 max-w-7xl mx-auto lg:justify-between'>
      <Link href='/'>
        <Logo className='h-10 w-10 lg:h-20 lg:w-20' />
      </Link>

      <ul className='hidden lg:flex lg:items-center lg:justify-center'>
        {navList.map(item => (
          <NavItem key={item} item={item} />
        ))}
      </ul>

      <Button className='ml-auto flex items-center justify-center lg:hidden'>
        <Bag className='h-6 w-6' />
      </Button>

      <Button className='flex items-center justify-center'>
        <Hamburger className='h-6 w-6 ml-4 lg:hidden' />
      </Button>

      <div className='flex w-full lg:flex-1 lg:mx-4 lg:max-w-[250px] mt-2'>
        <Search className='' />

        {pathname?.includes('shoes') && (
          <Button className='ml-4 lg:ml-0 lg:hidden'>
            <Filter className='h-6 w-6' />
          </Button>
        )}
      </div>

      <Button className='hidden lg:flex lg:items-center lg:justify-center'>
        <Bag className='h-6 w-6' />
      </Button>
    </section>
  )
}
