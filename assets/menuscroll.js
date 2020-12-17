window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("header");
var logo = document.getElementById("logo-menu");
var sticky = header.offsetTop;
var bars = document.getElementsByClassName("bar")
var skill= document.getElementById("about-me");

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("menu-scroll");
    logo.innerHTML = '<img class="logo" src="images/logo.png" alt="" />';
    /*for (i=0; i< bars.length;i++){
      bars[i].classList.add("progress")
    }
*/
  }
   else {
    header.classList.remove("menu-scroll");
    logo.innerHTML = '<img class="logo" src="images/logoPR.png" alt="" />';
  }

  if (window.pageYOffset > header.scrollHeight){
    for (i=0; i< bars.length;i++){
      bars[i].classList.add("progress")
    }
  }
}

