import Wrapper from './Wrapper'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <Wrapper id="about">
      <div className="container">
        <div className="about-top text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="about-me-text relative text-[200px] font-bold tracking-wider text-transparent"
          >
            ABOUT ME
          </motion.h1>
        </div>
        <div className="about-bottom grid grid-cols-2 text-white">
          <div className="about-bottom-left">hello</div>
          <div className="about-bottom-right">hello</div>
        </div>
      </div>
    </Wrapper>
  )
}

export default About
