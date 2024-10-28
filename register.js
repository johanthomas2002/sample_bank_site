function registration(){
    user={
        accno:accnum.value,
        name:uname.value,
        password:pass.value,
        balance:0
    }

    if(user.accno=="" || user.name=="" || user.pass==""){
        alert("Please fill all the fields");
    }
    else{
        if(user.accno in localStorage){
            alert("Account already exists");
        }
        else{
            localStorage.setItem(user.accno,JSON.stringify(user));
            alert("Registration complete.Use your Account number and Password to login");
            window.location='./login.html';
        }
    }
}

