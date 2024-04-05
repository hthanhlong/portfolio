import { images } from '../utils'
import { motion } from 'framer-motion'

const Nav = () => {
  return (
    <div className="h-20">
      <div className="container">
        <motion.div
          whileInView={{
            y: [-80, 0],
            opacity: [0, 1]
          }}
          transition={{
            duration: 0.3
          }}
          className="flex h-full items-center"
        >
          <div className="flex flex-1 justify-between">
            <div className="nav-left flex items-center lg:gap-10">
              <h1 className="font-bold text-white lg:text-2xl">Long Hoang</h1>
              <nav>
                <ul className="flex gap-6 font-semibold text-white">
                  <li className="smooth duration-400 cursor-pointer transition-all hover:scale-105 hover:text-pink-500">
                    Home
                  </li>
                  <li className="smooth duration-400 cursor-pointer transition-all hover:scale-105 hover:text-pink-500">
                    About
                  </li>
                  <li className="smooth duration-400 cursor-pointer transition-all hover:scale-105 hover:text-pink-500">
                    Projects
                  </li>
                  <li className="smooth duration-400 cursor-pointer transition-all hover:scale-105 hover:text-pink-500">
                    Contact
                  </li>
                </ul>
              </nav>
            </div>
            <div className="nav-right flex items-center gap-8">
              <img
                src={images.searchIcon}
                className="h-6 w-6 cursor-pointer hover:scale-110"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, rotate: 10 }}
                className="rounded-md bg-pink-500 px-4 py-2 font-bold text-white lg:w-[120px]"
              >
                Hire Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Nav
