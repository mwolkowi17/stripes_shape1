import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function ModelD(props) {
  const group = useRef()
  const { nodes } = useGLTF('deform_strips6_9.gltf')
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive castShadow receiveShadow object={nodes.Plane}
        scale={nodes.Plane.scale}
        translateOnAxis={nodes.Plane.translation}
        rotation={nodes.Plane.rotation}
      /* onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}*/
      />

     
    </group>
  )
}

useGLTF.preload('deform_strips6_9.gltf')