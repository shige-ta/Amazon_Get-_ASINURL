
chrome.tabs.getSelected(null, function(tab){  
    let url = tab.url;
    let startnum;
    console.log(url);
    let substr01;
    while(1){
        let startnum_dp = url.indexOf("/dp/");
        let startnum_product = url.indexOf("/product/");
        if(startnum_dp != -1){
            startnum = startnum_dp;
            substr01 = url.substr(startnum + 4);
            break;
        }
        else if(startnum_product != -1){
            startnum = startnum_product;
            substr01 = url.substr(startnum + 9);
            break;
        }
    }
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


