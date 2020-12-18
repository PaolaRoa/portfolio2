window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("header");
var logo = document.getElementById("logo-menu");
var sticky = header.offsetTop;
var bars = document.getElementsByClassName("bar")
var inicio= document.getElementById("inicio");

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("menu-scroll");
    logo.innerHTML = '<img class="logo-2" src="images/logo.png" alt="" />';

  }
   else {
    header.classList.remove("menu-scroll");
    logo.innerHTML = '<img class="logo" src="images/logoPR.png" alt="" />';
  }
/*aca le digo que si el scroll es mayor a la altura del header me agregue la clase progress que tiene la animacin*/
  if (window.pageYOffset > inicio.scrollHeight){
    for (i=0; i< bars.length;i++){
      bars[i].classList.add("progress")
    }
  }
}

