import axios from 'axios'
import { ProductsEndpointEnum } from './endpoints'

const getAllProducts = async data => {
  const response = await axios.get(ProductsEndpointEnum.allProducts, data)

  return response.data
}

export { getAllProducts }
