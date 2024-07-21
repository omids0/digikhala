'use client'

import { useParams } from 'next/navigation'
import { useQuery } from 'react-query'
import { getCategoriesApi } from 'src/api/categories/services'
import HandledJSX from '../../common/handledJSX'
import CategoryCard from './categoryCart'

const CategoryPage = () => {
  const { category } = useParams()

  const { isError, isLoading, data } = useQuery(
    [
      'getCategories',
      {
        key: {
          category
        }
      }
    ],
    getCategoriesApi
  )

  return (
    <HandledJSX isLoading={isLoading} isError={isError}>
      {data?.length === 0 ? (
        <div className="flex justify-center items-center h-[70vh] text-gray-400 font-bold">
          Noting To Show You!
        </div>
      ) : (
        <CategoryCard data={data} />
      )}
    </HandledJSX>
  )
}

export default CategoryPage
