var button = document.getElementById("calcular");
var intdiametro = document.getElementById("diametros");
var largura = document.getElementById("largura");

var norma = [["6-8",2,2,2,0.0025,0],
["8-10",3,3,3,0.0025,0],
["10-12",4,4,4,0.0025,0]];

function calcularChaveta(){
    for (var i=0; i < norma.length; i++) {
        if (norma[i][0] === intdiametro.value){
           // console.log(norma[i][1],norma[i][2],norma[i][3],norma[i][4])
            return norma[i][1],norma[i][2],norma[i][2];
        } 
    }
}

button.addEventListener("click",function(){
    largura.innerHTML = calcularChaveta()
     console.log(intdiametro.value)})