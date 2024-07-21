'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Rating from './rating'
import { IResponse } from 'src/api/categories/services'

interface IProps {
  data: IResponse[]
}

const CategoryCard = ({ data }: IProps) => {
  const { category } = useParams()

  return (
    <div className="flex flex-wrap justify-center">
      {data.map(item => (
        <Link
          href={`./${category}/${item.id}`}
          key={item.id}
          className="transition ease-in-out delay-150 duration-300 md:w-[15rem] min-w-[10rem] w-[45%] p-4 md:m-4 m-1 flex flex-col gap-[2rem] rounded-md border border-red-50 justify-between hover:bg-red-50"
        >
          <div className="w-full min-h-[13rem] md:min-h-[20rem] flex items-center">
            <Image src={item.image} width={1000} height={1000} alt={item.title} loading="lazy" />
          </div>
          <span className="font-semibold text-gray-800 font-sans md:text-base text-sm">
            {item.title}
          </span>
          <Rating rating={item.rating} />
          <span className="line-clamp-[4] text-gray-400 md:text-sm text-xs">
            {item.description}
          </span>
          <div className="flex flex-col w-full gap-4">
            <div className="flex md:flex-row flex-col gap-2 md:justify-between items-center border p-1 rounded-md border-red-50">
              <span className="font-serif text-lg">
                {item.price}
                <span className="text-yellow-500 mx-1">$</span>
              </span>
              <button className="bg-red-600 text-white rounded-md p-2 text-sm">
                Add to Basket
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryCard
