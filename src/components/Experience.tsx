import Wrapper from './Wrapper'
import { benefits, portfolio } from '../constant'
import Project from './Project'
import Portfolio from './Portfolio'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <Wrapper id="experience">
      <div className="container grid h-full place-content-center text-white">
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mb-3 text-5xl font-bold text-pink-600">Experience</h1>
          <div className="flex">
            {benefits.map((item) => (
              <Project key={item.id} item={item} />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-gradient mb-3 w-full text-right text-5xl font-bold text-pink-600">
            Portfolio
          </h1>
          <div className="flex">
            {portfolio.map((item) => (
              <Portfolio
                key={item.id}
                item={{
                  ...item,
                  thumbnail: item.thumbnail || 'defaultThumbnail.jpg'
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </Wrapper>
  )
}

export default Experience
