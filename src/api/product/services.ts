import axios from 'axios'
import { SingleProductEndpointEnum } from './endpoints'

export interface IRating {
  rate: number
  count: number
}

export interface IResponse {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: IRating
  count: number
  rate: number
  title: string
}

const getSingleProductApi = async (data): Promise<IResponse> => {
  const {
    queryKey: [_, params]
  } = data

  const response = await axios.get(
    SingleProductEndpointEnum.product.replace('[productID]', params.key.id)
  )

  return response.data
}

export { getSingleProductApi }
