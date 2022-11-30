import React from 'react';

import './Button.css';

export const Button = ({onClick, children}: {
  onClick?: Function,
  children: any
}) => (
  <div>
    <button
      className="
        btn
        btn-blue
        text-xl
        p-2
      "
      onClick={onClick}
     >
      {children}
    </button>
  </div>
);
