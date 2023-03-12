import React, { useRef, useEffect } from 'react';
// import { tailwind } from '../lib/tailwind';
import * as THREE from 'three';
import 'vanta/src/vanta.waves';

const VantaBackground = () => {
  const myRef = useRef(null);

  // useEffect(() => {
  //   if (myRef.current) {
  //   WAVES({
  //     el: myRef.current,
  //     THREE: THREE,
  //     mouseControls: true,
  //     touchControls: true,
  //     minHeight: 200.0,
  //     minWidth: 200.0,
  //     scale: 1.0,
  //     scaleMobile: 1.0,
  //     color: 0x0,
  //     shininess: 70.0,
  //     waveHeight: 28.5,
  //     waveSpeed: 0.75,
  //     zoom: 0.9,
  //   });
  // }

  // // Cleanup
  // return () => {
  //   if (myRef.current.vanta) {
  //     myRef.current.vanta.destroy();
  //   }
  // };
  // }, [myRef]);

  return (
    <div></div>
    // <div ref={myRef} className="fixed w-full h-full top-0 left-0 z-[-1]">
    //   {children}
    // </div>
  );
};

export default VantaBackground;
