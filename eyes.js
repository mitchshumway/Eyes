window.onclick = function (event) {
    let x = event.clientX;
    let y = event.clientY;
    createEye(x, y);
  }

  function createEye(x, y){
    let html = ""
    let position = (x, y)
    let newEye = document.createElement('eye');
    newEye.style.position = 'absolute';
    newEye.style.left = position.x;
    newEye.style.top = position.y;
    html += ` <div class="eye">
      <div class="ball"></div>`

    container.innerHTML = html;
  }

  var balls = document.getElementsByClassName("ball");
  document.onmousemove = (event) => {
    var x = (event.clientX * 100) / window.innerWidth + "%";
    var y = (event.clientY * 100) / window.innerHeight + "%";

    for (let i = 0; i < balls.length; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
    }
  };