var pusher = document.querySelectorAll('.minus');

var pluses = document.querySelectorAll('.plus');

var toShow = document.querySelectorAll('.toShow');

var ul = document.querySelectorAll('.points');

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
