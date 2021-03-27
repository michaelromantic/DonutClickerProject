class DonutMaker {
    constructor() {
        this.donutCount = 0;
        this.donutsPerClick = 1;
        this.autoClickerCount = 0;
        this.autoClickerCost = 125;
        this.multiplierCount = 0;
        this.multiplierCost = 25;
            
    }

    addDonut() {
        this.donutCount += this.donutsPerClick;
    }

    addMultiplier(){
        if (this.donutCount >= this.multiplierCost){
            this.donutCount -= this.multiplierCost;
            this.multiplierCount++;
            let costIncreaseM = this.multiplierCost * .15;
            this.multiplierCost += costIncreaseM;
            this.donutsPerClick = Math.pow(1.1, this.multiplierCount);
        }
    }

    addAutoClicker(){
        if (this.donutCount >= this.autoClickerCost){
            this.donutCount -= this.autoClickerCost;
            this.autoClickerCount++;
            let costIncreaseA = this.autoClickerCost * .15;
            this.autoClickerCost += costIncreaseA;
        }
    }

    autoClickerFucn(){
        this.donutCount += this.donutsPerClick * this.autoClickerCount;
    }

    resetStats(){
        this.donutCount = 0;
        this.donutsPerClick = 1;
        this.autoClickerCount = 0;
        this.autoClickerCost = 125;
        this.multiplierCount = 0;
        this.multiplierCost = 25;
    }

    getDonutCount() {
        return this.donutCount;
    }

    getAutoClickerCount(){
        return this.autoClickerCount;
    }

    getAutoClickerCost(){
        return this.autoClickerCost;
    }

    getMultiplierCount() {
        return this.multiplierCount;
    }

    getMultiplierCost() {
        return this.multiplierCost;
    }

    getDonutsPerClick() {
        return this.donutsPerClick;
    }
}