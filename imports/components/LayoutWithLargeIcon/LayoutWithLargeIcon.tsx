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
  children
}: {
  iconPath: string,
  backgroundColor: string,
  textColor: string,
  title: string,
  paragraphText: string,
  children: any
}) => (
  <div className="
    text-center py-12
    flex flex-col justify-between
    h-full
  " style={{
    backgroundColor: backgroundColor,
    color: textColor
  }}>
    <img
      src={iconPath}
      className="block mx-auto"
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
