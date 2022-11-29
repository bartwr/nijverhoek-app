import React from 'react';

export const Select = ({
  name: string,
  children
}) => (
  <div>
    <select name={name} className="
      text-xl
      p-2
    ">
      {children}
    </select>
  </div>
);
