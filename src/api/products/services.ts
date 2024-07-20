import axios from 'axios'
import { ProductsEndpointEnum } from './endpoints'

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

const getAllProductsApi = async (): Promise<IResponse[]> => {
  const response = await axios.get(ProductsEndpointEnum.allProducts)

  return response.data
}

export { getAllProductsApi }
