const ExperienceTag = ({
  item
}: {
  item: {
    id: string
    title: string
    text: string
    backgroundUrl: string
    skills: string
  }
}) => {
  return (
    <div
      key={item.id}
      className="h-full max-h-[180px] w-full max-w-[320px] rounded-xl bg-white bg-opacity-10 lg:max-h-[400px] lg:max-w-[400px]"
    >
      <div className="min-h-[160px] p-4 lg:min-h-[400px]">
        <h5 className="h5 text-lg font-bold text-pink-300 lg:text-2xl">
          {item.title}
        </h5>
        <p className="text-md lg:mb-4 lg:text-xl">2021 - 2022</p>
        <p className="overflow-hidden text-xs leading-normal lg:min-h-[120px] lg:text-lg lg:leading-relaxed">
          {item.text}
        </p>
        <div className="mt-1 text-xs lg:mt-2 lg:text-lg">
          Skills: {item.skills}
        </div>
      </div>
    </div>
  )
}

export default ExperienceTag
