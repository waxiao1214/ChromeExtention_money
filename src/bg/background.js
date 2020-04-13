// chrome.runtime.onConnect.addListener(function (port) {
//   console.assert(port.name == 'start');
//   port.onMessage.addListener(function (msg) {
//     if (msg.data == 'start') {
//       console.log('received start');
//       port.postMessage({
//         data: 'scrape'
//       });
//     }
//   });
// });