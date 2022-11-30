import React from 'react';

export const Title = ({children}: {
  children: any
}) => (
  <div>
    <div className="text-3xl font-bold">
      {children}
    </div>
  </div>
);
