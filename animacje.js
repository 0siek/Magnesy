$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + $(window).height(); // Pozycja scrolla
    var aboutOffset = $("#about").offset().top; // Offset sekcji "about"

    if (scroll > aboutOffset) {
      $(".about-content").addClass("about-show"); // Dodaj klasę dla animacji sekcji content
      $(".about-img").addClass("about-img-show"); // Dodaj klasę dla animacji zdjęcia
    }
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + $(window).height(); // Pozycja scrolla
    var expIdOffset = $("#exp-id").offset().top; // Offset sekcji "exp-id"

    if (scroll > expIdOffset) {
      $(".exp-id-content").addClass("exp-id-show"); // Dodaj klasę dla animacji sekcji content
      $(".exp-id-img").addClass("exp-id-img-show"); // Dodaj klasę dla animacji zdjęcia
    }
  });
});
