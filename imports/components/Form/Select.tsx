import React from 'react';

export const Select = ({
  name, id, defaultValue, children
}: {
  name: string,
  id?: string,
  defaultValue?: any
  children
}) => (
  <div>
    <select
      name={name}
      className="
        text-xl
        p-2
      "
      defaultValue={defaultValue}
      id={id}>
      {children}
    </select>
  </div>
);
