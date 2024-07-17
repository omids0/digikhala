import axios from 'axios'
import { CategoriesEndpointEnum } from './endpoints'

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

const getCategoriesApi = async (data): Promise<Response[]> => {
  const {
    queryKey: [_, params]
  } = data

  const response = await axios.get(
    CategoriesEndpointEnum.category.replace('[category]', params.key.category)
  )

  return response.data
}

export { getCategoriesApi }
