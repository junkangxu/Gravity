function setLocalStorage(cname: string, cvalue: string) {
  localStorage.setItem(cname, cvalue);
}

function getLocalStorage(cname: string): string {
  return localStorage.getItem(cname);
}

function checkLocalStorage(cname: string): boolean {
  let cvalue: string = getLocalStorage(cname);
  if (cvalue !== null) {
    return true;
  } else {
    return false;
  }
}

function removeLocalStorage(cname: string) {
  localStorage.removeItem(cname);
}
