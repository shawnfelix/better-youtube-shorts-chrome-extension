// inject code to a tab
function injectScript(tabId) {

    chrome.scripting.executeScript(
        {
            target: {tabId: tabId},
            files: ['inject.js'],
        }
    );

}

// adds a listener to tab change
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // check for a URL in the changeInfo parameter (url is only added when it is changed)
    if (changeInfo.url && tab.url.includes("youtube.com/shorts/")) {
        injectScript(tabId);
    }
});