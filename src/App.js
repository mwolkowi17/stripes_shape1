import React, { Suspense} from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import { ModelD } from './Model1'
import { ModelAnim } from './ModelAnim'





export default function App() {
  function Loader() {
    return <Html center style={{ color: 'white' }}>loading...</Html>
  }

  return (

    <Canvas camera={{ fov: 75, near: 0.1, far: 80, /*position: [0, 25, 25]*/ position: [0, 2, 25] }}>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        maxDistance={40}
      />
      <Suspense fallback={<Loader />}>
       {/*<ambientLight />*/}
        <pointLight position={[10, 10, 10]} /> 
      
       <ModelD rotation={[Math.PI/0.86,0,0]} scale={[4,4,4]}/>
     
        {/*<ModelAnim rotation={[Math.PI/2,0,0]} />*/}
      </Suspense>
    </Canvas>
  )
}