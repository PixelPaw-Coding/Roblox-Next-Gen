document.getElementById('reloadBtn').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    if (tabs.length > 0) {
      chrome.scripting.insertCSS({
        target: { tabId: tabs[0].id },
        files: ['styles.css']
      });
      chrome.tabs.reload(tabs[0].id);
      console.log("Roblox Next Gen 2.0 applied! ⚡");
    }
  });
});
