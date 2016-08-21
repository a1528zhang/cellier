export function cutUrl(originalUrl){
    let start = originalUrl.indexOf("#/")+2;
    let end = originalUrl.indexOf("?");
    let startsententce = originalUrl.substring(start,end);
    return startsententce;
}

export function  underScroll(callback) {

    var windowObj = $(window.top);
    var scrollTop = windowObj.scrollTop();
    var scrollHeight = $(document).height();
    var windowHeight = windowObj.height();
    if (scrollTop + windowHeight == scrollHeight) {
        callback();
    }
}