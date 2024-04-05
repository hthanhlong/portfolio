import { Canvas } from '@react-three/fiber'
import { images } from '../utils'
import Nav from './Nav'
import Wrapper from './Wrapper'
import { motion } from 'framer-motion'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'

const Hero = () => {
  return (
    <Wrapper>
      <Nav />
      <div className="hero-content container flex h-full items-center justify-between lg:px-10">
        <div className="hero-left text-white">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-3"
          >
            <span className="text-7xl font-bold">Think. </span>
            <span className="text-7xl font-bold">Code.</span>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.25 }}
            className="mb-3"
          >
            <span className="text-7xl font-bold">Ship.</span>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="mb-3 flex items-center gap-2"
          >
            <span className="text-white-200">----</span>
            <span className="text-2xl text-pink-400"> What we do</span>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.75 }}
            className="text-xl"
          >
            We enjoy creating delightful digital experiences for our customers.
          </motion.div>
          <motion.button
            whileHover={{
              scale: 1.1
            }}
            whileTap={{
              scale: 0.9,
              rotate: 45
            }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="rounded-md bg-pink-500 px-4 py-2 font-bold text-white lg:mt-10 lg:w-[160px]"
          >
            Learn more
          </motion.button>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero-right relative flex h-full flex-1 items-center justify-center"
        >
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1}>
              <MeshDistortMaterial
                color="hotpink"
                attach="material"
                distort={0.7}
                speed={1.5}
              />
            </Sphere>
          </Canvas>
          <motion.img
            animate={{
              y: [10, 0, 10]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: 'loop',
              delay: 2
            }}
            src={images.moon}
            alt="hero"
            className="pointer-events-none absolute w-11/12"
          />
        </motion.div>
      </div>
    </Wrapper>
  )
}

export default Hero
