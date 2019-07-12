const img = document.getElementById("cookie");
let counter = 0;
let speedCounter = 0;
let width1 = 200;
let k = 1;
let date = Date.now();
console.log(date);

img.onclick = function() {
    img.width = width1;
    counter ++;
    document.getElementById("clicker__counter").innerHTML = counter;
    
    width1 += 50 * k;
    k *= -1;
    dateNow = Date.now();
    diff = dateNow - date;
    console.log(diff);
    date = dateNow;
    
    speedCounter = 1000/diff;
    document.getElementById("clicker__speed1").innerHTML = speedCounter;
    speedCounter = 0;
};

