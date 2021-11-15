function button_press() {
    var x = document.getElementById("navlinks");
    var y = document.getElementById("button")
    if (x.style.maxHeight === "432px") {
      x.style.maxHeight = "0px";
      x.style.boxShadow = "none";
      y.style.backgroundImage = "url(buttons/hamburger.png";
    } else {
      x.style.maxHeight = "432px";
      x.style.boxShadow = "0px 0px 10px 5px rgba(0,0,0,0.3)";
      y.style.backgroundImage = "url(buttons/close.png";
    }
}