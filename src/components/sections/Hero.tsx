import { Canvas } from '@react-three/fiber'
import Wrapper from '../Wrapper/Wrapper'
import { motion } from 'framer-motion'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import NavBar from '../NavBar/NavBar'

const Home = () => {
  return (
    <Wrapper id="home">
      <div className="flex h-full flex-col">
        <NavBar />
        <div className="flex flex-1 gap-2 py-20 max-sm:flex-col-reverse">
          <div className="flex w-1/2 flex-col justify-center text-white max-sm:w-full">
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
              We enjoy creating delightful digital experiences for our
              customers.
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
            className="lg:max-w-1/2 flex w-1/2 flex-1 items-center justify-center max-sm:w-full"
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
      </div>
    </Wrapper>
  )
}

export default Home
