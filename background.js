"use strict";

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript(null, { file: "content.js" });
});
