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

      <footer className='flex flex-col items-center justify-center p-8 w-full bg-black text-white'>
        <div className='flex flex-col text-center justify-between w-full max-w-screen-lg border-b border-b-gray text-sm pb-8 md:text-left md:flex-row'>
          <ul className='flex flex-col text-base'>
            <li>Encontre Uma Loja Nike</li>
            <li>Cadastre-se para receber novidades</li>
            <li>Cartão Presente</li>
          </ul>

          <ul className='flex flex-col'>
            <li className='text-base mb-4'>Ajuda</li>
            <li>Dúvidas Gerais</li>
            <li>Encontre seu Tamanho</li>
            <li>Entregas</li>
            <li>Pedidos</li>
            <li>Trocas e Devoluções</li>
            <li>Pagamentos</li>
            <li>Produtos</li>
            <li>Corporativo</li>
            <li>Fale Conosco</li>
          </ul>

          <ul className='flex flex-col'>
            <li className='text-base mb-4'>Sobre a Nike</li>
            <li>Feito para Jogar</li>
            <li>Sustentabilidade</li>
          </ul>
        </div>

        <div className='flex flex-col justify-between items-center w-full max-w-screen-lg text-sm py-8 md:flex-row'>
          <ul className='flex flex-row'>
            <li className='mr-4'>Brasil</li>
            <li className='mr-4'>Política de Privacidade</li>
            <li className='mr-4'>Termos de Uso</li>
          </ul>

          <p className='text-center text-xs mt-4 md:text-right md:mt-0'>
            © 2022 Nike. Todos os direitos reservados. Fisia Comércio de
            <br />
            Produtos Esportivos Ltda - CNPJ: 59.546.515/0045-55 Rodovia Fernão
            <br />
            Dias, S/N Km 947.5 - Galpão Modulo 3640 - CEP 37640-903 - Extrema -
            MG
          </p>
        </div>
      </footer>
    </main>
  )
}
