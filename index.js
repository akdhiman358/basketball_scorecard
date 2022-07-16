let homeCount=0;
let guestCount=0;
const homeScore = document.getElementById('home-score');
const guestScore = document.getElementById('guest-score');

    
// for Home Team
function onePoint(){
    homeCount += 1;
    homeScore.innerText = homeCount;
}
function twoPoint(){
    homeCount += 2;
    homeScore.textContent = homeCount;
    
}
function threePoint(){
    homeCount += 3;
    homeScore.textContent = homeCount;   
}

// for guest Team
function onePointGuest(){
    guestCount += 1;
    guestScore.innerText = guestCount;
}
function twoPointGuest(){
    guestCount += 2;
    guestScore.textContent = guestCount;
    
}
function threePointGuest(){
    guestCount += 3;
    guestScore.textContent = guestCount;   
}
function resetBtn(){
    homeCount = 0;
    homeScore.textContent = homeCount;
    guestCount = 0;
    guestScore.textContent = guestCount;
}
