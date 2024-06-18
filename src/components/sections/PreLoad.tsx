import { motion } from 'framer-motion'
const PreLoad = () => {
  return (
    <motion.div
      animate={{ y: -2000 }}
      transition={{ duration: 1, linear: true, delay: 0.2, smooth: true }}
      className="fixed bottom-0 left-0 right-0 top-0 bg-[#150232]"
    >
      <div className="mx-auto h-full"></div>
    </motion.div>
  )
}

export default PreLoad
