import React, { useState } from 'react';
import { HomeInput } from '../components/HomeInput';
import { HomeHeader } from '../components/HomeHeader';
import { Conversation } from '../components/Conversation';
import { type message } from '../components/Conversation';

type Props = {};

const Home = (props: Props) => {
  const [messages, setMessages] = useState<message[]>([]);
  return (
    <>
      <HomeHeader />
      <HomeInput
        onSubmit={(value) =>
          setMessages((prev) => [
            ...prev,
            { id: prev.length, text: 'You said: "' + value + '"' },
          ])
        }
      />
      <Conversation messages={messages} />
    </>
  );
};

export default Home;
