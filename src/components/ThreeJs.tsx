import React, { useEffect } from 'react';
import * as THREE from 'three';

type Props = {};

const ThreeJs = (props: Props) => {
  useEffect(() => {
    console.log(window);
    console.log(THREE);
  });
  return <div>ThreeJs</div>;
};

export default ThreeJs;
