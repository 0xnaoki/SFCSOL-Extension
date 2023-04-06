if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded',updateImage);
} else {
    updateImage();
}

function updateImage(){
    chrome.storage.sync.get(["Image"], function(result){
        const image = result.Image;

        //update point 1 : profile Image on sidebar - src override
        var target = document.getElementsByClassName("ic-avatar");
        target[0].innerHTML = "<img src= "+image+">";

        //update point 2 : profile Image on extended sidebar - background-image override
        var newStyle = document.createElement("style");
        newStyle.type = "text/css";
        newStyle.innerText = '.tray-with-space-for-global-nav span[src]{background-image: url("'+image+'") !important;}'
        document.getElementsByTagName("head").item(0).appendChild(newStyle);
        
    });  
};

