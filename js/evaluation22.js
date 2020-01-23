var msg=document.getElementById("msg");
var btn=document.getElementsByTagName('button')[0];
function finish(){
       msg.innerHTML="your evaluation is successful"
    }
btn.addEventListener('click',finish);
