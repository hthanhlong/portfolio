const Portfolio = ({
  item
}: {
  item: {
    id: string
    title: string
    text: string
    backgroundUrl: string
    thumbnail: string
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
      <div className="relative flex min-h-[320px] flex-col">
        <div className="h-full w-full p-[2.4rem]">
          <h5 className="h5 mb-5 text-center text-xl font-bold text-pink-300">
            {item.title}
          </h5>
          <div>
            <img
              className="mb-4 h-[140px] w-full cursor-pointer object-cover hover:scale-105"
              src={item.thumbnail}
              alt="thumnbnail_1"
            />
          </div>

          <div className="action flex justify-center gap-4">
            <span>Github</span>
            <span>Live Demo</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
