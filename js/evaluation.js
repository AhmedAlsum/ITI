var msg= document.getElementById("msg");
var butn=document.getElementsByTagName('button')[0];
function finish(){
       btn.style.display = "block"; 
       msg.textContent="your evaluation is successful";
       form1.style.display = "none";
       form2.style.display = "none";
       form3.style.display = "none";
       right.style.display = "none";
       butn.style.display = "none";
    }
butn.addEventListener('click',finish);

var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var form3 = document.getElementById('form3');
var btn = document.getElementById('msg');
var select = document.getElementById('select');
var right = document.getElementById('rightButton');
function onLoad ()
{
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    btn.style.display = "none";
    butn.style.display = "none";
    right.style.display = "none";
}
onLoad();

var counter = 0;

select.addEventListener ("change",function(){    
    btn.style.display = "none"; 
    form1.style.display = "block";
    right.style.display = "flex";
})

right.addEventListener('click',function(){
    counter ++;
    console.log(counter);
    
    if (counter == 1)
    {
        form1.style.display = "none";
        form2.style.display = "block";
        x = 2;
    }
    else if (counter == 2)
    {
        form2.style.display = "none";
        form3.style.display = "block";
        butn.style.display = "block";
    }else if (counter > 2)
    {
        counter = 2;
    }
})