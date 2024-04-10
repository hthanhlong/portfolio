import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="about-me relative text-[180px] font-bold uppercase tracking-wide text-transparent max-lg:text-[80px] max-sm:text-[40px]"
    >
      About me
    </motion.h1>
  )
}

export default AboutMe
