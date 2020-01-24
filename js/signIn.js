var passwordOfUser = null;
document.getElementById('newUser').addEventListener("click",function(){
    document.getElementById('signinWindow').style.display = "none";
    document.getElementById('regiserform').style.display = "flex";
})

document.getElementById('submit').addEventListener("click",function (){
    var userName = document.getElementById('userID').value;
    var currentPassword = document.getElementById('password').value;
    var newPassword = document.getElementById('newPassword').value;
    var RetypePassword = document.getElementById('RetypePassword').value;
    if (userName == "" || userName != "user1" || currentPassword == "" && currentPassword != "iti40" || newPassword == "" || RetypePassword == ""  || RetypePassword != newPassword)
    {
        document.getElementById('error').style.display = "block";
        var errorMessage = [];
        if (userName == "")
        {
            errorMessage.push("Please Fill the User Name");
        }else
        {
            if (userName != "user1")
            {
                errorMessage.push("Please Enter a valid User Name");              
            }
        }
        if (currentPassword == "")
        {
            errorMessage.push("Please Fill the Password");
        }else
        {
            if (currentPassword != "iti40")
            {
                errorMessage.push("Please Enter a valid Password");
            }
        }
        if (newPassword == "")
        {
            errorMessage.push("Please Fill the New Password");
        }
        if (RetypePassword == "")
        {
            errorMessage.push("Please Fill the Retype Password");

        }else
        {
            if (RetypePassword != newPassword)
            {
                errorMessage.push("Password is Not Match");
            }
        }
        document.getElementById('error').innerHTML = " ";
        for (let i =0 ; i< errorMessage.length; i++)
        {
            document.getElementById('error').innerHTML += '<div class="row"><label for="">'+errorMessage[i]+'</label></div>'
        }
    }else 
    {
        passwordOfUser = RetypePassword ;
        document.getElementById('error').innerHTML = " ";
        document.getElementById('error').style.display = "none";
        document.getElementById('regiserform').style.display = "none";
        document.getElementById('signinform').style.display = "flex";
    }
});

document.getElementById('signin').addEventListener("click",function(){
    document.getElementById('signinWindow').style.display = "none";
    document.getElementById('regiserform').style.display = "none";
    document.getElementById('signinform').style.display = "flex";
})


document.getElementById('signinsubmit').addEventListener("click",function(){    
    var userName = document.getElementById('signinuserID').value;
    var password = document.getElementById('signinpassword').value;
    if (userName == "" || userName != "user1" || password == "" || password != "iti40" && password != passwordOfUser)
    {
        document.getElementById('errorsignin').style.display = "block";
        var errorMessage = [];
        if (userName == "")
        {
            errorMessage.push("Please Fill the User Name");
        }else
        {
            if (userName != "user1")
            {
                errorMessage.push("Please Enter a valid User Name");              
            }
        }
        if (password == "")
        {
            errorMessage.push("Please Fill the Password");
        }else
        {
            if (password != "iti40" || password != passwordOfUser)
            {
                errorMessage.push("Please Enter a valid Password");
            }
        }
        document.getElementById('errorsignin').innerHTML = " ";
        for (let i =0 ; i< errorMessage.length; i++)
        {
            document.getElementById('errorsignin').innerHTML += '<div class="row"><label for="">'+errorMessage[i]+'</label></div>'
        }
    }else 
    {
        document.getElementById('errorsignin').innerHTML = " ";
        document.getElementById('errorsignin').style.display = "none";
        document.getElementById('regiserform').style.display = "none";
        document.getElementById('signinform').style.display = "none";
        window.location.href = "./main.html";
    }
});