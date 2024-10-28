function loginUser(){
    accno=num.value;
    password=pswd.value;
    
    if(accno=="" || password==""){
        alert("Please fill all the fields");
    }
    else{
        if(accno in localStorage){
            let user = JSON.parse(localStorage.getItem(accno));
            if(user.password==password){
                alert("Login successful");

                // for displaying username in the home page
                localStorage.setItem("currentUser", user.name);
                
                window.location='./home.html';
            }
            else{
                alert("Incorrect Password");
            }
        }
        else{
            alert("Account not found"); 
        }
    }
}






