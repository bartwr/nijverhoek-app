import React, {useEffect} from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import {LayoutWithLargeIcon} from '../LayoutWithLargeIcon/LayoutWithLargeIcon';

function showNotification() {
  if(! navigator.serviceWorker) return;
  Notification.requestPermission((result) => {
    if (result === "granted") {
      // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification("Je bent ingecheckt", {
          body: "Klik om uit te checken",
          silent: true,
          icon: 'https://app.nijverhoek.nl/images/icons-sloophoek-512.png',
          badge: 'https://app.nijverhoek.nl/images/icons-sloophoek-192.png',
          tag: "nijverhoek-checked-in",
          requireInteraction: true,
          actions: [
             {
               action: 'check-out-url',
               title: 'Check uit'
             }
          ]
        });
      });
    }
  });
}

export const CheckInDone = () => {

  useEffect(() => {
    const houseNumber = localStorage.getItem('SLOOPHOEK__houseNumber');
    // if(houseNumber == '2' || houseNumber == '31') {
    if(houseNumber == '2') {
      showNotification();
    }

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