import { GithubIcon, LiveIcon } from '.'

const Portfolio = ({
  item
}: {
  item: {
    id: string
    title: string
    text: string
    backgroundUrl: string
    thumbnail: string
    linkGithub: string
    linkLive: string
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
              className="mb-4 h-[140px] w-full object-cover hover:scale-105"
              draggable={false}
              src={item.thumbnail}
              alt="thumnbnail_1"
            />
          </div>
          <div className="action flex justify-center gap-4">
            <a
              className="flex items-center text-lg transition-all hover:text-blue-400"
              href={item.linkGithub}
              target="_blank"
            >
              <GithubIcon />
              <span className="ml-3">Github</span>
            </a>
            <a
              className="flex items-center text-lg transition-all hover:text-blue-400"
              href={item.linkLive}
              target="_blank"
            >
              <LiveIcon />
              <span className="ml-3">Live</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
