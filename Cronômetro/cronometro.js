let milsec=00;
let min=00;
let sec=00;
let time;
let iniciar;




function start() {

iniciar = setInterval(tempo,10)
return iniciar;
}

function stop() {

    clearInterval(iniciar)
    
}

function reset() {
document.getElementById(`tempo2`).innerHTML = '00:00:00'
milsec=00
sec=00
min=00
clearInterval(iniciar)
}

function tempo() {
    let time = document.getElementById('tempo2').innerHTML = `${min.toFixed()}:${sec}:${milsec++}`
    if(milsec===100) {
        milsec=0
        sec++

    }else if (sec===60){
    sec=0
    min++
    }
    console.log(time)
}