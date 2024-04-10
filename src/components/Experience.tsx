import Wrapper from './Wrapper'
import { benefits } from '../constant'
import { motion } from 'framer-motion'
import ExperienceTag from './ExperienceTag'

const Experience = () => {
  return (
    <Wrapper id="experience">
      <div className="container grid place-content-center text-white">
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mb-3 text-2xl font-bold text-pink-600 lg:text-4xl">
            Experience
          </h1>
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-4">
            {benefits.map((item) => (
              <ExperienceTag key={item.id} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </Wrapper>
  )
}

export default Experience
