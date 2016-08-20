export function cutUrl(originalUrl){
    let start = originalUrl.indexOf("#/")+2;
    let end = originalUrl.indexOf("?");
    let startsententce = originalUrl.substring(start,end);
    return startsententce;
}