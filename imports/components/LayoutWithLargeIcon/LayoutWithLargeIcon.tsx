import React from 'react';

import {Logo} from '../Logo/Logo';
import {Title} from '../Title/Title';
import {Paragraph as P} from '../Paragraph/Paragraph.tsx';

export const LayoutWithLargeIcon = ({
  iconPath,
  backgroundColor,
  textColor,
  title,
  paragraphText,
  onClick,
  children
}: {
  iconPath: string,
  backgroundColor: string,
  textColor: string,
  title: string,
  paragraphText: string,
  onClick?: Function,
  children: any
}) => (
  <div className="
    text-center py-12
    flex flex-col justify-between
    h-full
    cursor-pointer
  " style={{
    backgroundColor: backgroundColor,
    color: textColor
  }} onClick={onClick}>
    <img
      src={iconPath}
      className="block mx-auto rounded-full"
      style={{
        width: '246px',
        maxWidth: '60%'
      }}
    />

    <div>

      <Title>
        {title}
      </Title>

      <P>
        {paragraphText}
      </P>

    </div>

    <div>
      <Logo
        theme="white-transparent"
      />
    </div>
  </div>
);
