$(document).ready(function(){
    $('.slider').bxSlider({
        auto: true,
        autoControls: false,
  stopAutoOnClick: false,
  pager: true,
    });
  });
  AOS.init();
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      nav:true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:3,
          },
          1000:{
              items:5,
          }
      }
  })
  });
setTimeout(loads,'6000')
function loads(){
document.querySelector('.loader').style.display='none'
document.querySelector('.body').style.display='block'
}
setTimeout(bodys,'6000')
function bodys(){
    document.querySelector('body').style.background='black'
    document.querySelector('.body').style.background='white'
}