function getInputValue(inputId) {
    //get the amount of Enter value 
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear deposit input field
    inputField.value = '';
    return amountValue;
};

function updateTotalField(totalFeild, depositAmount) {
    // debugger;
    const totalElement = document.getElementById(totalFeild);
    const totalText = totalElement.innerText;//$00 catch
    const previousTotal = parseFloat(totalText); 
    const newTotal = previousTotal + depositAmount; 

    totalElement.innerText = newTotal;
};

function updateBalance(depositAmount, isAdd) {
     //update account balance
    const balanceTotal = document.getElementById('balance-total');
    /* const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */

    const previousBalanceTotal = getCurrentBalance();

    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + depositAmount;
    balanceTotal.innerText = newBalanceTotal;
    } 
    else {
        const newBalanceTotal = previousBalanceTotal - depositAmount;
    balanceTotal.innerText = newBalanceTotal;
    }
    
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

//handel deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    
    //get the amount of Enter value 
    const depositAmount = getInputValue('deposit-input');

if (depositAmount > 0) {
    // update total amount 
    updateTotalField('deposit-total', depositAmount);
    //update account balance
    updateBalance(depositAmount, true);
} 

});

// Handle withdraw event handler 

document.getElementById('withdraw-button').addEventListener('click', function () {
    //get withdraw amount input 
    const withdrawAmount = getInputValue('withdraw-input');

    //error handaling
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        //get+set total amount of withdraw
    updateTotalField('withdraw-total', withdrawAmount);

    // blanace update after witdraw
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        alert("You cannot withdraw more than")
    }

    

});
