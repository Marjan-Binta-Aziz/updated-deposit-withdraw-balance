function getInputValue(inputId) {
    //get the amount of Enter value 
    const inputFeild = document.getElementById(inputId);
    const inpuutAmountText = inputFeild.value;
    const amountValue = parseFloat(inpuutAmountText);
    //clear deposit input field
    inputFeild.value = '';
    return amountValue;
}

//handel deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount of Enter value 

    const depositAmount = getInputValue('deposit-input');
    // console.log(newDepositAmount);

    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText;//$00 catch
    const previousDepositAmount = parseFloat(previousDepositText); 

    const newDepositTotal = previousDepositAmount + depositAmount; 
    
    console.log(previousDepositAmount, newDepositTotal);

    depositTotal.innerText = newDepositTotal;
    

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + depositAmount;
    balanceTotal.innerText = newBalanceTotal;
    console.log(previousBalanceTotal, newDepositTotal);

    

});

// Handle withdraw event handler 

document.getElementById('withdraw-button').addEventListener('click', function () {
    
    const newWithdrawAmount = getInputValue('withdraw-input');

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total'); // catch $00
    const previousTotalWithdrawText = withdrawTotal.innerText; //ata h tag er maje ase tai .innerText hobe

    const previousWithdrawTotal = parseFloat(previousTotalWithdrawText); // convert string to flot

    const newWithdrawTotalAmount = previousWithdrawTotal + newWithdrawAmount;
    
    withdrawTotal.innerText = newWithdrawTotalAmount;


// blanace update after witdraw
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    console.log(previousBalanceTotal, newWithdrawAmount);



});
