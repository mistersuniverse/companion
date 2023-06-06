import React, { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const scrollContainerRef = useRef(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const deltaX = scrollY - previousScrollY.current;

    // Check if the user is scrolling vertically
    if (
      Math.abs(deltaX) > 0 &&
      Math.abs(deltaX) > Math.abs(window.scrollX)
    ) {
      // Disable rotation of the Earth while scrolling vertically
      scrollContainerRef.current.style.pointerEvents = "none";
    } else {
      // Enable rotation of the Earth while scrolling horizontally
      scrollContainerRef.current.style.pointerEvents = "auto";
    }

    previousScrollY.current = scrollY;
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className="h-full w-full p-12">
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
        className="rounded-full p-0"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
