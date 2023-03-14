import React from 'react';
import { Button } from '../Button/';

type Props = {};

export const Nav = (props: Props) => {
  return (
    <nav>
      <ul>
        <li>
          <Button type="button">Enter Api Key</Button>
        </li>
      </ul>
    </nav>
  );
};
