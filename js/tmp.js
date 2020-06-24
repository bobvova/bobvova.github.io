// From: www.w3schools.com/html/html5_webstorage.asp
function visitCounter() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.visitcount) {
      localStorage.visitcount = Number(localStorage.visitcount)+1;
    } else {
      localStorage.visitcount = 1;
    }
    document.getElementById("counter").innerHTML = "You have viewed this page " + localStorage.visitcount + " time(s).";
  } else {
    document.getElementById("counter").innerHTML = "localStorage not supported.";
  }
}
