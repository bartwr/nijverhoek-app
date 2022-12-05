import React, {useEffect} from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import {LayoutWithLargeIcon} from '../LayoutWithLargeIcon/LayoutWithLargeIcon';

export const CheckOutDone = () => {
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
    iconPath="/images/components/CheckOutDone/jay-lock-square.gif"
    backgroundColor="#EA5C33"
    textColor="#fff"
    title="Check uit"
    paragraphText="Doe de deur op slot"
    onClick={() => {
      FlowRouter.go('index')
    }}
  >
  </LayoutWithLargeIcon>
}