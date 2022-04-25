
import * as THREE from 'three'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from 'react';



export function ModelAnim(props) {

  const mixer = useRef();
  const gltf = useLoader(GLTFLoader, 'deform_strips6_10anim.gltf')

  const [startPlay, setStartPlay] = useState(false)
  const [ifStarted, setIfStarted] = useState(false)
  //animatio segment start
  const ifPlayed = useRef();
  //ifPlayed.current=false;
  useEffect(() => {

  if (gltf) {
    mixer.current = new THREE.AnimationMixer(gltf.scene)
    const action = mixer.current.clipAction(gltf.animations[0])
    ifPlayed.current = false

    if (startPlay) {
    
        action.play();
        setTimeout(() => {
        action.stop();
        setStartPlay(false)
        }, 6000);
        
    }

  }
  }, [gltf, startPlay, ifStarted])

  useFrame((state, delta) => {
    mixer.current?.update(delta)
  })

  // animation segment end

  return (
    <>
      <OrbitControls />
      <primitive object={gltf.scene} dispose={null} onPointerOver={(e) => setStartPlay(true)}  />
    </>
  )
}