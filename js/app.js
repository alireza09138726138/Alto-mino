$(document).ready(function(){
    $(".butn").click(function(){
      $("input").toggle("mar");
    });


  });

  // window scroll top for remove assign of nav
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
      $('.img,.img-logo').removeClass('menu');
      $("h5").addClass("h55").removeClass('h5');
      $("nav").addClass("navbar").removeClass('navbarr');
      $(".b-d").addClass("butn").removeClass('butnn');
      $("ul,.navbar-toggler").removeClass('butnn');

    } else {
      document.getElementById("navbar").style.top = "-9px";
      $('.img, .img-logo').addClass('menu');
      $("h1, h2, p").addClass("blue");
      $("h5").addClass("h5").removeClass('h55');
      $("nav").addClass("navbarr").removeClass('navbar');
      $(".b-d, ul").addClass("butnn").removeClass('butn');
      $(".navbar-toggler").addClass("butnn");
      
    }
    prevScrollpos = currentScrollPos;
  }
  // end scroll