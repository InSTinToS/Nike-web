import { IProduct } from '@src/types/api.types'

import { formatToMoney } from '@src/utils/formatToMoney'

interface ICardProps {
  data: IProduct
}

export default function Card({
  data: { image, discount, name, price }
}: ICardProps) {
  return (
    <section className=''>
      <img src={image} alt='' className='rounded-md' />

      <footer className='flex flex-col items-center justify-center px-4 py-2 text-center'>
        <div>{name}</div>

        <div className='text-green-500'>
          {discount ? (
            <>
              <span className='text-red-500 line-through mr-2'>
                R$ {formatToMoney(price)}
              </span>
              <strong>R$ {formatToMoney(discount)}</strong>
            </>
          ) : (
            <span>R$ {formatToMoney(price)}</span>
          )}
        </div>
      </footer>
    </section>
  )
}
