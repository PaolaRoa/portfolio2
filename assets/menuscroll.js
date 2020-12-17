window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("header");
var logo = document.getElementById("logo-menu");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("menu-scroll");
    logo.innerHTML = '<img class="logo" src="images/logo.png" alt="" />';
  } else {
    header.classList.remove("menu-scroll");
    logo.innerHTML = '<img class="logo" src="images/logoPR.png" alt="" />';
  }
}

//ensayito de las barras de progreso
