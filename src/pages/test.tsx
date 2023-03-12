import React from 'react';
// import dynamic from 'next/dynamic';
import AnimatedGlobe from '../components/AnimatedGlobe';

// const ThreeJS = dynamic(() => import('../components/ThreeJs'), {
//   ssr: false,
// });

type Props = {};

const Test = (props: Props) => {
  return (
    <>
      {/* <ThreeJS /> */}
      <AnimatedGlobe />
    </>
  );
};

export default Test;
