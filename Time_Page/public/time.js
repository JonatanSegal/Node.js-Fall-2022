
var currentDay
var ticker
var secondTime

function timer() {

    var currentDate = new Date()
    var day = 0
    var counterTimer = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate(),23,59,59)

    var currentTime = currentDate.getTime()
    var countdownTime = counterTimer.getTime()
    var timeDiff = parseInt((countdownTime - currentTime)/1000)
    
    if(timeDiff > 0 ){
        currentDay = day - currentDate.getDay()
    }else{
        currentDay = day - currentDate.getDay() -1
    }if(currentDay < 0 ){
        currentDay += 7
    }if(timeDiff <= 0){
        timeDiff += (86400 * 7)
    }
    startTimer(timeDiff)
}

function startTimer(seconds){
    secondTime = parseInt(seconds)
    ticker = setInterval("tick()",1000)
    tick()
}

function tick(){
    var seconds = secondTime
    if(seconds > 0 ){
        secondTime--
    }
    else{
        clearInterval(ticker)
        timer()
    }

    var days = Math.floor(seconds/86400)
    seconds %= 86400
    var hours = Math.floor(seconds/3600)
    seconds %= 3600
    var minutes = Math.floor(seconds/60)
    seconds %=60

    document.getElementById("days").innerHTML = currentDay
    document.getElementById("hours").innerHTML = ((hours < 10 ) ? "0" : "" ) + hours
    document.getElementById("minutes").innerHTML = ( (minutes < 10) ? "0" : "" ) + minutes
    document.getElementById("seconds").innerHTML = ( (seconds < 10) ? "0" : "" ) + seconds
}

