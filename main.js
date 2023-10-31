$(document).ready(function () {
  $(".studioLogo").click(function () {
    location.reload();
  });
  $(".largeButton").click(function () {
    $(".left").removeClass("left").addClass("hiddenLeft contact").hide();
    $(".mid").removeClass("mid").addClass("left");
    $(".right").removeClass("right").addClass("mid");
    $(".hiddenRight")
      .show()
      .removeClass("hiddenRight")
      .addClass("right")
      .children()
      .scrollTop(0);
    $(".hiddenLeft").removeClass("hiddenLeft").addClass("hiddenRight");
    if ($(".mid").hasClass("contact")) {
      $(".hiddenRight").removeClass("about").addClass("contact");
      $(".hiddenLeft").removeClass("contact").addClass("about");
      $(".titleAbout").removeClass("selected");
      $(".titleContact").addClass("selected");
    } else {
      $(".hiddenRight").removeClass("contact").addClass("about");
      $(".hiddenLeft").removeClass("about").addClass("contact");
      $(".titleAbout").addClass("selected");
      $(".titleContact").removeClass("selected");
    }
  });
  $(".titleAbout").click(function () {
    if ($(".mid").hasClass("contact")) {
      $(".left").removeClass("left").addClass("hiddenLeft contact").hide();
      $(".mid").removeClass("mid").addClass("left");
      $(".right").removeClass("right").addClass("mid");
      $(".hiddenRight")
        .show()
        .removeClass("hiddenRight")
        .addClass("right")
        .children()
        .scrollTop(0);
      $(".hiddenLeft").removeClass("hiddenLeft").addClass("hiddenRight");
      $(".hiddenRight").removeClass("contact").addClass("about");
      $(".hiddenLeft").removeClass("about").addClass("contact");
      $(".titleAbout").addClass("selected");
      $(".titleContact").removeClass("selected");
    }
  });
  $(".titleContact").click(function () {
    if ($(".mid").hasClass("about")) {
      $(".left").removeClass("left").addClass("hiddenLeft contact").hide();
      $(".mid").removeClass("mid").addClass("left");
      $(".right").removeClass("right").addClass("mid");
      $(".hiddenRight")
        .show()
        .removeClass("hiddenRight")
        .addClass("right")
        .children()
        .scrollTop(0);
      $(".hiddenLeft").removeClass("hiddenLeft").addClass("hiddenRight");
      $(".hiddenRight").removeClass("about").addClass("contact");
      $(".hiddenLeft").removeClass("contact").addClass("about");
      $(".titleAbout").removeClass("selected");
      $(".titleContact").addClass("selected");
    }
  });
});
