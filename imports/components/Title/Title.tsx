import React from 'react';

export const Title = ({children}: {
  children: any,
  classes?: string
}) => (
  <div>
    <div className={`text-3xl font-bold mx-auto`}>
      {children}
    </div>
  </div>
);
