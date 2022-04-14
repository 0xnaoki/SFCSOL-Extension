chrome.runtime.onInstalled.addListener(() => {
        const defaultURL = chrome.runtime.getURL("images/default.png");
        chrome.storage.sync.set({"Image":defaultURL}, function(){
            console.log("SFCSOL Extention : sucessfully installed");
        });
});