var btn=document.getElementById("btn");
console.log(btn);
btn.addEventListener('click',onclicked)
function onclicked ()
{
    //alert('Anonymous function called');
    btn.style.backgroundColor="lightcoral";

}