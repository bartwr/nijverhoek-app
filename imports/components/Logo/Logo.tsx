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
  useEffect(() => {
    const TO = setTimeout(() => {
      FlowRouter.go('index')
    }, 10000);

    // Function that gets exectuted after unmount
    return () => {
      clearTimeout(TO);
    }
  }, []);

  return <div>
    <picture className="text-center">
      <img src={getImage(theme || 'default')} alt="Logo Nijverhoek" className="inline-block" />
    </picture>
  </div>

}
