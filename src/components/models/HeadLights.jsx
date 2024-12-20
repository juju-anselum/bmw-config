import { useGLTF } from '@react-three/drei'
import { useCustomGLTF } from '../../utils/functions'

const Headlights = (props) => {
  const { nodes, materials } = useCustomGLTF('/models/headlights.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.001, 0.66, 1.763]} scale={0.847}>
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A009.geometry} material={materials.Black} />
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A009_1.geometry} material={materials.lightRunningY} >
          <meshStandardMaterial emissiveIntensity={1.5} color={'#fff'} toneMapped={false} />
        </mesh>
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A009_2.geometry} material={materials.lightFog} />
        <mesh geometry={nodes.KIT00_FRONT_BRAKE_A009_3.geometry} material={materials.highBeam}>
          <meshStandardMaterial emissiveIntensity={10} color={'#00d9ff'} toneMapped={false} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/headlights.glb')

export default Headlights