import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <div className="grid place-content-center">
      <motion.h1
        data-testid="about-me"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="about-me relative text-[40px] font-bold uppercase tracking-wide text-transparent lg:text-[120px]"
      >
        About me
      </motion.h1>
    </div>
  )
}

export default AboutMe
