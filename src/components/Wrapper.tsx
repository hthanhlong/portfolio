const Wrapper = ({
  children,
  ...props
}: {
  children: React.ReactNode
  id?: string
}) => {
  return (
    <div {...props} className="wrapper relative overflow-hidden max-sm:pb-4">
      {children}
    </div>
  )
}

export default Wrapper
