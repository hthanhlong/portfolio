const Wrapper = ({
  children,
  ...props
}: {
  children: React.ReactNode
  id?: string
}) => {
  return (
    <div {...props} className="wrapper overflow-hidden pt-20 max-sm:pb-4">
      {children}
    </div>
  )
}

export default Wrapper
