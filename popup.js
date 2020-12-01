
chrome.tabs.getSelected(null, function(tab){  
    let url = tab.url;
    console.log(url);
    let startnum = url.indexOf("/dp/");
    console.log(startnum);
    let substr01 = url.substr(startnum + 4);
    console.log(substr01);
    let endnum;
    while(1){
        let endnum01 = substr01.indexOf("/");
        let endnum02 = substr01.indexOf("?");
        if(endnum01 != -1){
            endnum = endnum01;
            break;
        }
        else if(endnum02 != -1){
            endnum = endnum02;
            break;
        }
    }
    console.log(endnum);
    if(endnum == -1){
        endnum = substr01.length;
    }
    let ASIN = substr01.substr(0, endnum);
    console.log(ASIN);
    clipboadURL = "https://www.amazon.co.jp/dp/" + ASIN;
    if(navigator.clipboard){
        navigator.clipboard.writeText(clipboadURL);
    }

})


