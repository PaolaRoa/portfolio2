window.onscroll = function() {myFunction()};
  
  var header = document.getElementById("header");
  var sticky = header.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("menu-scroll");
    } else {
      header.classList.remove("menu-scroll");
    }
  }