'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const CategoryCard = ({ data }) => {
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
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
                {item.rating.rate}
              </p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <a
                href="#"
                className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
              >
                {item.rating.count} reviews
              </a>
            </div>
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
