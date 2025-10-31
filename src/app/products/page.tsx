// pages/index.js
import Image from 'next/image'
import Link from 'next/link'

const products = Array.from({ length: 30 }, (_, index) => ({
  name: 'Em Estoque',
  imageUrl: `/products/LiberParafusos_${index + 1}.jpg`, // Substitua pelo caminho real das imagens
  link: '#'
}))

export default function Products() {
  return (
    <div
      className="
    lg:mt-20
    max-sm:mt-20
    max-sm:m-0
    max-sm:px-4
    max-sm:overflow-hidden
    max-sm:w-screen
    max-sm:flex-col
    max-sm:items-center
    max-sm:justify-center
   lg:container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-8 max-sm:text-2xl max-sm:mt-2">
        Produtos
      </h1>
      <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-4 max-sm:w-full max-sm:overflow-hidden">
        {products.map((product, index) => (
          <div
            key={index}
            className="
            rounded-md
            max-sm:w-[158px]
            max-sm:h-[118px]
            flex
             w-[324px] 
            h-[288px] 
            items-center justify-center border p-4 
            hover:w-[468px] hover:h-[322px]
            hover:transition-all

       
            "
          >
            <img
              src={product.imageUrl}
              alt={''}
              className="w-10/12 hover:w-full "
            />
          </div>
        ))}
      </div>
    </div>
  )
}
