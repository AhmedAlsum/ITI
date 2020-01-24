var subjects = [{
    "subname": "JAVAScript",
    "subID": 20,
    
}, {
    "subname": "JAVAScript",
    "subID": 30
},{
    "subname": "JAVAScript",
    "subID": 40
},{
    "subname": "JAVAScript",
    "subID": 50
},
{
    "subname": "JAVAScript",
    "subID": 60
}];


var tbody = document.getElementById('tbody');
for (var i = 0; i < Object.keys(subjects).length; i++) {
    var tr = "<tr>";
    tr += "<td>" + subjects[i].subname + "<br>"+subjects[i].subID+ "</td>"
    +"<td>" + subjects[i].subname + "<br>"+subjects[i].subID+ "</td>"
    +"<td>" + subjects[i].subname + "<br>"+subjects[i].subID+ "</td>"
    +"<td>" + subjects[i].subname + "<br>"+subjects[i].subID+ "</td>"
    +"<td>" + subjects[i].subname + "<br>"+subjects[i].subID+ "</td>"
    +"<td>" + subjects[i].subname + "<br>"+subjects[i].subID+ "</td>"
    + "<td>" + subjects[i].subname + "<br>"+subjects[i].subID+ "</td>"+"</td></tr>";
        
   
   
    tbody.innerHTML += tr;
    
}



var btn4 = document.getElementById("myBtn4");
var list = document.getElementById("myModal04");
var table = document.getElementById("table");
btn4.addEventListener("click",function(){
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
})
