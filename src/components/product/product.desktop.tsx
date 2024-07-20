import Image from 'next/image'
import Rating from '../category/rating'
import { IResponse } from 'src/api/product/services'

interface IProps {
  data: IResponse
}

const ProductDesktopPage = ({ data }: IProps) => {
  return (
    <div className="max-[860px]:hidden flex justify-between">
      <div className="min-w-[20rem] max-w-[20rem] border-[1px] p-4 rounded-lg">
        <Image src={data?.image} alt={data?.title} width={1000} height={1000} />
      </div>
      <div className="flex flex-col p-4 gap-4">
        <p className="font-semibold text-lg text-gray-800">{data?.title}</p>
        <Rating rating={data?.rating} />
        <p className="text-sm text-gray-600">{data?.description}</p>
      </div>
      <div className="flex flex-col border-[1px] p-4 justify-between items-center min-w-[12rem] max-w-[12rem] rounded-lg">
        <p className="font-semibold text-gray-800">Price And Choice:</p>
        <p className="font-mono text-[2rem]">
          {data?.price} <span className="text-yellow-400">$</span>
        </p>
        <button className="bg-red-500 w-full rounded-md p-2 text-white font-bold">
          Add To Basket
        </button>
      </div>
    </div>
  )
}

export default ProductDesktopPage
