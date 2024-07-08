const Wrapper = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <div className="max-w-6xl mx-auto h-fit">{children}</div>
}

export default Wrapper
