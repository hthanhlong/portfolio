import { motion } from 'framer-motion-3d'
import { degreesToRadians } from 'popmotion'
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const lights = [
  [2, 1, 4, 1],
  [8, 0, 4, 1]
]

function Star({ isHover }: { isHover: boolean }) {
  const { nodes } = useGLTF('/star-icon.glb')

  return (
    <Canvas
      resize={{ offsetSize: true }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
    >
      {lights.map(([x, y, z, intensity], i) => (
        <pointLight
          key={i}
          intensity={intensity}
          position={[x / 8, y / 8, z / 8]}
          color="#fff"
        />
      ))}
      <group dispose={null}>
        <motion.mesh
          // @ts-expect-error -//
          geometry={nodes.Star.geometry}
          rotation={[Math.PI / 2, 0, degreesToRadians(360)]}
          scale={1}
          animate={[isHover ? 'hover' : '']}
          variants={{
            hover: {
              rotateZ: 0,
              rotateY: 0.3,
              scale: 1.3,
              transition: {
                rotateZ: { duration: 1.5, ease: 'linear', repeat: Infinity }
              }
            }
          }}
        >
          <meshPhongMaterial
            color="#ffdd00"
            emissive="#ff9500"
            specular="#fff"
            shininess={100}
          />
        </motion.mesh>
      </group>
    </Canvas>
  )
}

export default Star
