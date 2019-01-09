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

send.onclick = function() {

  if (input.value != '') {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = done[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var dn = _step.value;

        dn.style.display = 'block';
        input.style.background = 'inherit';
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    setTimeout(function() {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = done[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var dn = _step2.value;

          dn.style.display = 'none';
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
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
