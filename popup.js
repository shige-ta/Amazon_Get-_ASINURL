
chrome.tabs.getSelected(null, function(tab){  
    let url = tab.url;
    let startnum;
    console.log(url);
    let substr01;
    let startnum_dp = url.indexOf("/dp/");
    let startnum_product = url.indexOf("/product/");
    if(startnum_dp != -1){
        startnum = startnum_dp;
        substr01 = url.substr(startnum + 4);
    }
    else if(startnum_product != -1){
        startnum = startnum_product;
        substr01 = url.substr(startnum + 9);
    }
    console.log(substr01);
    let endnum = -1;
    let endnum01 = substr01.indexOf("/");
    let endnum02 = substr01.indexOf("?");
    if(endnum01 != -1){
        endnum = endnum01;
    }
    else if(endnum02 != -1){
        endnum = endnum02;
    }
    console.log(endnum);
    if(endnum == -1){
        endnum = substr01.length;
    }
    let ASIN = substr01.substr(0, endnum);
    console.log(ASIN);
    clipboadURL = "https://www.amazon.co.jp/dp/" + ASIN;
    document.getElementById("test").value = clipboadURL;

    document.oncopy = function(event) {
        event.clipboardData.setData("text/plain", clipboadURL);
        event.preventDefault();
      };
      document.execCommand("copy", false, null);
})


