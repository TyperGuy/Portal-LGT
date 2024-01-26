export function osfunction() {
    let os = navigator.userAgent;
  
    if (os.search("Mac") !== -1) {
      return true;
    } else return false;
  }