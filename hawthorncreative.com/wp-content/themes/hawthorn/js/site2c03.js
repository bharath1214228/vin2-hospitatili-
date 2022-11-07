jQuery(document).ready(function($) {

/*
$('.slider').bxSlider( {
        controls: false,
        auto: true,
        pause: 3000,
        infiniteLoop: true,
      });
*/

$('.text-slider').bxSlider( {
        controls: true,
        auto: true,
        pause: 3000,
        infiniteLoop: true,
        onSlideAfter:function(){
            $('.text-slider [aria-hidden="false"]').addClass('active');
            $('.text-slider [aria-hidden="true"]').removeClass('active');
          },
        onSliderLoad:function(){
            $('.text-slider [aria-hidden="false"]').addClass('active');
            $('.text-slider [aria-hidden="true"]').removeClass('active');
          }
      });

$('.grid').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  // use element for option
  columnWidth: '.grid-sizer',
  percentPosition: true
})

$('#toggle').click(function() {
    $(this).toggleClass('toggle-active');
    $('#overlay').toggleClass('nav-active');
    $('.toggle-wrapper').toggleClass('toggle-active');
    $('.site-logo').toggleClass('logo-active');
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("hero-row-2");
var nav = document.getElementById("hero-nav");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}


$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];

  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });

  window.addEventListener('scroll', function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }, {passive: true});
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});


      AOS.init({
        easing: 'ease-in-out-sine'
      });

$(function() {
    var rotation = 0,
        scrollLoc = $(document).scrollTop();
    $(window).scroll(function() {
        var newLoc = $(document).scrollTop();
        var diff = scrollLoc - newLoc;
        rotation += diff, scrollLoc = newLoc;
        var rotationStr = "rotate(" + rotation + "deg)";
        $(".circle-icon").css({
            "-webkit-transform": rotationStr,
            "-moz-transform": rotationStr,
            "transform": rotationStr
        });
    });
})


    $('.social-share').on("click", function(e){
        e.preventDefault();
        var width = $(this).attr('data-width'),
            height = $(this).attr('data-height');
        window.open(this.href,'targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=' + width + ', height=' + height);
        return false;
    });


});

$('[data-fancybox]').fancybox({
    loop : true
});



// Allow :active and :hover styles to work for touch
document.addEventListener("touchstart", function(){}, true);
