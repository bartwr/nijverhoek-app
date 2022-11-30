import React from 'react';

import {Title} from '../Title/Title.tsx';
import {Paragraph as P} from '../Paragraph/Paragraph';
import {Select} from '../Form/Select.tsx';
import {Button} from '../Button/Button.tsx';
import {LayoutWithLogo} from '../LayoutWithLogo/LayoutWithLogo.tsx';

const Household = ({children}: {
  children: any
}) => {
  return (
    <div className="
      rounded-xl
      p-2
      m-2
      text-center
      flex flex-col justify-center
      w-12
      font-bold
      text-xl
    " style={{
      background: '#9CC192'
    }}>
      {children}
    </div>
  );
}

export const Landing = () => (
  <LayoutWithLogo>
    <Title>
      Wie is er aanwezig?
    </Title>

    <P>
      In deze kavelnummers zijn er mensen aan het slopen:
    </P>

    <div className="
      my-4
      flex justify-center flex-wrap
    ">
      <Household>
        1
      </Household>
      <Household>
        2
      </Household>
    </div>

  </LayoutWithLogo>
);
