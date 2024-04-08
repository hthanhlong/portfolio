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
      <div className="relative flex h-[320px] flex-col">
        <div className="h-full w-full p-[2.4rem]">
          <h5 className="h5 mb-5 text-xl font-bold text-pink-300">
            {item.title}
          </h5>
          <p className="text-n-3 mb-6 leading-8">{item.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Project
