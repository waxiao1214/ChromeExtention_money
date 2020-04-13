
$(document).ready(function() {
  $(document).on('click', '#start', function (){
    var payload = {
      action: 'start',
    }
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      chrome.tabs.sendMessage(tabs[0].id, payload);
    });
  });

  // $(document).on('click', '#stop', function (){
  //   var payload = {
  //     action: 'stop',
  //   }
  //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  //     chrome.tabs.sendMessage(tabs[0].id, payload);
  //   });
  // });
});