import Image from 'next/image'
import Rating from '../category/rating'
import { IResponse } from 'src/api/product/services'

interface IProps {
  data: IResponse
}

const ProductDesktopPage = ({ data }: IProps) => {
  return (
    <div className="max-[860px]:hidden flex justify-between">
      <div className="min-w-[20rem] max-w-[20rem] border-[1px] border-red-50 p-4 rounded-lg flex flex-col">
        <Image src={data?.image} alt={data?.title} width={1000} height={1000} />
        <div className="flex border-[1px] p-2 justify-between items-center rounded-lg border-red-50 mt-10">
          <span className="font-serif text-[2rem] my-4">
            {data?.price} <span className="text-yellow-400">$</span>
          </span>
          <button className="bg-red-500  rounded-md p-2 text-white font-bold">Add To Basket</button>
        </div>
      </div>
      <div className="flex flex-col p-4 gap-4">
        <p className="font-semibold text-lg text-gray-800">{data?.title}</p>
        <Rating rating={data?.rating} />
        <p className="text-sm text-gray-600">{data?.description}</p>
      </div>
    </div>
  )
}

export default ProductDesktopPage
