import React, { useEffect } from 'react';
import { motion } from "framer-motion"

import {Title} from '../Title/Title.tsx';

export const Overlay = ({
  title,
  onClose,
  children
}: {
  title?: string,
  onClose?: Function,
  children: any
}) => {
  return (
    <div className="
      fixed
      top-0
      right-0
      left-0
      bottom-0
      p-10
      px-6
    "
    style={{
      zIndex: 100
    }}
    >
      <div className="
        absolute
        top-0
        right-0
        left-0
        bottom-0
        bg-blend-multiply
      " style={{
        background: 'rgba(0, 0, 0, 0.2)',
      }}
      onClick={onClose}
      />
      <div className="
        relative
        z-10
        w-full
        max-w-screen-sm
        md:max-w-screen-md
        mx-auto
        px-4
        text-black
        bg-white
        p-4
        overflow-y-auto
        max-h-full
      ">
        <Title>
          {title}
        </Title>

        {children}

      </div>
    </div>
  );
}
