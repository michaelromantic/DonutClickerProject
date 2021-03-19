class DonutMaker {
    constructor() {
        this.donutCount = 0;
        this.donutsPerClick = 1;
        this.autoClickerCount = 0;
        this.autoClickerCost = 20;
        this.multiplierCount = 0;
        this.multiplierCost = 10;
    }

    addDonut() {
        this.donutCount += this.donutsPerClick;
    }
    
    addMultiplier(){
        if (this.donutCount >= this.multiplierCost){
            this.donutCount -= this.multiplierCost;
            this.multiplierCount++;
            let costIncreaseM = this.multiplierCost * .1;
            this.multiplierCost += costIncreaseM;
            this.donutsPerClick = Math.pow(1.2, this.multiplierCount);
        }

        else{
            
        }
    }
    
    addAutoClicker(){
        if (this.donutCount >= this.autoClickerCost){
            this.donutCount -= this.autoClickerCost;
            this.autoClickerCount++;
            let costIncreaseA = this.autoClickerCost * .1;
            this.autoClickerCost += costIncreaseA;
        }
        
        else{
             
        }
    }
        
    resetStats(){
        this.donutCount = 0;
        this.donutsPerClick = 1;
        this.autoClickerCount = 0;
        this.autoClickerCost = 20;
        this.multiplierCount = 0;
        this.multiplierCost = 10;
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