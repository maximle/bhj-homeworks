getHole = index => document.getElementById(`hole${index}`);
deadCount = document.getElementById(`dead`);
lostCount = document.getElementById(`lost`);

for (let i = 1; i < 9; i++) {
    getHole(i).onclick = function() {
        if (getHole(i).className.includes( 'hole_has-mole' )) {
            deadCount.textContent ++;
            if (deadCount.textContent > 9) alert('victory!');
        } else {
            lostCount.textContent ++;
            if (lostCount.textContent > 4) alert('game lost');
        };
    };
    
    
};

console.log(lostCount.textContent);

