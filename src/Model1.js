import React, { useRef, useState, useEffect } from 'react'
import { useGLTF,useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function ModelD(props) {
  const group = useRef();
 
  const { nodes, animations } = useGLTF('deform1.gltf')
  const { actions, mixer } = useAnimations(animations, group);
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
   // actions.Animation.play();
   actions.Key1.play()
   actions.Key2.play()
   actions.Key3.play()
   actions.Key4.play()
   actions.Key5.play()
   actions.Key6.play()
  }, [hovered,mixer,actions])


  useFrame((state, delta) => {
    mixer.current?.update(delta)
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive castShadow receiveShadow object={nodes.Plane}
        scale={nodes.Plane.scale}
        translateOnAxis={nodes.Plane.translation}
        rotation={nodes.Plane.rotation}

        onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
      <primitive castShadow receiveShadow object={nodes.Plane2}
        scale={nodes.Plane.scale}
        translateOnAxis={nodes.Plane.translation}
        rotation={nodes.Plane.rotation}

      /* onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}*/
      />

      <primitive castShadow receiveShadow object={nodes.Plane3}
        scale={nodes.Plane.scale}
        translateOnAxis={nodes.Plane.translation}
        rotation={nodes.Plane.rotation}

      /* onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}*/
      />

      <primitive castShadow receiveShadow object={nodes.Plane4}
        scale={nodes.Plane.scale}
        translateOnAxis={nodes.Plane.translation}
        rotation={nodes.Plane.rotation}

      /* onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}*/
      />

      <primitive castShadow receiveShadow object={nodes.Plane5}
        scale={nodes.Plane.scale}
        translateOnAxis={nodes.Plane.translation}
        rotation={nodes.Plane.rotation}

      /* onClick={() => console.log('clicked')}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}*/
      />

      <primitive castShadow receiveShadow object={nodes.Plane6}
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

useGLTF.preload('deform1.gltf')