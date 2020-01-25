var checkedTab = false;
var passwordOfUser = null;
document.getElementById('menu').addEventListener("click",function(){
    if (checkedTab === false)
    {
        document.getElementById('tabs').style.display = "block";
        checkedTab = true;
    }
    else
    {
        document.getElementById('tabs').style.display = "none";
        checkedTab = false;
    }
});


/***********************************************************************************/


var isClicked = false;
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");

var x = document.getElementById("myModal01");
var y = document.getElementById("myModal02");
var z = document.getElementById("myModal03");
var table = document.getElementById("table");

var facebook = true;
var twitter = true;
var youtube = true;
btn1.addEventListener("click",function(e) {
  if (facebook == true) {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
    facebook = false;
  } else {
    x.style.display = "none";
    facebook = true;
  }
});

btn2.addEventListener("click",function(){

  if (twitter == true) {
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";
    twitter = false;
  } else {
    y.style.display = "none";
    twitter = true;
  }

});

btn3.addEventListener("click",function(){

  if (youtube == true) {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
    youtube = false;
  } else {
    z.style.display = "none";
    youtube = true;
  }
})

  
  window.onclick = function(event) {
    if (event.target == myModal01) {
        myModal01.style.display = "none";
    }
    if (event.target == myModal02) {
      myModal02.style.display = "none";
  }
    if (event.target == myModal03) {
        myModal03.style.display = "none";
    } 
  }

  /***********************************************************************************/