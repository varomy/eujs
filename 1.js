var arr = ["green","blue","red","yellow"];
function aa(){
for(i=0; i<56;i++){
    x=Math.floor(Math.random() * arr.length);
    var d=document.createElement("div");
    d.classList.add("ww");
    d.style.background=arr[x];
    document.getElementById("box").appendChild(d);
}
 
}
var b=0; 

function ss() {  

 var idVar = setInterval(change, 100);  
  function change() {   

    if (b == 56){
       clearInterval(idVar)
    } 
    else {      
        var o=document.getElementsByClassName("ww");
        o[b].style.display = "block";
        b++;       
    }  
   }
  }