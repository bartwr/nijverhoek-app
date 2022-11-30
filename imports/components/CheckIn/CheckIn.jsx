import React from 'react';

import {Title} from '../Title/Title.tsx';
import {Select} from '../Form/Select.tsx';
import {Button} from '../Button/Button.tsx';
import {LayoutWithLogo} from '../LayoutWithLogo/LayoutWithLogo.tsx';

export const CheckIn = () => (
  <LayoutWithLogo>
    <Title>
      Welkom in de Nijverhoek. In welk kavel ga je klussen?
    </Title>

    <div className="my-8">
      <Select name="number">
        <option value="">..</option>
        {Array.from(Array(32), (_, number) => <option value={number+1} key={number+1}>
          {number+1}
        </option>)}
      </Select>
    </div>

    <div className="my-4">
      <Button>
        Check in
      </Button>
    </div>
  </LayoutWithLogo>
);
