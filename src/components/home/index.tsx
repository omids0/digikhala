'use client'

import { useQuery } from 'react-query'
import { getAllProducts } from 'src/api/products/services'
import Carousel from '../common/carousel'
import Image from 'next/image'
import Tiles from './tiles'
import HandledJSX from '../common/handledJSX'

const HomePage = () => {
  const { isLoading, isError, data } = useQuery('getAllProducts', getAllProducts)

  const handleCarouselContent = data => {
    return data?.map(item => ({
      element: (
        <div className="flex items-center justify-center w-full bg-gradient-to-b from-red-50 to-transparent rounded-xl p-8 gap-10 min-h-[30rem]">
          <div className="min-w-[20rem] max-w-[20rem] min-h-[25rem] max-h-[25rem] flex flex-col items-center gap-6 mb-6">
            <p className="font-bold items-end text-gray-800">{item.title}</p>
            <Image
              src={item.image}
              width={1000}
              height={1000}
              alt={item.title}
              loading="lazy"
              className="max-w-[15rem] min-w-[15rem] max-h-[20rem] rounded-lg"
            />
          </div>
        </div>
      )
    }))
  }

  return (
    <HandledJSX isLoading={isLoading} isError={isError}>
      <div className="flex flex-col">
        <Carousel contentData={handleCarouselContent(data)} />
        <div className="flex w-full justify-between flex-wrap mt-16">
          <Tiles category="electronics" />
          <Tiles category="jeweler" />
          <Tiles category="menClothes" />
          <Tiles category="womenClothes" />
        </div>
      </div>
    </HandledJSX>
  )
}

export default HomePage
