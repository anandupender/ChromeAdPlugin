document.addEventListener('DOMContentLoaded', function() {

  var checkPageButton = document.getElementById('test');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.executeScript({
        //code: 'console.log("made it");',
        file:"popup.js"
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
    });
  }, false);

  var firstProductButton = document.getElementById('firstProduct');
    firstProductButton.addEventListener('click', function() {
      chrome.tabs.executeScript({
          code: 'console.log("clicked");',
          //file:"popup.js"
      }, (results) => {
          //Here we have just the innerHTML and not DOM structure
          console.log('Popup script:')
          console.log(results[0]);
      });
    }, false);

}, false);


// var signInButton = document.getElementById('sign-in-button');

// //bind button to sign on
// signInButton.addEventListener('click', function() {
//     console.log("made it to signin");
//     //init provider
//     var provider = new firebase.auth.GoogleAuthProvider();

//     //bind sign in button
//     firebase.auth().signInWithPopup(provider).then(function(result) {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         var token = result.credential.accessToken;
//         // The signed-in user info.
//         var user = result.user;

//         console.log("successful sign in");

//         var userId = firebase.auth().currentUser;
//         console.log("user id: ", userId);
//         // ...
//     }).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//     });

//     // Bind Sign out button.
//     signOutButton.addEventListener('click', function() {
//         firebase.auth().signOut();
//     });

//     // Listen for auth state changes
//     firebase.auth().onAuthStateChanged(onAuthStateChanged);
// });

// //Triggers every time there is a change in the Firebase auth state
// function onAuthStateChanged(user) {
//     // We ignore token refresh events.
//     if (user && currentUID === user.uid) {
//         return;
//     }

//     if (user) {
//         currentUID = user.uid;
//         splashPage.style.display = 'none';
//         personaTagPage.style.display = '';
//         writeUserData(user.uid, user.displayName, user.email, user.photoURL);
//     } else {
//         // Set currentUID to null.
//         currentUID = null;
//         // Display the splash page where you can sign-in.
//         splashPage.style.display = '';
//     }
// }

// //write user data
// function writeUserData(userId, name, email) {
//     firebase.database().ref('users/' + userId).set({
//         username: name,
//         email: email
//     });
// }


