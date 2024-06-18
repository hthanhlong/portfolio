const ExperienceTag = ({
  item
}: {
  item: {
    id: string
    title: string
    text: string
    backgroundUrl: string
    skills: string
    years: string
  }
}) => {
  return (
    <div key={item.id} className="flex-1 rounded-xl bg-white bg-opacity-10 p-4">
      <h5 className="h5 text-lg font-bold text-pink-300 lg:text-xl">
        {item.title}
      </h5>
      <p className="text-sm italic text-gray-400 lg:mb-4 lg:text-xl">
        {item.years}
      </p>
      <p className="overflow-hidden text-xs leading-normal lg:min-h-[120px] lg:text-lg lg:leading-relaxed">
        {item.text}
      </p>
      <div className="mt-1 text-xs lg:mt-2 lg:text-lg">
        Skills: {item.skills}
      </div>
    </div>
  )
}

export default ExperienceTag
