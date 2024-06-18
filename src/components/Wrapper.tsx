const Wrapper = ({
  children,
  ...props
}: {
  children: React.ReactNode
  id?: string
}) => {
  return (
    <div {...props} className="wrapper overflow-hidden px-8 max-sm:pb-8">
      {children}
    </div>
  )
}

export default Wrapper
