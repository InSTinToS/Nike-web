'use client'

import FilteredButton from '@src/components/atoms/FilteredButton'

import Card from '@src/components/molecules/Card'

import { useShoes } from '@src/hooks/useShoes'

export default function Shoes() {
  const { error, isLoading, data: shoes } = useShoes()

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error

  return (
    <>
      <header>
        <div className='flex flex-row flex-wrap justify-center items-center w-full max-w-7xl mx-auto p-2'>
          <FilteredButton>Calçados</FilteredButton>

          <FilteredButton>Para adulto</FilteredButton>

          <FilteredButton>Masculino</FilteredButton>

          <FilteredButton>Black Friday</FilteredButton>

          <span className='m-2'>667 resultados</span>
        </div>
      </header>

      <aside className='hidden'></aside>

      <main className='grid grid-cols-1 md:px-4 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {shoes?.map(shoe => (
          <Card key={shoe.id} data={shoe} />
        ))}
      </main>
    </>
  )
}
