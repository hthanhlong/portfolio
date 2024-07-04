import { githubIcon } from '../assets'

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
      key={item.id}
      className="flex flex-col gap-2 rounded-md bg-white bg-opacity-10 p-4"
    >
      <h5 className="text-center text-sm font-bold text-pink-300 lg:text-xl">
        {item.title}
      </h5>
      <a href={item.linkLive} target="_blank" className="flex-1">
        <img
          draggable={false}
          src={item.thumbnail}
          alt="thumbnail"
          className="h-30 mt-2 w-full rounded-md object-cover transition-all hover:scale-105 lg:h-40"
        />
      </a>
      <div className="flex justify-center gap-4">
        <a
          className="flex items-center text-sm transition-all hover:text-blue-400 lg:mt-4 lg:text-lg"
          href={item.linkGithub}
          target="_blank"
        >
          <img src={githubIcon} alt="github" className="size-6" />
          <span className="ml-3">Github</span>
        </a>
      </div>
    </div>
  )
}

export default Portfolio
