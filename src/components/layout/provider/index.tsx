'use client'
import { QueryClient, QueryClientProvider } from 'react-query'
import MainHeader from '../header'
import MainContent from '../content'
import MainFooter from '../footer'

const AppProvider = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <MainHeader />
      <MainContent>{children}</MainContent>
      <MainFooter />
    </QueryClientProvider>
  )
}

export default AppProvider
