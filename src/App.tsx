import { Canvas } from '@react-three/fiber'
import { Scroll, ScrollControls } from '@react-three/drei'
import { Experience } from './components'
import { motion } from 'framer-motion'

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={['#ecf0f1']} />
        <ScrollControls pages={3} damping={0.1}>
          <Experience />
          <Scroll html>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
            >
              hello world
            </motion.div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  )
}

export default App
