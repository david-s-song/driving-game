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

function movecar(dir) {
  if (dir === 'right') {
    $car.style.transform = 'rotate(0deg)';
  } else if (dir === 'left') {
    $car.style.transform = 'rotate(180deg)';
  } else if (dir === 'up') {
    $car.style.transform = 'rotate(-90deg)';
  } else if (dir === 'down') {
    $car.style.transform = 'rotate(90deg)';
  }
}

$body.addEventListener('keydown', start);
