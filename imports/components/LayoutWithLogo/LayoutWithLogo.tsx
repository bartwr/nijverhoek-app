import React from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import {Logo} from '../Logo/Logo';

const houseNumber = localStorage.getItem('SLOOPHOEK__houseNumber');

export const LayoutWithLogo = ({
  children
}) => (
  <div className="
    text-center p-12
    flex flex-col justify-between
    h-full
  ">
    <div>
      {children}
    </div>
    <div className="pb-8 relative z-20" onClick={() => {
      FlowRouter.go('index');
    }}>
      <Logo />
    </div>
  </div>
);
