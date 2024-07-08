const Loading = () => {
  return (
    <div className="flex w-full h-[75vh] items-center justify-center gap-4">
      <span className="animate-ping w-1.5 h-1.5 inline-flex rounded-full bg-red-400 opacity-75"></span>
      <span className="animate-ping w-1.5 h-1.5 inline-flex rounded-full bg-red-400 opacity-75"></span>
      <span className="animate-ping w-1.5 h-1.5 inline-flex rounded-full bg-red-400 opacity-75"></span>
    </div>
  )
}

export default Loading
