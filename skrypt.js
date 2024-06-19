$(document).ready(function () {
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });

  var typed = new Typed(".element", {
    strings: ["są wytrzymałem", "zrobione z sklejki", "posiadają nadruk UV"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopcount: Infinity,
    smartDelay: 1000,
  });

  //progress bars

  // var waypoint = new Waypoint({
  //   element: document.getElementById("exp-id"),
  //   handler: function () {
  //     var p = document.querySelectorAll(".progress-bar");
  //     p[0].setAttribute("style", "width:95%; transition:1s all");
  //     p[1].setAttribute("style", "width:100%; transition:1s all");
  //     p[2].setAttribute("style", "width:86%; transition:1s all");
  //     p[3].setAttribute("style", "width:69%; transition:1s all");
  //   },
  //   offset: "90%",
  // });

  var filterizd = $(".filter-container").filterizr({
    animationDuration: 0.5,
  });

  $("a").smoothScroll({
    speed: 2000,
  });
});
