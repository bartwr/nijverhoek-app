import React from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import {Title} from '../Title/Title.tsx';
import {Select} from '../Form/Select.tsx';
import {Button} from '../Button/Button.tsx';
import {LayoutWithLogo} from '../LayoutWithLogo/LayoutWithLogo.tsx';

export const CheckOut = () => (
  <LayoutWithLogo>
    <Title>
      Welk kavel ga je leeg achterlaten?
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
      <Button onClick={() => {
        FlowRouter.go('sloop-checkout-done')
      }}>
        Check out
      </Button>
    </div>
  </LayoutWithLogo>
);
