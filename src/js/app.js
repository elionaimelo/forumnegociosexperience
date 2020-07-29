$(document).on("ready", function () {
  
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: "30px",
          adaptiveHeight: true,
        },
      },
    ],
  });  
  $(".regular1").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: "30px",
          adaptiveHeight: true,
        },
      },
    ],
  });

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		$('.regular').slick('setPosition');
		$('.regular1').slick('setPosition');
	});
});




var estado = 0,
  vw = $(window).width();
$(".nav-mb li a").click(function () {
  var delay_time = 0;
  $("#hamburger").toggleClass("open");
  if (estado === 0) {
    TweenMax.to($("#bg-menu-mobile"), 1, {
      x: -vw,
      ease: Expo.easeInOut,
    });

    $(".nav-mb li").each(function () {
      TweenMax.to($(this), 1.2, {
        x: -vw,
        scaleX: 1,
        delay: delay_time,
        ease: Expo.easeInOut,
      });
      delay_time += 0.04;
    });
    estado = 1;
  } else {
    estado = 0;
    TweenMax.to($("#bg-menu-mobile"), 1.2, {
      x: 0,
      ease: Expo.easeInOut,
    });
    $(".nav-mb li").each(function () {
      TweenMax.to($(this), 1, {
        x: 0,
        delay: delay_time,
        ease: Expo.easeInOut,
      });
      delay_time += 0.02;
    });
  }
});

var estado = 0,
  vw = $(window).width();
$("#hamburger").click(function () {
  var delay_time = 0;
  $(this).toggleClass("open");

  if (estado === 0) {
    TweenMax.to($("#bg-menu-mobile"), 1, {
      x: -vw,
      ease: Expo.easeInOut,
    });

    $(".nav-mb li").each(function () {
      TweenMax.to($(this), 1.2, {
        x: -vw,
        scaleX: 1,
        delay: delay_time,
        ease: Expo.easeInOut,
      });
      delay_time += 0.04;
    });
    estado = 1;
  } else {
    estado = 0;
    TweenMax.to($("#bg-menu-mobile"), 1.2, {
      x: 0,
      ease: Expo.easeInOut,
    });
    $(".nav-mb li").each(function () {
      TweenMax.to($(this), 1, {
        x: 0,
        /*
    x:vw,
    scaleX: 2.3,
    */
        delay: delay_time,
        ease: Expo.easeInOut,
      });
      delay_time += 0.02;
    });
  }
});

$("#carosel1").carousel({
  interval: 10000000000 * 10,
  wrap: false,
});

var prev = document.getElementById("bt-prev");
var next = document.getElementById("bt-next");

count = 1;

prev.onclick = function () {
  if (count > 1) {
    count -= 1;
    document.getElementById("output").innerHTML = count;
  }
};
next.onclick = function () {
  if (count >= 1 && count < 10) {
    count += 1;
    document.getElementById("output").innerHTML = count;
  }
};

// Set the date we're counting down to
var countDownDate = new Date("Nov 6, 2020 8:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(hours<10){
    hours = '0'+hours;
  }
  if(minutes<10){
    minutes = '0'+minutes;
  }

  if(seconds<10){
    seconds = '0'+seconds;
  }
 

  // Output the result in an element with id="timer"
  document.getElementById("timer").innerHTML =
    days +
    " <span class='dois'>&thinsp;:&thinsp;</span> " +
    hours +
    " <span class='dois'>&thinsp;:&thinsp;</span> " +
    minutes +
    " <span class='dois'>&thinsp;:&thinsp;</span> " +
    seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "É HOJE";
  }
}, 1000);

if ($(this).scrollTop() == 0) {
  $("#newsletter").hide();
}
$(window).scroll(function () {
  if ($(this).scrollTop() >= 740) {
    $("#newsletter").show();
    $("#section1").hide();
  } else {
    $("#newsletter").hide();
    $("#section1").show();
  }
});

$.fn.isOnScreen = function () {
  var win = $(window);
  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft(),
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();
  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();
  return !(
    viewport.right < bounds.left ||
    viewport.left > bounds.right ||
    viewport.bottom < bounds.top ||
    viewport.top > bounds.bottom
  );
};

$(window).scroll(function () {
  if ($("#section9").isOnScreen() == true) {
    $("#botao-fixo").hide();
  }else if($("#footer").isOnScreen() == true) {
    $("#botao-fixo").hide();
  }else {
    $("#botao-fixo").show();
  }

});

var width = $(window).width();
if (width <= 720) {
  
  $('.2019').each(function() {
    var text = $(this).text();
    $(this).text(text.replace('Fórum Negócios 2019', 'FN 2019')); 
 
  });
  $('.2018').each(function() {
    var text = $(this).text();
    $(this).text(text.replace('Fórum Negócios 2018', 'FN 2018')); 
 
  });

  if ($(this).scrollTop() == 0) {
    $("#newsletter").hide();
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 600) {
      $("#newsletter").show();
      $("#section1").hide();
    } else {
      $("#newsletter").hide();
      $("#section1").show();
    }
  });
}


// $(document).ready(function () {
//   $('.nav-tabs').css("border-color","#7300C7");
//   $('.2019').css("border-color","#7300C7");
//   $('.2019').click(function (event) {
//       event.preventDefault();
//       $(this).css("border-color","#7300C7");//more efficient
//       $('.nav-tabs').css("border-color","#7300C7");
//       return false;
//   });
//   $('.2018').click(function (event) {
//       event.preventDefault();
//       $('.2019').css("border-color","rgba(167, 106, 237,0.5)");//more efficient
//       $('.nav-tabs').css("border-color","rgba(167, 106, 237,0.5)");
//       return false;
//   });
// });

