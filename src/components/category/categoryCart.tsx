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
          className="transition ease-in-out delay-150 duration-300 md:w-[15rem] w-[20rem] p-4 md:m-4 m-1 flex flex-col gap-[2rem] border border-red-100 justify-between hover:bg-red-50"
        >
          <Image src={item.image} width={1000} height={1000} alt={item.title} loading="lazy" />
          <span className="font-bold text-gray-700 font-sans">{item.title}</span>
          <span className="line-clamp-[4] text-gray-400 text-sm">{item.description}</span>
          <div className="flex flex-col w-full gap-4">
            <Rating rating={item.rating} />
            <div className="flex justify-between">
              <span>{item.price} $</span>
              <div>Add to Basket</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryCard
