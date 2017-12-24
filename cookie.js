// convert second to milliseconds
function convertToMilliseconds(exdays) {
    return exdays * 24 * 60 * 60 * 1000;
}
// set cookie whose key is cname, value is cvalue, and exdays as the number of day it exists
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (convertToMilliseconds(exdays)));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// get the value of cookie as cname as name
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// check if cookie with cname as name exist
function checkCookie(cname) {
    var user = getCookie(cname);
    if (user != "") {
        return true;
    }
    else {
        return false;
    }
}
// Remove cookie with canme as name
function deleteCookie(cname) {
    setCookie(cname, "", -1);
}
