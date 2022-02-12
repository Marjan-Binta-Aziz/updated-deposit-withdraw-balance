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
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + depositAmount;
    balanceTotal.innerText = newBalanceTotal;
    } 
    else {
        const newBalanceTotal = previousBalanceTotal - depositAmount;
    balanceTotal.innerText = newBalanceTotal;
    }
    
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
    const WithdrawAmount = getInputValue('withdraw-input');

    //get+set total amount of withdraw
    updateTotalField('withdraw-total', WithdrawAmount);

// blanace update after witdraw
    updateBalance(WithdrawAmount, false);

});
