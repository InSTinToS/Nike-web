import PrimaryButton from '@src/components/atoms/PrimaryButton'

import { useBanners } from '@src/hooks/useBanners'
import { useWindowSize } from '@src/hooks/useWindowSize'

export default function Home() {
  const { data: banners } = useBanners()
  const { innerWidth } = useWindowSize()

  return (
    <main className='flex flex-col'>
      {banners?.map(banner => (
        <section
          key={banner.id}
          className='flex flex-col w-full items-center mb-8 lg:px-4 lg:py-1'
        >
          {banner?.title && (
            <h2 className='text-3xl self-start font-medium font-futuraCEB'>
              {banner.title}
            </h2>
          )}

          <img
            alt='banner'
            className='w-full'
            src={
              innerWidth < 768 ? banner.smallMedia[0].src : banner.media[0].src
            }
          />

          <h3 className='font-black text-center text-4xl font-futuraCEB max-w-xs  my-6'>
            {banner.bold.toLocaleUpperCase()}
          </h3>

          <p className='text-lg text-center max-w-lg mb-6'>
            {banner.description}
          </p>

          <footer className='flex flex-wrap justify-center'>
            {banner.buttons.map((text, index) => (
              <PrimaryButton className='m-2' key={index}>
                {text}
              </PrimaryButton>
            ))}
          </footer>
        </section>
      ))}
    </main>
  )
}
