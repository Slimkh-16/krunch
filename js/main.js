'use strict';

window.onload = function(){
  document.body.classList.add('onload'); 
  setTimeout(function(){
    document.querySelector('.preloader').style.display = 'none';
  },500);
  heightEL();
  height();
  if (document.getElementById('map') != undefined) {
    initialize();
  }
  if (document.querySelector('.right-nav-fix.index') != undefined) {
    if (window.innerWidth > 1023){
      document.querySelector('.right-nav-fix.index').style.height = document.documentElement.clientHeight - 100 + 'px';
    }
    if (window.innerWidth < 1023){
      document.querySelector('.right-nav-fix.index').style.height = '425px';
    }
  }
  var leftOffdet = document.querySelector('.container').offsetLeft;
  if(window.innerWidth > 1599) {
    document.querySelector('.logo').style.left = leftOffdet - 64 + 'px';
  }
  // header and scroll
  var winH = document.documentElement.clientHeight;
  var scrollTop = document.documentElement.scrollTop;
  var scrollTopOl = document.body.scrollTop;
  if (document.querySelector('.header.index') != undefined) {
    if (scrollTop > 200 || scrollTopOl > 200){
      document.querySelector('.header.index').classList.add('sticky'); 
    }else {
      document.querySelector('.header.index').classList.remove('sticky'); 
    }
  }
  if (document.querySelector('.right-nav-fix.index') != undefined) {
    if (scrollTop > (winH - winH*0.6) || scrollTopOl > (winH - winH*0.6) && window.innerWidth > 1023){
      document.querySelector('.right-nav-fix.index').classList.add('small');
    } else {
      document.querySelector('.right-nav-fix.index').classList.remove('small');
    };
    if (scrollTop > 150 || scrollTopOl > 150 && window.innerWidth < 1023){
      document.querySelector('.right-nav-fix.index').classList.add('small');
    }

  }
  // header and scroll
};
window.onresize = function() {
  heightEL();
  height();
  if (document.querySelector('.right-nav-fix.index') != undefined) {
    if (window.innerWidth > 1023){
      document.querySelector('.right-nav-fix.index').style.height = document.documentElement.clientHeight - 100 + 'px';
    }
    if (window.innerWidth < 1023){
      document.querySelector('.right-nav-fix.index').style.height = '425px';
    }
  }
  var leftOffdet = document.querySelector('.container').offsetLeft;
  if(window.innerWidth > 1599) {
    document.querySelector('.logo').style.left = leftOffdet - 64 + 'px';
  }
};
window.onscroll = function(){
  // header and scroll
  var winH = document.documentElement.clientHeight;
  var scrollTop = document.documentElement.scrollTop;
  var scrollTopOl = document.body.scrollTop;
  if (document.querySelector('.header.index') != undefined) {
    if (scrollTop > 200 || scrollTopOl > 200){
      document.querySelector('.header.index').classList.add('sticky'); 
    }else {
      document.querySelector('.header.index').classList.remove('sticky'); 
    }
  }
  if (document.querySelector('.right-nav-fix.index') != undefined) {
    if (scrollTop > (winH - winH*0.6) || scrollTopOl > (winH - winH*0.6) && window.innerWidth > 1023){
      document.querySelector('.right-nav-fix.index').classList.add('small');
    } else {
      document.querySelector('.right-nav-fix.index').classList.remove('small');
    };
    if (scrollTop > 150 || scrollTopOl > 150 && window.innerWidth < 1023){
      document.querySelector('.right-nav-fix.index').classList.add('small');
    }
  }
  // header and scroll
};
var swiper = new Swiper('.slider-big', {
    spaceBetween: 0,
    loop:true,
    parallax: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
});
var swiper = new Swiper('.product-sld', {
    spaceBetween: 0,
    loop:false,
    pagination: '.swiper-pagination--1',
    nextButton: '.swiper-button-next--1',
    prevButton: '.swiper-button-prev--1',
    paginationClickable: true,
    onInit: function (swiper) {
      if (swiper.activeIndex == 0) {
          document.querySelector('.prod-sl-con-1').classList.add('animating')
      }else {
        document.querySelector('.prod-sl-con-1').classList.remove('animating')
      }
    },
    onSlideChangeEnd: function (swiper) {
        if (swiper.activeIndex == 0) {
            document.querySelector('.prod-sl-con-1').classList.add('animating')
        }else {
          document.querySelector('.prod-sl-con-1').classList.remove('animating')
        }
    }
});
var swiper = new Swiper('.product-sld2', {
    spaceBetween: 0,
    loop:false,
    pagination: '.swiper-pagination--2',
    nextButton: '.swiper-button-next--2',
    prevButton: '.swiper-button-prev--2',
    paginationClickable: true,
    onInit: function (swiper) {
      if (swiper.activeIndex == 0) {
          document.querySelector('.prod-sl-con-2').classList.add('animating')
      }else {
        document.querySelector('.prod-sl-con-2').classList.remove('animating')
      }
    },
    onSlideChangeEnd: function (swiper) {
        if (swiper.activeIndex == 0) {
            document.querySelector('.prod-sl-con-2').classList.add('animating')
        }else {
          document.querySelector('.prod-sl-con-2').classList.remove('animating')
        }
    }
});
if (document.querySelector('.header') != undefined) {
  document.querySelector('.butt-nav').onclick = function() {
    document.body.classList.add('hidden');
    document.querySelector('.mobile-nav').style.display = 'block';
    setTimeout(function(){
      document.querySelector('.mobile-nav').classList.add('visible')
    },100)
  };
  document.querySelector('.mobile-nav__close').onclick = function() {
    document.body.classList.remove('hidden');
    document.querySelector('.mobile-nav').classList.remove('visible')
    setTimeout(function(){
      document.querySelector('.mobile-nav').style.display = 'none';
    },600)
  };
}
// modal
if (document.querySelector('.modal') != undefined) {
  document.querySelector('.view-det_mp1').onclick = function() {
    document.body.classList.add('hidden');
    document.querySelector('.modal-mp1').style.display = 'block';
    setTimeout(function(){
      document.querySelector('.modal-mp1').classList.add('visible')
    },100)
  };
  document.querySelector('.view-det_mp2').onclick = function() {
    document.body.classList.add('hidden');
    document.querySelector('.modal-mp2').style.display = 'block';
    setTimeout(function(){
      document.querySelector('.modal-mp2').classList.add('visible')
    },100)
  };
  document.querySelector('.close-modal-1').onclick = function() {
    document.body.classList.remove('hidden');
    document.querySelector('.modal-mp1').classList.remove('visible')
    setTimeout(function(){
      document.querySelector('.modal-mp1').style.display = 'none';
    },600)
  };
  document.querySelector('.close-modal-2').onclick = function() {
    document.body.classList.remove('hidden');
    document.querySelector('.modal-mp2').classList.remove('visible')
    setTimeout(function(){
      document.querySelector('.modal-mp2').style.display = 'none';
    },600)
  };
  document.querySelector('.modal-mp1').onclick = function() {
    document.querySelector('.modal-mp1').classList.remove('visible')
    setTimeout(function(){
      document.querySelector('.modal-mp1').style.display = 'none';
    },600)
  }
  document.querySelector('.modal-mp2').onclick = function() {
    document.querySelector('.modal-mp2').classList.remove('visible')
    setTimeout(function(){
      document.querySelector('.modal-mp2').style.display = 'none';
    },600)
  }
}
// modal
// height contact
function heightEL(){
  var elH = document.getElementsByClassName("contact-item");
  var maxHeight = 0;
  for (var i = 0; i < elH.length; ++i) {
    elH[i].style.height = "";
    if (maxHeight < elH[i].clientHeight) {
      maxHeight = elH[i].clientHeight; 
    }
  }
  for (var i = 0; i < elH.length; ++i) {
    elH[i].style.height = maxHeight + "px";
  }
}
function height(){
  var el = document.getElementsByClassName("product-box__it");
  var maxH = 0;
  for (var i = 0; i < el.length; ++i) {
    el[i].style.height = "";
    if (maxH < el[i].clientHeight) {
      maxH = el[i].clientHeight; 
    }
  }
  for (var i = 0; i < el.length; ++i) {
    el[i].style.height = maxH + "px";
  }
}
// input animation
(function() {
  if (!String.prototype.trim) {
    (function() {
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
        return this.replace(rtrim, '');
      };
    })();
  }

  [].slice.call( document.querySelectorAll( '.input-anim' ) ).forEach( function( inputEl ) {
    if( inputEl.value.trim() !== '' ) {
      classie.add( inputEl.parentNode, 'input--filled' );
    }

    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  } );

  function onInputFocus( ev ) {
    classie.add( ev.target.parentNode, 'input--filled' );
  }
  function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' ) {
      classie.remove( ev.target.parentNode, 'input--filled' );
    }
  }
})();
// input animation
// map box
function initialize() {
  var myLatlng = new google.maps.LatLng(35.162604, 33.365744);
  var mapOptions = {
    zoom: 18,
    center: myLatlng,
    scrollwheel: false,
    disableDefaultUI: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    // icon: 'images/marker.png'
  });
};
// map box
// circles
// if (document.querySelector('.circle') != undefined) {
//   if (window.innerWidth > 700) {
//     var rad_e = 107;
//     var crc_W = 26;
//     createCircles(rad_e,crc_W)
//   } else {
//     var rad_e = 60;
//     var crc_W = 14;
//     createCircles(rad_e,crc_W)
//   }
// }

// function createCircles(rad_e,crc_W) {

//   var colors = [
//       ['#ffffff', '#4e658e'], ['#ffffff', '#689f38'], ['#ffffff', '#ef6c00'],
//       ['#ffffff', '#4e658e'], ['#ffffff', '#689f38'], ['#ffffff', '#ef6c00']
//     ],
//     circles = [];
//       console.log(rad_e)
//   for (var i = 1; i <= colors.length; i++) {
//     var child = document.getElementById('circles-' + i),
//         data_max = child.getAttribute('data-max'),
//         data_tek = child.getAttribute('data-tek'),
//       circle = Circles.create({
//         id:         child.id,
//         value:      data_tek,
//         maxValue:   data_max,
//         text:    function(value){return value + 'min.';},
//         radius:     rad_e,
//         width:      crc_W,
//         colors:     colors[i - 1]
//       });
//     circles.push(circle);
//   }

// }
if (document.querySelector('.circle') != undefined) { 
  (function() {
    var offTop1 = document.getElementById('char-canvas').offsetTop - 300,
        offTop2 = document.getElementById('char-canvas-2').offsetTop - 300,
        circlesCreated = false,
        circlesCreated2 = false;
    function createCircles(rad_e,crc_W) {
      var colors = [
          ['#ffffff', '#4e658e'], ['#ffffff', '#689f38'], ['#ffffff', '#ef6c00']
        ],
        circles = [];
      for (var i = 1; i <= colors.length; i++) {
        var child = document.getElementById('circles-' + i),
            data_max = child.getAttribute('data-max'),
            data_tek = child.getAttribute('data-tek'),
          circle = Circles.create({
            id:         child.id,
            value:      data_tek,
            maxValue:   data_max,
            text:    function(value){return value + 'min';},
            radius:     rad_e,
            width:      crc_W,
            colors:     colors[i - 1]
          });
        circles.push(circle);
      }
    }
    function createCircles2(rad_e,crc_W) {
      var colors = [
          ['#ffffff', '#4e658e'], ['#ffffff', '#689f38'], ['#ffffff', '#ef6c00']
        ],
        circles = [];
      for (var i = 1; i <= colors.length; i++) {
        var child = document.getElementById('circles-2-' + i),
            data_max = child.getAttribute('data-max'),
            data_tek = child.getAttribute('data-tek'),
          circle = Circles.create({
            id:         child.id,
            value:      data_tek,
            maxValue:   data_max,
            text:    function(value){return value + 'min';},
            radius:     rad_e,
            width:      crc_W,
            colors:     colors[i - 1]
          });
        circles.push(circle);
      }
    }

    window.onscroll = function() {
      var offScr = document.documentElement.scrollTop,
          offScr2 = document.body.scrollTop;
    
        if (window.innerWidth > 700) {
          var rad_e = 108;
          var crc_W = 28; 
          if ((offScr  > offTop1 && !circlesCreated) || (offScr2 > offTop1 && !circlesCreated) ) {
            createCircles(rad_e,crc_W);
            circlesCreated = true;
          }
          if ((offScr  > offTop2 && !circlesCreated2) || (offScr2 > offTop2 && !circlesCreated2)) {
            createCircles2(rad_e,crc_W);
            circlesCreated2 = true;
          }
        }else {
          var rad_e = 62;
          var crc_W = 16;
          if ((offScr  > offTop1 && !circlesCreated) || (offScr2 > offTop1 && !circlesCreated) ) {
            createCircles(rad_e,crc_W);
            circlesCreated = true;
          }
          if ((offScr  > offTop2 && !circlesCreated2) || (offScr2 > offTop2 && !circlesCreated2)) {
            createCircles2(rad_e,crc_W);
            circlesCreated2 = true;
          }
        }

    }

  })();
}
// circles
// animated box
var wow = new WOW(
  {
    animateClass: 'animated',
    offset:       200,
  }
);
wow.init();
// animated box
