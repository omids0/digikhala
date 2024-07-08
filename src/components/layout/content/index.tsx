import Wrapper from '../wrapper'

const MainContent = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="p-2 md:p-4 min-h-[85vh]">
      <Wrapper>{children}</Wrapper>
    </div>
  )
}

export default MainContent
