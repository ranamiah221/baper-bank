
document.getElementById('deposit-flied').addEventListener('click',function(){

     const inputFliedElement=document.getElementById('input-flied');
     const inputFliedElementString=inputFliedElement.value;
     const newDepositAmount=parseFloat(inputFliedElementString);
    inputFliedElement.value=" ";
    
    
     
     const depositFliedElement=document.getElementById('deposit-total');
     const depositFliedElementString=depositFliedElement.innerText;
     const  previousDepositAmount=parseFloat(depositFliedElementString);
     const currentDepositAmount= previousDepositAmount + newDepositAmount;
     depositFliedElement.innerText=currentDepositAmount;


     const totalAmount=document.getElementById('balance-total');
     const totalAmountString=totalAmount.innerText;
     const total=parseFloat(totalAmountString);
     const newTotal= total + newDepositAmount;
     totalAmount.innerText= newTotal;   

})