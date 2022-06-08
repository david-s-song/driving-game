var $car = document.querySelector('.car');
var $body = document.querySelector('body');

function start(e) {
  switch (e.keyCode) {
    case 37:
      movecar('left');
      break;
    case 38:
      movecar('up');
      break;
    case 39:
      movecar('right');
      break;
    case 40:
      movecar('down');
      break;
  }
}
