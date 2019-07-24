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
    
    console.log(hours.toString().padStart(2, "0"), minutes.toString().padStart(2, "0"), seconds.toString().padStart(2, "0"));
    
    document.getElementById("timer").innerHTML = hours.toString().padStart(2, "0") + ':' + minutes.toString().padStart(2, "0") + ':' + seconds.toString().padStart(2, "0");

}

, 1000);

