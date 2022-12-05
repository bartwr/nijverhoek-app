import React, {useEffect} from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

const getImage = (theme) => {
  if(! theme) theme = 'default';

  const images = {
    'white-transparent': '/images/logo/nijverhoek-logo-wit.png',
    'default': '/images/logo/nijverhoek-logo-rood.png'
  };
  return images[theme];
}

export const Logo = ({
  theme,
  onClick
}: {
  theme?: string,
  onClick?: Function
}) => {
  const imagePath = getImage(theme || 'default');

  return <div>
    <picture className="text-center">
      <img
         srcSet={`
          ${imagePath.replace('.png', '@3x.png')} 3x,
          ${imagePath.replace('.png', '@3x.png')} 2x,
          ${imagePath} 1x
        `}
        src={imagePath}
        alt="Logo Nijverhoek"
        className="inline-block" />
    </picture>
  </div>

}
