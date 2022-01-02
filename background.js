chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.storage.sync.set({bg: request.bg}, function() {
      console.log('Value is set to ' + request.bg);
    });

    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
      sendResponse({farewell: "goodbye"});
  });