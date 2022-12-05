import React, {useEffect} from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import {LayoutWithLargeIcon} from '../LayoutWithLargeIcon/LayoutWithLargeIcon';

export const CheckInDone = () => {
  useEffect(() => {
    const TO = setTimeout(() => {
      FlowRouter.go('index')
    }, 10000);

    // Function that gets exectuted after unmount
    return () => {
      clearTimeout(TO);
    }
  }, []);

  return <LayoutWithLargeIcon
    iconPath="/images/icon/checkmark-white.svg"
    backgroundColor="#9CC192"
    textColor="#fff"
    title="Check in"
    paragraphText="Succes met slopen!"
    onClick={() => {
      FlowRouter.go('index')
    }}
  >
  </LayoutWithLargeIcon>
}