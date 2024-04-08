const Project = ({
  item
}: {
  item: {
    id: string
    title: string
    text: string
    backgroundUrl: string
  }
}) => {
  return (
    <div
      className="relative block w-full overflow-hidden bg-no-repeat"
      style={{
        backgroundImage: `url(${item.backgroundUrl})`
      }}
      key={item.id}
    >
      <div className="z-2 pointer-events-none relative flex min-h-[24rem] flex-col p-[2.4rem] ">
        <h5 className="h5 mb-5">{item.title}</h5>
        <p className="text-n-3 mb-6">{item.text}</p>
      </div>
    </div>
  )
}

export default Project
