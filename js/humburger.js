var humburger = document.querySelector('.humburger');


var line1 = document.querySelector('.ln1');
var line2 = document.querySelector('.ln2');
var line3 = document.querySelector('.ln3');
var slidemenu = document.querySelector('.slidemenu');
var mobmenuBox = document.querySelector('.mobmenuBox');
var mobmenu_wrapper = document.querySelector('.mobmenu_wrapper');






humburger.addEventListener('click', function humburgerToggle() {

  line1.classList.toggle('cross');
  line2.classList.toggle('hide');
  line3.classList.toggle('cross2');
  mobmenuBox.classList.toggle('mobmenuBoxNone');
  mobmenu_wrapper.classList.toggle('white');


});
