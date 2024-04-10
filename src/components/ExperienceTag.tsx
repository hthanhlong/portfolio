const ExperienceTag = ({
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
      key={item.id}
      className="h-full min-h-[160px] w-full max-w-[320px] rounded-xl bg-white bg-opacity-10"
    >
      <div className="p-4">
        <h5 className="h5 mb-2 text-sm font-bold text-pink-300">
          {item.title}
        </h5>
        <p className="leading-6">{item.text}</p>
      </div>
    </div>
  )
}

export default ExperienceTag
