
import * as THREE from 'three'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from 'react';


export function ModelAnim(props) {

  const mixer = useRef();
  const gltf = useLoader(GLTFLoader, 'deform_strips6_10anim.gltf')

  const [startPlay,setStartPlay]=useState(false)
  //animatio segment start
  useEffect(() => {
    if (gltf) {
      mixer.current = new THREE.AnimationMixer(gltf.scene)
      const action = mixer.current.clipAction(gltf.animations[0])
      //console.log(gltf.animations)
      //action.play()
     
      if(startPlay===true){
        action.play()
        if(mixer.current.time>2){
          mixer.current.timeScale=0
          console.log('stop')
        }
        }
       
        
      
    }
  }, [gltf, startPlay])

  useFrame((state, delta) => {
    mixer.current?.update(delta)
  })

  // animation segment end

  return (
    <>
      <OrbitControls />
      <primitive object={gltf.scene} dispose={null} onPointerMove={(e) => setStartPlay(true)} />
    </>
  )
}