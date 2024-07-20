import Image from 'next/image'
import Rating from '../category/rating'
import { IResponse } from 'src/api/product/services'

interface IProps {
  data: IResponse
}

const ProductMobilePage = ({ data }: IProps) => {
  return (
    <div className="min-[860px]:hidden">
      <div className="w-full flex justify-center">
        <div className="w-[15rem]">
          <Image src={data?.image} alt={data?.title} width={1000} height={1000} />
        </div>
      </div>
      <p className="font-semibold my-4 text-gray-900">{data?.title}</p>
      <Rating rating={data?.rating} />
      <p className="font-sans my-4 text-gray-600">{data?.description}</p>
      <div className="flex justify-between items-center border-[1px] p-1 rounded-md mt-20 sticky bottom-2 bg-white">
        <span className="font-bold text-gray-700">
          {data?.price} <span className="text-yellow-500">$</span>
        </span>
        <button className="bg-red-500 p-2 text-white rounded-md">Add to basket</button>
      </div>
    </div>
  )
}

export default ProductMobilePage
