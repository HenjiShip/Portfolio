import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import room from "../../assets/3d/medieval_fantasy_book.glb";

const Room = () => {
  const gltf = useLoader(GLTFLoader, room);
  const ref = useRef();
  const { viewport } = useThree();
  useFrame(() => {
    ref.current.rotation.y += 0.001;
    ref.current.scale.set(
      viewport.width > 8 ? 0.07 : 0.04,
      viewport.width > 8 ? 0.07 : 0.04,
      viewport.width > 8 ? 0.07 : 0.04
    );
  });
  return (
    <>
      <spotLight position={[5, 10, 7.5]} />
      <spotLight position={[-3, 10, -7.5]} />
      <pointLight color={"#002d45"} position={[0, 0.6, 0]} distance="1.5" />
      <OrbitControls enableZoom={false} enablePan={false} />
      <primitive object={gltf.scene} scale={0.06} ref={ref} />
    </>
  );
};

export default Room;

// add assetsInclude: ["**/*.glb"], to vite.config.js to use glb files
