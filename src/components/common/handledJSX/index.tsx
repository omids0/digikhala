import Loading from '../loading'

interface IProps {
  isLoading: boolean
  isError: boolean
  children: React.ReactNode
}

const HandledJSX = ({ isLoading, isError, children }: IProps) => {
  if (isLoading) {
    return <Loading />
  } else if (isError) {
    return <>Something Went Wrong...</>
  }

  return <div>{children}</div>
}

export default HandledJSX
