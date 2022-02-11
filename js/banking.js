function getInputValue(inputId) {
    //get the amount of Enter value 
    const inputFeild = document.getElementById(inputId);
    const inpuutAmountText = inputFeild.value;
    const amountValue = parseFloat(inpuutAmountText);
    //clear deposit input field
    inputFeild.value = '';
    return amountValue;
};

function updateTotalField(totalFeild, depositAmount) {
    const totalElement = document.getElementById(totalFeild);
    const totalText = totalElement.innerText;//$00 catch
    const previousTotal = parseFloat(totalText); 
    const newDepositTotal = previousTotal + depositAmount; 

    totalElement.innerText = newDepositTotal;
}

//handel deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount of Enter value 

    const depositAmount = getInputValue('deposit-input');
    // console.log(newDepositAmount);


    // updaey total amount 
    updateTotalField('deposit-total', depositAmount);

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + depositAmount;
    balanceTotal.innerText = newBalanceTotal;
    

});

// Handle withdraw event handler 

document.getElementById('withdraw-button').addEventListener('click', function () {
    //get withdraw amount input 
    const newWithdrawAmount = getInputValue('withdraw-input');

    //get+set total amount of withdraw
    updateTotalField('withdraw-total', newWithdrawAmount)




// blanace update after witdraw
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    console.log(previousBalanceTotal, newWithdrawAmount);



});
