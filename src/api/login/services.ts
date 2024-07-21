import axios from 'axios'
import { LoginEndpointEnum } from './endpoints'

const createUserLoginApi = async requestBody => {
  const response = await axios.post(LoginEndpointEnum.auth, requestBody)

  return response.data
}

export { createUserLoginApi }
