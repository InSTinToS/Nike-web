import FilteredButton from '@src/components/atoms/FilteredButton'

import Card from '@src/components/molecules/Card'

export default function Shoes() {
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

      <main>
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </>
  )
}
