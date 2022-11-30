import React from 'react';

import {Logo} from '../Logo/Logo.tsx';

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
    <div>
      <Logo />
    </div>
  </div>
);
