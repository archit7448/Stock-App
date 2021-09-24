const intialPrice = document.querySelector("#Intial-Price")
const quantity = document.querySelector("#quantity")
const currentPrice = document.querySelector("#Current-Price")
const checkButton = document.querySelector("#Check-Button")
const ouputContainer = document.querySelector("#Output-container")

function toCheckProfitAndLoss(intial,final,quantity){
     if(intial < final){
         var profit = (final - intial)*quantity
         var profitPercentage = (profit/intial) * 100
         showMessage(`yaah, the profit in this stock ${profit} and profit percentage is ${profitPercentage}% 🎊`)
     } if (intial > final){
         var loss = (intial-final) * quantity
         var lossPercentage = (loss/intial)  * 100
         showMessage(`The loss in this stock ${loss} and loss percentage is ${lossPercentage}% 😥`)
     }if(intial === final){
        showMessage(`No pain and No gain`)
     }
}

function checkHandler(){
    var int = Number(intialPrice.value)
    var current = Number(currentPrice.value)
    var quty = Number(quantity.value)
    toCheckProfitAndLoss(int,current,quty)
}

function showMessage(msg){
    ouputContainer.innerHTML = msg
}

checkButton.addEventListener("click" , checkHandler)