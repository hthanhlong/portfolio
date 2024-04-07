import { motion } from 'framer-motion'

const GetInTouch = () => {
  return (
    <motion.div
      className="w-full"
      initial={{
        x: -1000
      }}
      whileInView={{
        x: 0
      }}
      transition={{
        duration: 1
      }}
    >
      <svg className="flex h-full w-full stroke-cyan-500 stroke-2">
        <text
          x="25%"
          y="50%"
          dominant-baseline="middle"
          text-anchor="middle"
          font-family="Arial"
          font-size="140"
          font-weight="bold"
          fill="white"
        >
          GET
        </text>
        <motion.text
          x="68%"
          y="50%"
          dominant-baseline="middle"
          text-anchor="middle"
          font-family="Arial"
          font-size="140"
          font-weight="bold"
          initial={{
            fill: 'white'
          }}
          whileInView={{
            fill: 'black'
          }}
        >
          IN TOUCH
        </motion.text>
      </svg>
    </motion.div>
  )
}

export default GetInTouch
