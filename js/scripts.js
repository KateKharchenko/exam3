function initMap() {
        var beetroot = {lat: -7.9300552, lng: 112.6333475};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: beetroot
        });
        var marker = new google.maps.Marker({
          position: beetroot,
          map: map,
          icon: 'img/pinlocation.svg'
        });
      }

$('.on__menu').on('click', function(e){
    e.preventDefault();
    $('.header__navlist').toggle('.active');
  });


$('.slider').slick({
      slidesToShow: 1,
      dots: true,
      arrows: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      
    });
$('.multiple-items').slick({
      arrows: true,
      prevArrow: '<button type="button" class="slick-arrow slick-previ"><span>Previous</span></button>',
      nextArrow: '<button type="button" class="slick-arrow slick-nexti"><span>Next</span></button>',
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: false,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]   
    });
$(document).ready(function(){
    $("#top").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
