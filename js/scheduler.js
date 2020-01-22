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