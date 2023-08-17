document.getElementById('btn-flied').addEventListener('click',function(){
    const emailFlied= document.getElementById('input-flied');
    const email = emailFlied.value;
    const passwordFlied= document.getElementById('password-flied');
    const password= passwordFlied.value;

    if(email=='abc@gmail.com' && password=='1234'){
        window.location.href='bank-inside.html';
    }
    else{
        alert("Invalid User");
    }
    
})