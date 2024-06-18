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
    <div key={item.id} className="rounded-md bg-white bg-opacity-10">
      <div className="p-4">
        <h5 className="text-center text-sm font-bold text-pink-300 lg:text-xl">
          {item.title}
        </h5>
        <a href={item.linkLive} target="_blank">
          <img
            draggable={false}
            src={item.thumbnail}
            alt="thumnbnail_1"
            className="mx-auto my-1 h-[100px] w-[100px] transition-all hover:scale-105 md:h-[250px] md:w-[250px] lg:h-[300px] lg:w-[400px]"
          />
        </a>
        <div className="flex justify-center gap-4">
          <a
            className="flex items-center text-sm transition-all hover:text-blue-400 lg:mt-4 lg:text-lg"
            href={item.linkGithub}
            target="_blank"
          >
            <GithubIcon />
            <span className="ml-3">Github</span>
          </a>
          <a
            className="flex items-center text-sm transition-all hover:text-blue-400 lg:mt-4 lg:text-lg"
            href={item.linkLive}
            target="_blank"
          >
            <LiveIcon />
            <span className="ml-3">Live</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
