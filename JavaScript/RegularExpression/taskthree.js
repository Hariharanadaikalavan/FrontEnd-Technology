document.getElementById("btnid").addEventListener("click",password);

var password=()=>{
    var pwd=document.getElementById('textbox').value;
    var ptn=/^(?=.*[!@#$%^&*]).{5}$/;
    if(pwd.match(ptn))
    {
        console.log("your correct");
    }
    else{
        console.log("please use any one of the special character")
    }
}
