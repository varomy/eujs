

function tableCreate(){
    var nr=document.getElementById("n").value;
    var nd=document.getElementById("m").value;
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.style.width  = '500px';
    tbl.style.border = '1px solid black';
    for(var i = 0; i < nr; i++){
        var tr = tbl.insertRow();

        for(var j = 0; j < nd; j++){
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('.'));
                td.style.border = '1px solid black';
                td.classList.add('qwe');
                
                //----------------------------------------

                

        }
    }
    body.appendChild(tbl);
  } 
  setInterval(function(){
      var aaa=document.getElementsByClassName("qwe");
    var arr = ["green","blue","red","yellow"];
    var a=b=c=d=0; 
    for(var v=0;v<aaa.length;v++){
        x=Math.floor(Math.random() * arr.length); 


        aaa[v].style.backgroundColor=arr[x]; 
        if(x==0){
            a++;
            };
            if(x==1){
            b++;
            };
            if(x==2){
            c++;
            };
            if(x==3){
            d++;
            };
    }
    console.log("green"+a);
    console.log("blue"+b);
    console.log("red"+c);
    console.log("yellow"+d);
}, 3000); 




    