function setLocalStorage(cname, cvalue) {
    localStorage.setItem(cname, cvalue);
}
function getLocalStorage(cname) {
    return localStorage.getItem(cname);
}
function checkLocalStorage(cname) {
    var cvalue = getLocalStorage(cname);
    if (cvalue != "") {
        return true;
    }
    else {
        return false;
    }
}
function removeLocalStorage(cname) {
    localStorage.removeItem(cname);
}
