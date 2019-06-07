$(".choice2").click(function () {
  $(".core").hide()
  $(".history").hide()
  $(".historyedu").show()
});
$(".choice1").click(function () {
  $(".core").hide()
  $(".historyedu").hide()
  $(".history").show()
})
$(".choice0").click(function () {
  $(".historyedu").hide()
  $(".history").hide()
  $(".core").show()
})
$(".choice3").click(function () {
  $(".ch5content").hide()
  $(".ch4content").hide()
  $(".ch3content").show()
})
$(".choice4").click(function () {
  $(".ch5content").hide()
  $(".ch3content").hide()
  $(".ch4content").show()
})
$(".choice7").click(function () {
  $(".ch6content").hide()
  $(".ch7content").show()
})
$(".choice6").click(function () {
  $(".ch7content").hide()
  $(".ch6content").show()
})
$(".choice5").click(function () {
  $(".ch4content").hide()
  $(".ch3content").hide()
  $(".ch5content").show()
})
$(".choice11").click(function () {
  $(".ch12content").hide()
  $(".ch11content").show()
})
$(".choice12").click(function () {
  $(".ch11content").hide()
  $(".ch12content").show()
})
$(".choice13").click(function () {
  $(".ch14content").hide()
  $(".ch13content").show()
})
$(".choice14").click(function () {
  $(".ch13content").hide()
  $(".ch14content").show()
})
$(".choice10").click(
  function () {
    $("#tolerance").hide();
    $("#historyroots").hide();
    $("#justice").show();
    $(".nav-link").removeClass("active");
    $(".nav-link3").addClass("active");
    $(".story").fadeIn();
  }
)
$(".choice8").click(
  function () {
    $("#tolerance").hide();
    $("#justice").hide();
    $("#historyroots").show();
    $(".nav-link").removeClass("active");
    $(".nav-link1").addClass("active");
    $(".story").fadeIn();
  }
)
$(".choice9").click(
  function () {
    $("#tolerance").show();
    $("#historyroots").hide();
    $("#justice").hide();
    $(".nav-link").removeClass("active");
    $(".nav-link2").addClass("active");
    $(".story").fadeIn();
  }
)
$(".nav-link4").click(
  function () {
    $(".story").fadeOut();
  }
)
$(".nav-link3").click(
  function () {
    $("#tolerance").fadeOut();
    $("#historyroots").fadeOut();
    $(".nav-link").removeClass("active")
    $(".nav-link3").removeClass("active")
    $(this).addClass("active");
    $("#justice").fadeIn()
  }
);
$(".nav-link2").click(
  function () {
    $("#historyroots").fadeOut();
    $("#justice").fadeOut();
    $(".nav-link").removeClass("active");
    $(".nav-link3").removeClass("active");
    $(this).addClass("active");
    $("#tolerance").fadeIn()
  }
)
$(".nav-link1").click(
  function () {
    $("#tolerance").fadeOut();
    $("#justice").fadeOut();
    $(".nav-link").removeClass("active");
    $(".nav-link2").removeClass("active");
    $(this).addClass("active");
    $("#historyroots").fadeIn()
  }
);
$(".limit").click(function () {
  $(".box-white").css("background-color","rgba(0, 0, 0, 0.4)")
  $(".limit-text").css("color","white")
})
$(".box-white:not('.limit')").click(function () {
  $(".box-white").css("background-color","rgba(255, 255, 255, 0.3)")
})
