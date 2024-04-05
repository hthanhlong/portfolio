import { motion } from 'framer-motion'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="wrapper bg-purple-700"
    >
      {children}
    </motion.div>
  )
}

export default Wrapper
