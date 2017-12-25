// convert second to milliseconds
function convertToMilliseconds(exdays: number): number {
  return exdays * 24 * 60 * 60 * 1000;
}

// set cookie whose key is cname, value is cvalue, and exdays as the number of day it exists
function setCookie(cname: string, cvalue: string, exdays: number) {
  let d = new Date();
  d.setTime(d.getTime() + (convertToMilliseconds(exdays)));
  let expires: string = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// get the value of cookie as cname as name
function getCookie(cname: string): string {
  let name: string = cname + "=";
  let ca: string[] = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c: string = ca[i];
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
function checkCookie(cname: string): boolean {
  let user: string = getCookie(cname);
  if (user != "") {
    return true;
  } else {
    return false;
  }
}

// Remove cookie with canme as name
function deleteCookie(cname: string) {
  setCookie(cname, "", -1);
}
