import axios from 'axios'
import { CategoriesEndpointEnum } from './endpoints'

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

const getCategoriesApi = async (data): Promise<IResponse[]> => {
  const {
    queryKey: [_, params]
  } = data

  const response = await axios.get(
    CategoriesEndpointEnum.category.replace('[category]', params.key.category)
  )

  return response.data
}

export { getCategoriesApi }
