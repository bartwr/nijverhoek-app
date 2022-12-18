// serviceWorker.js
import { Meteor } from 'meteor/meteor'

Meteor.startup(() => {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => console.info('service worker registered'))
    .catch(error => { 
      console.log('ServiceWorker registration failed: ', error)
   })

  self.addEventListener('notificationclick', function(event) {
      let url = 'https://app.nijverhoek.nl/sloop/checkout';
      event.notification.close(); // Android needs explicit close.
      event.waitUntil(
          clients.matchAll({includeUncontrolled: true, type: 'window'}).then( windowClients => {
              // Check if there is already a window/tab open with the target URL
              for (var i = 0; i < windowClients.length; i++) {
                  var client = windowClients[i];
                  // If so, just focus it.
                  if (client.url === url && 'focus' in client) {
                      return client.focus();
                  }
              }
              // If not, then open the target URL in a new window/tab.
              if (clients.openWindow) {
                  return clients.openWindow(url);
              }
          })
      );
  });

})
