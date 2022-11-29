import React from 'react';

import {Logo} from '../Logo/Logo.tsx';

export const LayoutWithLogo = ({
  children
}) => (
  <div className="
    text-center my-12
    flex flex-col justify-between
  ">
    <div>
      {children}
    </div>
    <div>
      <Logo />
    </div>
  </div>
);
