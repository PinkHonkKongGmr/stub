'use strict';

var pusher = document.querySelectorAll('.points');
var pluses = document.querySelectorAll('.plus');
var toShow = document.querySelectorAll('.toShow');
var ul = document.querySelectorAll('.points');
var send = document.querySelector('button');
var complete = document.querySelector('.complete');
var complete_img = document.querySelector('.complete_img');
var input = document.querySelector('input');
var done = [complete, complete_img];
var stub_wrapper = document.querySelector('.stub_wrapper');
var discription = document.querySelector('.discription');
var spyderWidth = $('.spyder').css('width').match(/\d/g).join('');
console.log(spyderWidth);
console.log(spyderWidth);
var newSpyderWidth;

var _loop = function _loop(count) {

  var thatToshow = void 0;
  var thatPlus = void 0;
  var thatUl = void 0;
  var thatPusher = void 0;

  thatPusher = pusher[count];
  thatToshow = toShow[count];
  thatPlus = pluses[count];
  thatUl = ul[count];

  $(thatPusher).click(function() {
    $(thatUl).toggleClass('active');
    $(thatToshow).slideToggle(300);
    $(thatPlus).slideToggle(0);
  });
};

for (var count = 0; count < pusher.length; count++) {
  _loop(count);
}

'use strict';

send.onclick = function () {

  if (input.value != '') {
    for (var dn = 0; dn < done.length; dn++) {
      done[dn].style.display = 'block';
      input.style.background = 'inherit';
    }
    setTimeout(function () {
      for (var _dn = 0; _dn < done.length; _dn++) {
        done[_dn].style.display = 'none';
      }
    }, 3100);
  } else {
    input.style.background = 'red';
  }
};

stub_wrapper.onscroll = function() {

  newSpyderWidth = spyderWidth * Math.abs(discription.getBoundingClientRect().top / 145);
  console.log(newSpyderWidth);
  if (newSpyderWidth < 957) {
    newSpyderWidth = 957;
  }
  if (newSpyderWidth > 964) {
    newSpyderWidth = 964;
  }
  $('.spyder').css('width', newSpyderWidth + 'px');
};
