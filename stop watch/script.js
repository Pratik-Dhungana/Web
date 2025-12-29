let hour = 0;
let min = 0;
let sec = 0;

let timer = null;

function display() {
    let h = hour < 10 ? "0" + hour : hour;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;

    document.getElementById("time").innerText = h + ":" + m + ":" + s

}



function helper() {
    sec++;
    if (sec === 60) {
        min++;
        sec = 0;
    }

    if (min === 60) {
        hour++;
        min = 0;
    }

    display();
}


function start() {

    timer = setInterval(helper, 1000);


}

function stop() {
    clearInterval(timer);
}




function reset() {
    stop();
    hour = 0;
    min = 0;
    sec = 0;
    display();
    document.getElementById("laps").innerHTML= "";
}

function lap() {
    let value = document.getElementById("time").innerText;
    let li = document.createElement("li");
    li.innerText = value;
    console.log(value)
    document.getElementById("laps").appendChild(li);
}