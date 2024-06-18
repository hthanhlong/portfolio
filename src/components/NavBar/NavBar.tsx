import { motion } from 'framer-motion'
import HireMeButton from '../HireMeButton'

const NavBar = () => {
  return (
    <motion.div
      whileInView={{
        y: [-80, 0],
        opacity: [0, 1]
      }}
      transition={{
        duration: 0.3
      }}
      className="flex h-20 items-center"
    >
      <div className="flex flex-1 justify-between">
        <div className="nav-left flex items-center lg:gap-10">
          <h1 className="font-bold text-white lg:text-2xl">Long Hoang</h1>
        </div>
        <div className="nav-right flex items-center gap-8">
          <a href="#contact">
            <HireMeButton />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default NavBar
