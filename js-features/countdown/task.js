const currentTimrer = document.getElementById('timer');
console.log(currentTimrer.textContent);

let countdownDate = Date.now() + currentTimrer.textContent * 1000;
console.log(countdownDate);

// countdownDate = new Date(countdownDate);
// console.log(countdownDate);

let timer1 = setInterval(function() {
    let now = Date.now();
    let diff = countdownDate - now;
    console.log(diff);

    
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    console.log(hours, minutes, seconds);
    let hourPR = 0;
    let minPR = 0;
    let secPR = 0;
    if (hours > 9) {
        hourPR = '';
    } else {
        hourPR = 0;
    };

    if (minutes > 9) {
        minPR = '';
    } else {
        minPR = 0;
    };

    if (seconds > 9) {
        secPR = '';
    } else {
        secPR = 0;
    };
    document.getElementById("timer").innerHTML = hourPR + '' + hours + ':'+ minPR + '' + minutes + ":" + secPR + seconds;
}

, 1000);

