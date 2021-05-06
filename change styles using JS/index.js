var countdownElement=document.getElementById('countdown');
var imageelement=document.getElementById('bck-img');
console.log(imageelement);
var initialvalue=countdownElement.innerHTML;
var sizef=500;

setInterval(function()
{
   
    path=(initialvalue%2===0)?"//thumbs.dreamstime.com/b/planks-dark-old-wood-texture-background-170515350.jpg":"https://www.freecodecamp.org/news/content/images/2020/04/w-qjCHPZbeXCQ-unsplash.jpg"
    imageelement.src=path;
    initialvalue=initialvalue>0?initialvalue-1:0
    countdownElement.innerHTML=initialvalue;
    sizef=sizef-40;
    countdownElement.style.fontSize=sizef*1+"px";
    imageelement.style.width=initialvalue*10+"%";
},1000);
 