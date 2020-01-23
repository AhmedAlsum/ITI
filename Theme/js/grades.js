var ad=document.getElementsByClassName("rowofsubject")[0];
var ne=document.getElementsByClassName("rowofsubject")[1];
var pro=document.getElementsByClassName("rowofsubject")[2];
var sy=document.getElementsByClassName("rowofsubject")[3];
var adc=document.getElementsByClassName("close")[0];
var nec=document.getElementsByClassName("close")[1];
var proc=document.getElementsByClassName("close")[2];
var syc=document.getElementsByClassName("close")[3];
var maindiv=document.getElementsByClassName("main")[0];
var con=document.getElementsByClassName("content")[0];
var over=document.getElementsByClassName("overlay");
var i=0;
function funon (e){
    i=e.target.id;
over[i].style.display="block";
}
function fun(){
  over[i].style.display="none";
  //console.log("hello"); 
}
  ad.addEventListener('click',funon);
  ne.addEventListener('click',funon);
  pro.addEventListener('click',funon);
  sy.addEventListener('click',funon);
  adc.addEventListener('click',fun);
  nec.addEventListener('click',fun);
  proc.addEventListener('click',fun);
  syc.addEventListener('click',fun);
 
 
 



