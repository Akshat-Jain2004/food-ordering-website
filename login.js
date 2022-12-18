function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="Akshat"&& password=="user")
    {
        alert("Login Succesfully");
        return false;
    }

    if(username=="Mayank"&& password=="user1")
    {
        alert("Login Succesfully");
        return false;
    }

    if(username=="Shreshta"&& password=="user2")
    {
        alert("Login Succesfully");
        return false;
    }
    else
    {
        alert("Login Failed");
    }
}