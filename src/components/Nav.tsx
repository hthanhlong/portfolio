import { motion } from 'framer-motion'
import HireMeButton from './HireMeButton'

const Nav = () => {
  return (
    <div className="nav fixed top-0 w-full overflow-hidden">
      <div className="container">
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
              <nav>
                <ul className="flex gap-6 font-semibold text-white">
                  <li className="smooth duration-400 cursor-pointer transition-all hover:scale-105 hover:text-pink-500">
                    <a href="#home">Home</a>
                  </li>
                  <li className="smooth duration-400 cursor-pointer transition-all hover:scale-105 hover:text-pink-500">
                    <a href="#about">About</a>
                  </li>
                  <li className="smooth duration-400 cursor-pointer transition-all hover:scale-105 hover:text-pink-500">
                    <a href="#experience">Experience</a>
                  </li>
                  <li className="smooth duration-400 cursor-pointer transition-all hover:scale-105 hover:text-pink-500">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="nav-right flex items-center gap-8">
              <a href="#contact">
                <HireMeButton />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Nav
