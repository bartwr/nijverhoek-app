import React from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import {LayoutWithLargeIcon} from '../LayoutWithLargeIcon/LayoutWithLargeIcon';

export const CheckOutDone = () => (
  <LayoutWithLargeIcon
    iconPath="/images/components/CheckOutDone/jay-lock-square.gif"
    backgroundColor="#EA5C33"
    textColor="#fff"
    title="Check out"
    paragraphText="Doe de deur op slot"
    onClick={() => {
      FlowRouter.go('index')
    }}
  >
  </LayoutWithLargeIcon>
);
