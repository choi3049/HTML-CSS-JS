var maxtime = 5; // 초단위
function CountDown() {
  if (maxtime >= 0) {
    --maxtime;
  } else {
    document.getElementById("started").style.display = "block";
    clearInterval(timer);
  }
}
timer = setInterval("CountDown()", 500);
