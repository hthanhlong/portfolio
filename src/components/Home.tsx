import { Canvas } from '@react-three/fiber'
import { images } from '../utils'
import Wrapper from './Wrapper'
import { motion } from 'framer-motion'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'

const Home = () => {
  return (
    <Wrapper id="home">
      <div className="home-content container flex h-full items-center justify-between lg:px-10">
        <div className="home-left text-white">
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
            <span className="text-white-200 h-[4px] w-[40px] rounded-l bg-white"></span>
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
            initial={{ x: -100, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="rounded-md bg-pink-500 px-4 py-2 font-bold text-white lg:mt-10 lg:w-[160px]"
          >
            Get in touch
          </motion.button>
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="home-right relative flex h-full flex-1 items-center justify-center"
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
            alt="home"
            className="pointer-events-none absolute w-8/12"
          />
        </motion.div>
      </div>
    </Wrapper>
  )
}

export default Home