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
var list = document.getElementById("myModal04");
var table = document.getElementById("table");

btn1.onclick = function() {
    showHiddenTOdolist1();
  }

btn2.onclick = function() {
    showHiddenTOdolist2();
  }

btn3.onclick = function() {
    showHiddenTOdolist3();
  }

  btn4.onclick = function() {
    showHiddenTOdolist4();
  }
  
  function showHiddenTOdolist1() {
   
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      list.style.display = "none";

    } else {
      x.style.display = "none";
    }
  }

  function showHiddenTOdolist2() {
    
    if (y.style.display === "none") {
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none";
      list.style.display = "none";

    } else {
      y.style.display = "none";
    }
  }

  function showHiddenTOdolist3() {
    if (z.style.display === "none") {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "block";
      list.style.display = "none";
    } else {
      z.style.display = "none";
    }
  }

  function showHiddenTOdolist4() {
    if (list.style.display === "none") {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "none";
      list.style.display = "block";
      table.style.display = "none";
    } else {
      list.style.display = "none";
      table.style.display = "block";
    }
  }
  
  window.onclick = function(event) {
    if (event.target == myModal01) {
        myModal01.style.display = "none";
    }
  }

  /***********************************************************************************/