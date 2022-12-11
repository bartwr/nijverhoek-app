import React from 'react';
import { motion } from "framer-motion"

import './Button.css';

export const Button = ({onClick, id, children}: {
  onClick?: Function,
  id?: string,
  children: any
}) => (
  <div>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="
        btn
        btn-blue
        text-xl
        p-2
      "
      id={id}
      onClick={onClick}
     >
      {children}
    </motion.button>
  </div>
);
