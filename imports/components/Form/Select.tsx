import React from 'react';

export const Select = ({
  name, id, defaultValue, style, children
}: {
  name: string,
  id?: string,
  defaultValue?: any,
  style?: object
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
      style={style}
      id={id}
     >
      {children}
    </select>
  </div>
);
