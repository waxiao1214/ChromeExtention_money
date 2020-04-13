chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.action == 'start') {
    var interval = setInterval(myTimer, 2000);
    function myTimer() {
      var letter = "";
      letter += $('#cimg1 img')[0].src.split('/')[5].slice(0, 1).toString();
      letter += $('#cimg2 img')[0].src.split('/')[5].slice(0, 1).toString();
      letter += $('#cimg3 img')[0].src.split('/')[5].slice(0, 1).toString();

      //input value in text box
      $('input[type="text"]').val(letter);

      // click continue button
      $('input[type="button"]').trigger('click');
    }
  }
  // if (msg.action == 'stop') {

  // }
});