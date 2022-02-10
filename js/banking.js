function getInputValue() {
    //get the amount of Enter value 
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    //clear deposit input field
    depositInput.value = '';

    return depositAmount;
}

//handel deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount of Enter value 
    /* const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText); */
    const depositAmount = getInputValue();
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
    
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value; //text field tai .value hobe 
    const newWithdrawAmount = parseFloat(withdrawAmountText);  //newWithdrawAmount e holo amra je input ta dibo ota jeno flot hisebe convert kore nabe
    console.log(newWithdrawAmount);

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total'); // catch $00
    const previousTotalWithdrawText = withdrawTotal.innerText; //ata h tag er maje ase tai .innerText hobe

    const previousWithdrawTotal = parseFloat(previousTotalWithdrawText); // convert string to flot

    const newWithdrawTotalAmount = previousWithdrawTotal + newWithdrawAmount;
    
    withdrawTotal.innerText = newWithdrawTotalAmount;

    //clear withdraw
    withdrawInput.value = '';

// blanace update after witdraw
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    console.log(previousBalanceTotal, newWithdrawAmount);

    //clear 
    withdrawInput.value = "";


});
