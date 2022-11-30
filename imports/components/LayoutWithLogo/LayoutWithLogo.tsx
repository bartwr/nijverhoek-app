import React from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import {Logo} from '../Logo/Logo';

export const LayoutWithLogo = ({
  children
}) => (
  <div className="
    text-center py-12
    flex flex-col justify-between
    h-full
  ">
    <div>
      {children}
    </div>
    <div onClick={() => {
      FlowRouter.go('index');
    }}>
      <Logo />
    </div>
  </div>
);
