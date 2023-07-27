let count = 0 ;
document.getElementById("incrase").onclick = function(){
    count += 1 ;
    document.getElementById("countNumber").innerHTML = count
}
document.getElementById("reset").onclick = function(){
    count = 0 ;
    document.getElementById("countNumber").innerHTML = count;
}
document.getElementById("decrease").onclick = function(){
    count -= 1 ;
    document.getElementById("countNumber").innerHTML = count;
}
let names ;
document.getElementById("Submit").onclick = function (){
    
    names = document.getElementById("inputName").value ;
    document.getElementById("msgPara").innerHTML = "Thank You " + names + " for Visiting Us!" ;
}
