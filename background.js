
console.log("background js file");



    // var firstProductButton = document.getElementById('firstProduct');
    // firstProductButton.addEventListener('click', function() {
    //   chrome.tabs.executeScript({
    //       code: 'console.log("clicked");',
    //       //file:"popup.js"
    //   }, (results) => {
    //       //Here we have just the innerHTML and not DOM structure
    //       console.log('Popup script:')
    //       console.log(results[0]);
    //   });
    // }, false);

// Initialize Firebase
/*
var config = {
  apiKey: '<YOUR_API_KEY>',
  databaseURL: '<YOUR_DATABASE_URL>',
  storageBucket: '<YOUR_STORAGE_BUCKET_NAME>'
};
firebase.initializeApp(config);

/**
 * initApp handles setting up the Firebase context and registering
 * callbacks for the auth status.
 *
 * The core initialization is in firebase.App - this is the glue class
 * which stores configuration. We provide an app name here to allow
 * distinguishing multiple app instances.
 *
 * This method also registers a listener with firebase.auth().onAuthStateChanged.
 * This listener is called when the user is signed in or out, and that
 * is where we update the UI.
 *
 * When signed in, we also authenticate to the Firebase Realtime Database.
 *
function initApp() {
  // Listen for auth state changes.
  firebase.auth().onAuthStateChanged(function(user) {
    console.log('User state change detected from the Background script of the Chrome Extension:', user);
  });
}

window.onload = function() {
  initApp();
};
*/