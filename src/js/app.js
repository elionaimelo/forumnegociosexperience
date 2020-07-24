
var estado = 0,
vw = $(window).width();
$(".bt-duvidas a").click(function() {
var delay_time = 0;
$("#hamburger").toggleClass('open');
if (estado === 0) {
TweenMax.to($("#bg-menu-mobile"), 1, {
  x:-vw,
  ease: Expo.easeInOut
});

$(".nav-mb li").each(function() {
  TweenMax.to($(this), 1.2, {
    x:-vw,
    scaleX: 1,
    delay: delay_time,
    ease: Expo.easeInOut
  });
  delay_time += .04;
});
estado = 1;
} else {
estado = 0;
TweenMax.to($("#bg-menu-mobile"), 1.2, {
  x:0,
  ease: Expo.easeInOut
});
$(".nav-mb li").each(function() {
  TweenMax.to($(this), 1, {
    x:0,
    delay: delay_time,
    ease: Expo.easeInOut
  });
  delay_time += .02;
});
}
});

var estado = 0,
vw = $(window).width();
$("#hamburger").click(function() {
var delay_time = 0;
$(this).toggleClass('open');

if (estado === 0) {
TweenMax.to($("#bg-menu-mobile"), 1, {
  x:-vw,
  ease: Expo.easeInOut
});

$(".nav-mb li").each(function() {
  TweenMax.to($(this), 1.2, {
    x:-vw,
    scaleX: 1,
    delay: delay_time,
    ease: Expo.easeInOut
  });
  delay_time += .04;
});
estado = 1;
} else {
estado = 0;
TweenMax.to($("#bg-menu-mobile"), 1.2, {
  x:0,
  ease: Expo.easeInOut
});
$(".nav-mb li").each(function() {
  TweenMax.to($(this), 1, {
    x:0,
    /*
    x:vw,
    scaleX: 2.3,
    */
    delay: delay_time,
    ease: Expo.easeInOut
  });
  delay_time += .02;
});
}
});

// $(document).ready(function(){
//   $(".regular").slick({
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   });
// });

// Set the date we're counting down to
var countDownDate = new Date("Jul 25, 2020").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

