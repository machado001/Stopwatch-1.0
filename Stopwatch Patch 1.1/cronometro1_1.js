let milsec = 00;
let min = 00;
let sec = 00;
let time;
let start;




function start() {
    document.getElementById('start').disabled = 'disabled'
    start = setInterval(tempo, 10)
    return start;

}

function stop() {
    document.getElementById('start').disabled = false
    clearInterval(start)
    

}

function reset() {
    document.getElementById('start').disabled = false

    document.getElementById(`time`).innerHTML = '00:00:00'
    milsec = 00
    sec = 00
    min = 00
    clearInterval(start)
}

function tempo() {
    let time = document.getElementById('time').innerHTML = `${min.toFixed()}:${sec}:${milsec++}`

    if (milsec === 100) {
        milsec = 0
        sec++

    } else if (sec === 60) {
        sec = 0
        min++
    }
}

