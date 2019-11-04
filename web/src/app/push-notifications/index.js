import { createNotificationSubscription } from './util'

// Register a Service Worker.
function register() {
  navigator.serviceWorker.register('./sw.js')

  createNotificationSubscription().then(subscription => {
    const payload = JSON.stringify(subscription)
    console.log(payload)

    // TODO set up data model to store json payload
    // Send the subscription details to the server using the Fetch API.
    // fetch("./register", {
    //   method: "post",
    //   headers: {
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     subscription: payload
    //   })
    // });
  })
}

// Unregister a Service Worker.
function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister()
    })
  }
}

export { register, unregister }
