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
var newSpyderWidth;

for (let count = 0; count < pusher.length; count++) {

  let thatToshow;
  let thatPlus;
  let thatUl;
  let thatPusher;

  thatPusher = pusher[count];
  thatToshow = toShow[count];
  thatPlus = pluses[count];
  thatUl = ul[count];

  $(thatPusher).click(function() {
    $(thatUl).toggleClass('active');
    $(thatToshow).slideToggle(300);
    $(thatPlus).slideToggle(0);
  });
}


send.onclick = function() {

  if (input.value != '') {
    for (let dn of done) {
      dn.style.display = 'block';
      input.style.background = 'inherit';
    }
    setTimeout(function() {
      for (let dn of done) {
        dn.style.display = 'none';
      }
    }, 3100)
  } else {
    input.style.background = 'red';
  }
}

stub_wrapper.onscroll = function() {

  newSpyderWidth = spyderWidth * Math.abs(discription.getBoundingClientRect().top / 110);
  console.log(newSpyderWidth);
  if (newSpyderWidth < 900) {
    newSpyderWidth = 888;
  }
  if (newSpyderWidth > 1000) {
    newSpyderWidth = 950;
  }
  $('.spyder').css('width', newSpyderWidth + 'px');
}
