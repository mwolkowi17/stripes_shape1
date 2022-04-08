import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function ModelD(props) {
  const group = useRef()
  const { nodes } = useGLTF('/deform_stripes.gltf')
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive castShadow receiveShadow object={nodes.Plane}
        //scale={nodes.plane.scale}
        //translateOnAxis={nodes.plane.translation}
       // rotation={nodes.plane.rotation}
      /* onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}*/
      />

     
    </group>
  )
}

useGLTF.preload('/deform_stripes.gltf')