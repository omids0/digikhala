'use client'

import { useQuery } from 'react-query'
import { getAllProducts } from 'src/api/products/services'

const HomePage = () => {
  const { isLoading, isError, data } = useQuery('getAllProducts', getAllProducts)

  return (
    <div>
      {isLoading && 'loading...'}
      {isError && 'error'}
      {data?.length}
    </div>
  )
}

export default HomePage
