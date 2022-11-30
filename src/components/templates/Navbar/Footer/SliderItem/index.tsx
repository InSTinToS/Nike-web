interface ISliderItemProps {
  alt: string
  src: string
  bold: string
  text: string
}

export default function SliderItem({ alt, bold, src, text }: ISliderItemProps) {
  return (
    <>
      <img className='h-8' alt={alt} src={src} />

      <p className='pl-4 text-center'>
        <strong>{bold} </strong>
        {text}
      </p>
    </>
  )
}
