const donutMaker = new DonutMaker();
let activeAuto = true;

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


const donutClickerBtn = (donutBtn, totalDonuts, donutMaker) => {
    donutBtn.addEventListener('click', () => {
        donutMaker.addDonut();
        updateAll();
    });
}

const multiplierClickerBtn = (multiplierBtn, totalDonuts, multiplier, multiplierTotalCost, donutsPerClick, donutMaker) => {
    multiplierBtn.addEventListener('click', () => {
        donutMaker.addMultiplier();
        updateAll();
    });
}

const autoClickerBtn = (autoBtn, totalDonuts, autoClicker, autoClickerCost, donutMaker) => {
    autoBtn.addEventListener('click', () => {
        donutMaker.addAutoClicker();
        if(donutMaker.getAutoClickerCount() > 0){
        activeAuto = true;
        setInterval(runAutoClicker, 1000);
        console.log(donutMaker.getAutoClickerCount());
        }
        updateAll();
    });
}

function runAutoClicker(){
    if(activeAuto == true){
        for(i = 1; i < donutMaker.autoClickerCount; i++);
        donutMaker.addDonut();
    }
}

const resetClickerBtn = (donutMaker) => {
    resetBtn.addEventListener('click', () => {
        let yesNo = confirm("ARE YOU SURE YOU WANT TO THROW ALL OF YOUR DONUTS IN THE TRASH?");
        if (yesNo == true){
            activeAuto = false;
            donutMaker.resetStats();
            console.log(donutMaker.getAutoClickerCount());
            updateAll();
        }
    });
}

// const resetClickerBtn = (donutMaker) => {
//     resetBtn.addEventListener('click', () => {
//         let yesNo = confirm("ARE YOU SURE YOU WANT TO THROW ALL OF YOUR DONUTS IN THE TRASH?");
//         if (yesNo == true){
//             activeAuto = false;
//             donutMaker.reset();
//             console.log(donutMaker.autoClickerCount);
//             updateAll();
//         }
//     });
// }



function updateAll() {
    totalDonuts.innerText = "Total Donuts: " + donutMaker.getDonutCount().toFixed(0);
    donutsPerClick.innerText = "Donuts Per Click: " + donutMaker.getDonutsPerClick().toFixed(2);
    multiplier.innerText = "Total Multipliers: " + donutMaker.getMultiplierCount().toFixed(0);
    multiplierTotalCost.innerText = "Multiplier Cost: " + donutMaker.getMultiplierCost().toFixed(2);
    autoClicker.innerText = "Total Auto Clickers: " + donutMaker.getAutoClickerCount().toFixed(0);
    autoClickerCost.innerText = "Auto Clicker Cost: " + donutMaker.getAutoClickerCost().toFixed(2);
}

donutClickerBtn(donutBtn, totalDonuts, donutMaker);
multiplierClickerBtn(multiplierBtn, totalDonuts, multiplier, multiplierTotalCost, donutsPerClick, donutMaker);
autoClickerBtn(autoBtn, totalDonuts, autoClicker, autoClickerCost, donutMaker);
let updateInterval = setInterval(updateAll, 500);
resetClickerBtn(donutMaker);