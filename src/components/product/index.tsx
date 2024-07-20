'use client'

import { useParams } from 'next/navigation'
import { useQuery } from 'react-query'
import { getSingleProductApi } from 'src/api/product/services'
import HandledJSX from '../common/handledJSX'

const ProductPage = () => {
  const { id } = useParams()

  const { isError, isLoading, data } = useQuery(
    [
      'getSingleProduct',
      {
        key: {
          id
        }
      }
    ],
    getSingleProductApi
  )

  return (
    <HandledJSX isLoading={isLoading} isError={isError}>
      {data?.title}
    </HandledJSX>
  )
}

export default ProductPage
