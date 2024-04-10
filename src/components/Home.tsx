import { Canvas } from '@react-three/fiber'
import Wrapper from './Wrapper'
import { motion } from 'framer-motion'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'

const Home = () => {
  return (
    <Wrapper id="home">
      <div className="container flex flex-col-reverse px-8 pb-20 lg:flex-row">
        <div className="flex flex-1 flex-col justify-center text-white">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-3"
          >
            <span className="text-2xl font-bold lg:text-7xl">Think. </span>
            <span className="text-2xl font-bold lg:text-7xl">Code.</span>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.25 }}
            className="mb-3"
          >
            <span className="text-2xl font-bold lg:text-7xl">Ship.</span>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="mb-3 flex items-center gap-2"
          >
            <span className="text-white-200 h-[4px] w-[40px] rounded-l bg-white"></span>
            <span className="text-xl text-pink-400 lg:text-2xl">
              What we do
            </span>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.75 }}
            className="text-md lg:text-lg"
          >
            We enjoy creating delightful digital experiences for our customers.
          </motion.div>

          <motion.button
            initial={{ x: -100, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="mt-10 max-w-[160px] rounded-md bg-pink-500 px-4 py-2 font-bold text-white lg:max-w-[200px]"
          >
            <a href="#contact">Get in touch</a>
          </motion.button>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="lg:max-w-1/2 relative flex flex-1 items-center justify-center"
        >
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.2}>
              <MeshDistortMaterial
                color="hotpink"
                attach="material"
                distort={0.7}
                speed={1.5}
              />
            </Sphere>
          </Canvas>
        </motion.div>
      </div>
    </Wrapper>
  )
}

export default Home
