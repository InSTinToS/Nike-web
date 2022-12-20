import { apiUrl, authHeader } from '@src/services/api'

import { IBanner } from '@src/types/api.types'

import { useQuery } from 'react-query'

const getBanners = async (): Promise<IBanner[]> => {
  const res = await fetch(`${apiUrl}/api/banners?populate=*`, authHeader)

  const data = (await res.json()).data

  console.log(data)

  const formatted: IBanner[] = data.map((banner: any) => ({
    id: banner.id,
    bold: banner.attributes.bold,
    title: banner.attributes.title,
    buttons: banner.attributes.buttons,
    description: banner.attributes.description,
    media: banner.attributes.media.data.map((media: any) => ({
      id: media.id,
      src: `${apiUrl}${media.attributes.url}`
    })),
    smallMedia: banner.attributes.smallMedia.data.map((media: any) => ({
      id: media.id,
      src: `${apiUrl}${media.attributes.url}`
    }))
  }))

  return formatted
}

export const useBanners = () => {
  const query = useQuery('get-banners', getBanners)

  return query
}
