var username=document.getElementById('username');
var loginform=document.getElementById('log-in');
var usernameplease=document.getElementById('please');
username.addEventListener('input',function(e)
{
    console.log(e.target.value);
    var nameRegex = /^[\w]{6,8}$/;
    var currentvalue=e.target.value;
    var valid=nameRegex.test(currentvalue);
    console.log(valid);
    if(valid)
    {
        usernameplease.style.display='none';
    }
    else
    {
        usernameplease.style.display='block';
    }



})