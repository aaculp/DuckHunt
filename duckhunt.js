window.onload = function() {

  const body = document.body;
  let duck = document.createElement('div');
  duck.classList.add('duck');
  body.appendChild(duck);

  setInterval(function(){duck.classList.toggle('flap')}, 250);

  function moveDuck() {
    duck.style.top = Math.random() * window.innerHeight + 'px';
    duck.style.left =  Math.random() * window.innerWidth + 'px';
  }
  moveDuck();
  setInterval(moveDuck, 1000);

  function createDuck() {
    let duck = document.createElement('div');
    duck.classList.add('duck');
    body.appendChild(duck);
    console.log(body);

    setInterval(function(){duck.classList.toggle('flap')}, 250);

    function moveDuck() {
      duck.style.top = Math.random() * window.innerHeight + 'px';
      duck.style.left =  Math.random() * window.innerWidth + 'px';
    }

    moveDuck()
    setInterval(moveDuck, 1000);

    return duck;
  }

for (i = 0; i < 5; i++) {
  createDuck();
}

function randomPosition() {
  createDuck()
}

randomPosition(moveDuck())


body.addEventListener('click', shotDuck);
function shotDuck (event) {
     if (event.target.classList[0] === 'duck'){
       event.target.classList.add('shot')

setTimeout(function() {
    let duckRemove = document.querySelector('.shot')
  duckRemove.remove();
    }, 250);
  }
  checkForWinner()
}


function checkForWinner() {
  if(document.getElementsByClassName('duck').length === 1) {
    alert('You win!')
  }
}
checkForWinner()
};
