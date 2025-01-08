var timer
var ele = document.getElementById("timer")

function start_timer() {
    var sec = 0
    timer = setInterval(()=>{
        ele.innerHTML = '00:' +sec;
        sec++;
    }, 1000)
}

function stop_timer(){
   clearInterval(timer)
}