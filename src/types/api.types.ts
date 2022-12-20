export interface IProduct {
  id: number
  name: string
  price: number
  image: string
  discount?: number
}

export interface IBanner {
  id: number
  bold: string
  title?: string
  buttons: string[]
  description: string
  media: { id: number; src: string }[]
  smallMedia: { id: number; src: string }[]
}
