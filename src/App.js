import React, { Suspense} from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import { ModelD } from './Model1'





export default function App() {
  function Loader() {
    return <Html center style={{ color: 'black' }}>loading...</Html>
  }

  return (

    <Canvas camera={{ fov: 75, near: 0.1, far: 80, position: [-10, 6, 30] }}>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        maxDistance={40}
      />
      <Suspense fallback={<Loader />}>
        <ambientLight />
       <ModelD/>
      </Suspense>
    </Canvas>
  )
}