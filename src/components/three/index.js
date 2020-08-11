import React from "react"
import { Canvas } from "react-three-fiber"


const Box = props => {


  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshBasicMaterial
        attach="material"
        color={"orange"}
      />
    </mesh>
  )
}

const Text = () => {


    return (
      <mesh>
        <textBufferGeometry 
        attach="geometry" 
        args={[1, 1, 1]}
        text={"teste"}
        size="80"

        />
       <meshBasicMaterial
        attach="material"
        color={"orange"}
      />
      </mesh>
    )
  }

const Three = () => (
  <Canvas>
    <ambientLight />
    <Box position={[1.2, 0, 0]} />
    <Text position={[1.2, 0, 0]} />
  </Canvas>
)

export default Three