const intialPrice = document.querySelector("#initial-price");
const currentPrice = document.querySelector("#current-price");
const quantity = document.querySelector("#stocks-quantity");
const checkBtn = document.querySelector("#submit-btn");
const output = document.querySelector(".outputBox");
checkBtn.addEventListener("click", stockHandler);

function checkProfitAndLoss(initial,current,quantity){

    if(initial > current){
        var loss = (initial-current)*quantity;
        var lossPercentage = (loss/initial)*100;
        output.innerHTML = (`Loss is ${loss} and loss percent is ${lossPercentage}`)
    }else if(current > initial){
        var profit = (current-initial)*quantity;
        var profitPercentage = (profit/initial)*100;
        output.innerHTML=(`Profit is ${profit} and Profit percent is ${profitPercentage}`)
    }else{
        output.innerHTML=("No loss or no Profit is gained");
    }
}

function stockHandler(){
    var ip = Number(intialPrice.value);
    var curr = Number(currentPrice.value);
    var qnt = Number(quantity.value);


    checkProfitAndLoss(ip,curr,qnt);
}


