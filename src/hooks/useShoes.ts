import { apiUrl, authHeader } from '@src/services/api'

import { IProduct } from '@src/types/api.types'

import { useQuery } from 'react-query'

const getShoes = async (): Promise<IProduct[]> => {
  const res = await fetch(`${apiUrl}/api/shoes?populate=*`, authHeader)

  const data = (await res.json()).data

  const formattedProducts: IProduct[] = data.map((product: any) => ({
    id: product.id,
    name: product.attributes.name,
    price: product.attributes.price,
    discount: product.attributes.discount,
    image: `${apiUrl}${product.attributes.image.data.attributes.formats.medium.url}`
  }))

  return formattedProducts
}

export const useShoes = () => {
  const query = useQuery('get-shoes', getShoes)

  return query
}
