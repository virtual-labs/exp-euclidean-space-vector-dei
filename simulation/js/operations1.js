function showAdd(){
    document.getElementById('add').style.display = "block";
    document.getElementById('mul').style.display = "none";
    document.getElementById("btn1").style.backgroundColor = "red";
    document.getElementById("btn2").style.backgroundColor = "lightblue";
    
}

function showMul(){
    document.getElementById('add').style.display = "none";
    document.getElementById('mul').style.display = "block";
    document.getElementById("btn1").style.backgroundColor = "lightblue";
    document.getElementById("btn2").style.backgroundColor = "yellow";
}
