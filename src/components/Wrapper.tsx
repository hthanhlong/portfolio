const Wrapper = ({
  children,
  ...props
}: {
  children: React.ReactNode
  id?: string
}) => {
  return (
    <div {...props} className="wrapper pt-20">
      {children}
    </div>
  )
}

export default Wrapper
