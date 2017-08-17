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

