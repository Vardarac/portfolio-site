var ready = function() {
  if(window.isStaticPage) {
    var standardPCWidth = 250;
    var standardPCHeight = 200;
    $("body").css({
      "background": "url(https://s3-us-west-1.amazonaws.com/vardarac-common/portfolio-images/background.jpg) no-repeat center center fixed",
      "-webkit-background-size": "cover",
         "-moz-background-size": "cover",
           "-o-background-size": "cover",
              "background-size": "cover",
      "background-color": "black"
    });

    $("#vardarac-animation").css({
      width: $(window).width()
    });

    $(".anim-container-main").css({
      height: $(".vardarac-main").height()*.6
    });
    $(".anim-container-reflection").css({
      height: $(".vardarac-reflection").height()*.6/2
    });
    $(".anim-container-slogan").css({
      height: $(".slogan").height(),
      width: $(".slogan").width()*1.01
    });
    $(".vardarac-main").css({
      bottom: -$(".vardarac-main").height(),
      opacity: 1
    });
    $(".vardarac-reflection").css({
      top: -$(".vardarac-reflection").height()*.7,
      opacity: .5
    });

    var originalContainerHeight = $("#vardarac-animation").height();
    var originalMenuHeight = $("#home-menu").height();

    $("#home-menu").css({
      height: 0
    });

    $(window).resize(function() {
      $("#vardarac-animation").css({
        height: $(window).height(),
        width: $(window).width()
      });
    });
    $(window).resize();

    $(".slogan").css({
      left: -$(".slogan").width(),
      opacity: 1
    });
    $(".vardarac-reflection").css({
      top: -$(".vardarac-reflection").height()*.7,
      opacity: .5
    });
    $(".vardarac-main").animate({
      bottom: "-35%"
    }, animateTime);
    $(".vardarac-reflection").animate({
      top: "-120%"
    }, animateTime, function() {
      $(".slogan").animate({
        left: 0
      }, animateTime/4, function() {
        $("#vardarac-animation").animate({
          height: originalContainerHeight
        }, animateTime);
        $("#home-projects").css({
          opacity: 1
        });
        $("#home-projects").animate({
          height: $(window).height() - originalContainerHeight - originalMenuHeight
        }, animateTime, function() {
          $(".project-container").animate({
            opacity: 1
          }, animateTime);
          $("#home-menu").animate({
            height: originalMenuHeight
          }, animateTime/4, function () {
            $("#home-menu").animate({
              opacity: 1
            }, animateTime);
          });
        });
        if($("#home-projects").length <= 0){
          $("#home-menu").css({
            height: originalMenuHeight,
            opacity: 1
          });
        } else {
          document.cookie="seen_intro= true"
        }
        $(window).off("resize");
        $(window).resize(function() {
          $("#vardarac-animation").css({
            width: $(window).width()
          });
          $("#home-projects").css({
            height: $(window).height() - originalContainerHeight - originalMenuHeight
          });
        });
        $(window).resize();
      });
    });
  }
};

$(document).on("page:change", ready);