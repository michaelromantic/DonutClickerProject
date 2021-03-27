const totalDonuts = document.querySelector('.stats__donuts');
const donutsPerClick = document.querySelector('.stats__donuts-per-click');
const multiplier = document.querySelector('.stats__multipliers');
const multiplierTotalCost = document.querySelector('.stats__multiplier-cost');
const autoClicker = document.querySelector('.stats__auto-clickers');
const autoClickerCost = document.querySelector('.stats__auto-clicker-cost');
const donutBtn = document.querySelector('.maker__clicker');
const autoBtn = document.querySelector('.maker__auto-clicker');
const multiplierBtn = document.querySelector('.maker__multiplier');
const resetBtn = document.querySelector('.maker__reset');
const modal = document.getElementById('myModal');
const modalBtn = document.getElementById('modalBtn');
const span = document.getElementById('close');

const donutMaker = new DonutMaker();
let activeAuto = true;


modalBtn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}

 function updateButtons(){
     autoBtn.disabled = donutMaker.getDonutCount() < donutMaker.getAutoClickerCost();
     multiplierBtn.disabled = donutMaker.getDonutCount() < donutMaker.getMultiplierCost();
 }

const donutClickerBtn = (donutBtn, totalDonuts, donutMaker) => {
    donutBtn.addEventListener('click', () => {
        donutMaker.addDonut();
        updateAll();
        updateButtons();
    });
}

const multiplierClickerBtn = (multiplierBtn, totalDonuts, multiplier, multiplierTotalCost, donutsPerClick, donutMaker) => {
    multiplierBtn.addEventListener('click', () => {
        donutMaker.addMultiplier();
        updateAll();
        updateButtons();
    });
}

const autoClickerBtn = (autoBtn, totalDonuts, autoClicker, autoClickerCost, donutMaker) => {
    autoBtn.addEventListener('click', () => {
        donutMaker.addAutoClicker();
        activeAuto = true;
        updateAll();
        updateButtons();
    });
}

function runAutoClicker() {
    if(activeAuto == true){
        donutMaker.autoClickerFucn();
        updateAll();
        updateButtons();
    }
}

const resetClickerBtn = (donutMaker) => {
    resetBtn.addEventListener('click', () => {
        let yesNo = confirm("ARE YOU SURE YOU WANT TO THROW ALL OF YOUR DONUTS IN THE TRASH?  JAME WON'T BE HAPPY ABOUT THIS!");
        if (yesNo == true){
            activeAuto = false;
            donutMaker.resetStats();
            updateButtons();
            updateAll();
        }
    });
}

function updateAll() {
    totalDonuts.innerText = "Total Donuts: " + donutMaker.getDonutCount().toFixed(0);
    donutsPerClick.innerText = "Donuts Per Click: " + donutMaker.getDonutsPerClick().toFixed(2);
    multiplier.innerText = "Total Multipliers: " + donutMaker.getMultiplierCount().toFixed(0);
    multiplierTotalCost.innerText = "Multiplier Cost: " + donutMaker.getMultiplierCost().toFixed(2);
    autoClicker.innerText = "Total Auto Clickers: " + donutMaker.getAutoClickerCount().toFixed(0);
    autoClickerCost.innerText = "Auto Clicker Cost: " + donutMaker.getAutoClickerCost().toFixed(2);
    autoBtn.disabled = donutMaker.getDonutCount() < donutMaker.getAutoClickerCost();
    multiplierBtn.disabled = donutMaker.getDonutCount() < donutMaker.getMultiplierCost();
}

let updateInterval = setInterval(runAutoClicker, 1000);
donutClickerBtn(donutBtn, totalDonuts, donutMaker);
multiplierClickerBtn(multiplierBtn, totalDonuts, multiplier, multiplierTotalCost, donutsPerClick, donutMaker);
autoClickerBtn(autoBtn, totalDonuts, autoClicker, autoClickerCost, donutMaker);
resetClickerBtn(donutMaker);