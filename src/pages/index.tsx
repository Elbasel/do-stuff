import React, { useState } from 'react';
import { HomeInput } from '../components/HomeInput';
import { HomeHeader } from '../components/HomeHeader';
import { Conversation } from '../components/Conversation';
import { type message } from '../components/Conversation';
import { useAutoAnimate } from '@formkit/auto-animate/react';

type Props = {};

const Home = (props: Props) => {
  const [messages, setMessages] = useState<message[]>([]);
  const [parent, enableAnimations] = useAutoAnimate({
    duration: 4000,
    easing: 'ease-in-out',
  });
  return (
    <div ref={parent}>
      <HomeHeader style={{ display: messages.length > 0 ? 'none' : 'flex' }} />
      <HomeInput
        onSubmit={(value) =>
          setMessages((prev) => [
            ...prev,
            { id: prev.length, text: 'You said: "' + value + '"' },
          ])
        }
      />
      <Conversation messages={messages} />
    </div>
  );
};

export default Home;
