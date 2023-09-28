alert('Oi !');

function ficarverde(){
    var btn = document.getElementById("btnverde")
    btn.style.backgroundColor = "rgb(11, 223, 11)";
}function ficarbranco(){
    var btn = document.getElementById("btnverde")
    var btn2 = document.getElementById("btnvermelho")
    var btn3 = document.getElementById("btncc")
    btn.style.backgroundColor = "white";
    btn2.style.backgroundColor = "white";
    btn3.style.backgroundColor = "white";
}function ficarvermelho(){
    var btn = document.getElementById("btnvermelho")
    btn.style.backgroundColor = "red";
}function ficarroxo(){
    var btn2 = document.getElementById("btncc")
    btn2.style.backgroundColor = "purple";
}function checadados(){
    var user = document.getElementsByName("user")
    var pass = document.getElementsByName("pass")
    var fone = document.getElementsByName("fone")
    var data = document.getElementsByName("data")
    var ende = document.getElementsByName("ende")
 
    if(user == ""){
        alert("Falta preencher algum dado !")
    }
}
