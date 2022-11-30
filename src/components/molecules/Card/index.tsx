export default function Card() {
  return (
    <section className='my-4'>
      <img src='/chuteira.webp' alt='' />

      <footer className='flex flex-col items-center justify-center px-4 py-2 text-center'>
        <div>Chuteira Nike Phantom GT2 Academy Society</div>

        <div className='text-green-500'>
          <span className='text-red-500 line-through mr-2'>R$ 799,99</span>
          <strong>R$ 499,99</strong>
        </div>
      </footer>
    </section>
  )
}
