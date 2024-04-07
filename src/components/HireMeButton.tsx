// import './styles.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Star from './Star'

const HireMeButton = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <motion.button
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      className="relative h-full w-[140px]"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, rotate: 10 }}
    >
      <div className="absolute left-7 top-[50%] z-10 -translate-x-[50%] -translate-y-[50%]">
        <Star isHover={isHover} />
      </div>
      <div className="bg-pink-400 px-3 py-2 pl-7 font-bold text-white">
        Hire Me
      </div>
    </motion.button>
  )
}

export default HireMeButton
