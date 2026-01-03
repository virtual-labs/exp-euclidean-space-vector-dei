function forn1(){
    document.getElementById('1d').style.display = "block";
    document.getElementById('2d').style.display = "none";
    document.getElementById('3d').style.display = "none";
    document.getElementById('nd').style.display = "none";
    document.getElementById("btn1").style.backgroundColor = "#8E44AD";
    document.getElementById("btn2").style.backgroundColor = "rgb(4, 255, 63)";
    document.getElementById("btn3").style.backgroundColor = "#4857ff"; 
    document.getElementById("btn4").style.backgroundColor = "#67eb53"; 
  
    
}

function forn2(){
    document.getElementById('1d').style.display = "none";
    document.getElementById('2d').style.display = "block";
    document.getElementById('3d').style.display = "none";
    document.getElementById('nd').style.display = "none";
   
    document.getElementById("btn1").style.backgroundColor = "green";
    document.getElementById("btn2").style.backgroundColor = "#8E44AD";
    document.getElementById("btn3").style.backgroundColor = "#4857ff"; 
    document.getElementById("btn4").style.backgroundColor = "#67eb53"; 
}
function forn3(){
    document.getElementById('1d').style.display = "none";
    document.getElementById('2d').style.display = "none";
    document.getElementById('3d').style.display = "block";
    document.getElementById('nd').style.display = "none";
    document.getElementById("btn1").style.backgroundColor = "green";
    document.getElementById("btn2").style.backgroundColor = "rgb(4, 255, 63)";
    document.getElementById("btn3").style.backgroundColor = "#8E44AD"; 
    document.getElementById("btn4").style.backgroundColor = "#67eb53"; 
    
}
function foranyn(){
    document.getElementById('1d').style.display = "none";
    document.getElementById('2d').style.display = "none";
    document.getElementById('3d').style.display = "none";
    document.getElementById('nd').style.display = "block";
   
    document.getElementById("btn1").style.backgroundColor = "green";
    document.getElementById("btn2").style.backgroundColor = "rgb(4, 255, 63)";
    document.getElementById("btn3").style.backgroundColor = "#4857ff"; 
    document.getElementById("btn4").style.backgroundColor = "#8E44AD";
    
}

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
  

  function onedspaceyes(btn1){
   
    document.getElementById('display1dimage').innerHTML='CORRECT! <br><br> <img src="./images/1d graph.jpg" alt="2-D space" width=220vw height=200vh/>';
    var count=1;
    var property = document.getElementById(btn1);
    if (count == 0){
        property.style.backgroundColor = "#FFFFFF"
        count=1;        
    }
    else{
        property.style.backgroundColor = "#0f0"
        count=0;
    }
}

  function onedspaceno(btn2){
   
    document.getElementById('display1dimage').innerHTML='INCORRECT! <br> It can be visualized.<br><br><img src="./images/1d graph.jpg" alt="2-D space" width=220vw height=200vh/>';
    var count=1;
    var property = document.getElementById(btn2);
    if (count == 0){
        property.style.backgroundColor = "#FFFFFF"
        count=1;        
    }
    else{
        property.style.backgroundColor = "#f00"
        count=0;
    }
    document.getElementById(btn1).style.backgroundColor = "#FFFFFF";
  }


  function twodspaceyes(btn3){
   

    document.getElementById('display2dimage').innerHTML='CORRECT! <br> <br> <img src="./images/twoaxisgraph.jpg" alt="2-D space" width=260vw height=250vh/>';
    var count=1;
    var property = document.getElementById(btn3);
    if (count == 0){
        property.style.backgroundColor = "#FFFFFF"
        count=1;        
    }
    else{
        property.style.backgroundColor = "#0f0"
        count=0;
    }
  }
  function twodspaceno(btn4){

    document.getElementById('display2dimage').innerHTML='INCORRECT! <br> It can be visualized.<br><br> <img src="./images/twoaxisgraph.jpg" alt="2-D space" width=260vw height=250vh/>';
    var count=1;
    var property = document.getElementById(btn4);
    if (count == 0){
        property.style.backgroundColor = "#FFFFFF"
        count=1;        
    }
    else{
        property.style.backgroundColor = "#f00"
        count=0;
    }
  }


  function threedspaceyes(btn5){
   

    document.getElementById('display3dimage').innerHTML='CORRECT! <br> <br><img src="./images/threeaxisgraph.jpg" alt="3-D space" width=260vw height=250vh/>';
    var count=1;
    var property = document.getElementById(btn5);
    if (count == 0){
        property.style.backgroundColor = "#FFFFFF"
        count=1;        
    }
    else{
        property.style.backgroundColor = "#0f0"
        count=0;
    }
  }
  function threedspaceno(btn6){
    

    document.getElementById('display3dimage').innerHTML='INCORRECT!<br> It can be visualized.<br><br> <img src="./images/threeaxisgraph.jpg" alt="3-D space" width=260vw height=250vh/>';
    var count=1;
    var property = document.getElementById(btn6);
    if (count == 0){
        property.style.backgroundColor = "#FFFFFF"
        count=1;        
    }
    else{
        property.style.backgroundColor = "#f00"
        count=0;
    }
  }
  function ndspacegeomyes(btn7){
    
    document.getElementById('ndspacegeom').innerHTML="INCORRECT!<br>Geometric Visualization not possible."
    var count=1;
    var property = document.getElementById(btn7);
    if (count == 0){
        property.style.backgroundColor = "#FFFFFF"
        count=1;        
    }
    else{
        property.style.backgroundColor = "#f00"
        count=0;
    }
    
  }
  function ndspacegeomno(btn8){
   
    document.getElementById('ndspacegeom').innerHTML="CORRECT!"
    var count=1;
    var property = document.getElementById(btn8);
    if (count == 0){
        property.style.backgroundColor = "#FFFFFF"
        count=1;        
    }
    else{
        property.style.backgroundColor = "#0f0"
        count=0;
    }
    
  }



