var mainObj = [
    {
        name: "Kapil",
        age:  21,
        status: "Active"
    },
    {
        name: "John",
        age:  28,
        status: "Inactive"
    },
    {
        name: "Deos",
        age:  18,
        status: "Active"
    }
];
var k = '<tbody>'
for(i = 0;i < mainObj.length; i++){
    k+= '<tr>';
    k+= '<td>' + mainObj[i].name +  mainObj[i].age+'</td>';
    k+= '<td>' + mainObj[i].age + '</td>';
    k+= '<td>' + mainObj[i].status + '</td>';
    k+= '</tr>';
}
k+='</tbody>';
document.getElementById('tablebody').innerHTML = k;