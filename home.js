// diplaying username in <h1> tag with id="welcome" 
username=localStorage.getItem('currentUser');
welcome.innerHTML = `Welcome ${username}`;


function out(){
    localStorage.clear();
    window.location='./index.html';
}


function deposit(){
    amount=depamt.value;
    amount=Number(amount);
    accno=depaccnum.value;

    if(accno in localStorage){

        let user=JSON.parse(localStorage.getItem(accno));

        user.balance+=amount;

        localStorage.setItem(user.accno,JSON.stringify(user));
        alert("Amount added successfully");

        res_dep.innerHTML=`Your Current Balance is ${user.balance}`;
    
    }
    else{
        alert("Please Enter Your Account Number Correctly");
    }
}


function withdraw(){
    amount=withamt.value;
    amount=Number(amount);
    accno=withaccnum.value;

    if(accno in localStorage)
    {
        let user=JSON.parse(localStorage.getItem(accno));
        if(user.balance>amount){
            alert("Your current balance is "+user.balance);
            alert("Amout to be withdrawn is "+amount);
            user.balance-=amount;
            alert("Amount successfully withdrwan");
            alert("Your balance after withdrawal is "+user.balance);

            localStorage.setItem(user.accno,JSON.stringify(user));

            res_draw.innerHTML=`Your Current Balance is ${user.balance}`;            
        }
        else{
            alert("Insuficient Funds...!")
        }
    }
    else{
        alert("Please Enter Your Account Number Correctly");
    }
}
