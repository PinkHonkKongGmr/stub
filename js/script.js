var pusher = document.querySelectorAll('.minus');

var pluses = document.querySelectorAll('.plus');

var toShow = document.querySelectorAll('.toShow');

var ul = document.querySelectorAll('.points');

var send = document.querySelector('button');

var complete = document.querySelector('.complete');

var complete_img = document.querySelector('.complete_img');

var input = document.querySelector('input');

var done = [complete,complete_img];

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
    $(thatToshow).slideToggle(0);
    $(thatPlus).slideToggle(0);
  });
}


send.onclick = function () {

if (input.value!='') {
  for (let dn of done) {
    dn.style.display='block';
    input.style.background='inherit';
  }
  setTimeout(function () {
    for (let dn of done) {
      dn.style.display='none';
    }
  },3100)
}
else {
  input.style.background='red';
}
}
