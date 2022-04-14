document.querySelector("#imgurl").addEventListener("input", imagePreview);
document.querySelector("#imgSubmit").addEventListener('click', imageSet);

function imagePreview(){
    var previewURL = document.getElementById("imgurl");
    var previewTarget = document.getElementById("imagePreview");
    previewTarget.innerHTML = '<img src="'+previewURL.value+'"/>';
}

function imageSet(){
    var imgURL = document.getElementById("imgurl");
    chrome.storage.sync.set({"Image":imgURL.value}, function(){
        document.getElementById("imgForm").innerHTML = "<p>設定完了：SOLを再読み込みしてください</p>";
        chrome.storage.sync.get(["Image"], function(result){
            console.log("URL set to "+result.userImgURL);
        });
    });
    
}