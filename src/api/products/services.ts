import axios from 'axios'
import { ProductsEndpointEnum } from './endpoints'

interface Response {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: { rate: number; count: number }
  count: number
  rate: number
  title: string
}

const getAllProductsApi = async (): Promise<Response[]> => {
  const response = await axios.get(ProductsEndpointEnum.allProducts)

  return response.data
}

export { getAllProductsApi }
