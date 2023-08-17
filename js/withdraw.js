document.getElementById('withdraw-btn').addEventListener('click',function(){

    const newWithdrawAmount= document.getElementById('withdraw-flied');
    const newWithdrawAmountString= newWithdrawAmount.value;
    const newWithdraw= parseFloat(newWithdrawAmountString);
    newWithdrawAmount.value=" ";

    const previousWithdrawAmountFlied= document.getElementById('withdraw-amount');
    const previousWithdrawAmountString= previousWithdrawAmountFlied.innerText;
    const previousWithdrawAmount= parseFloat(previousWithdrawAmountString);
    const currentWithdrawAmount= previousWithdrawAmount + newWithdraw;
    previousWithdrawAmountFlied.innerText= currentWithdrawAmount;
   
    const totalBalanceFlied=document.getElementById('balance-total');
    const totalBalanceFliedString=totalBalanceFlied.innerText;
    const totalBalance= parseFloat(totalBalanceFliedString);
    const balance= totalBalance - newWithdraw;
    totalBalanceFlied.innerText=balance;
    


    

})