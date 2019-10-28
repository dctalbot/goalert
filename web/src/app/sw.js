// // Register event listener for the 'push' event.
self.addEventListener('push', function(event) {
  console.log(event)
  // Keep the service worker alive until the notification is created.
  event.waitUntil(
    // Show a notification with title 'ServiceWorker Cookbook' and body 'Alea iacta est'.
    self.registration.showNotification('GoAlert', {
      badge:
        'https://raw.githubusercontent.com/target/goalert/master/web/src/app/public/favicon-64.png',
      body: 'You have a new alert',
      // data: {
      //   url: JSON.parse(event.message).url,
      // },
      icon:
        'https://raw.githubusercontent.com/target/goalert/master/web/src/app/public/favicon.ico',
      lang: 'en',
      requireInteraction: true,
      silent: false,
    }),
  )
})
