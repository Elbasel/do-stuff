import React from 'react';
import {  HomeInput } from '../components/HomeInput';
import { HomeHeader } from '../components/HomeHeader';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <HomeHeader />
      <HomeInput />
    </>
  );
};

export default Home;
