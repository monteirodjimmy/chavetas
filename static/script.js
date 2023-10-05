var button = document.getElementById("calcular");
var intdiametro = document.getElementById("diametros");
var largura = document.getElementById("largura");
var altura = document.getElementById("altura")
var toleranciaeixofls = document.getElementById("toleranciaeixofls")
var toleranciaeixofli = document.getElementById("toleranciaeixofli")
var toleranciacuboils = document.getElementById("toleranciacuboils")
var toleranciacuboili = document.getElementById("toleranciacuboili")

var norma = [["6-8",2,2,2,"+0,025",0,"+0,060","+0,020","-0,004",-0.029,"+0,012",-0.013,"-0,006",-0.031,"-0,006",-0.031,1.2,"+0,1",0,1.0,"+0,1",0,0.16,0.08],
["8-10",3,3,3,"+0,025",0,"+0,060","+0,020","-0,004",-0.029,"+0,012",-0.013,"-0,006",-0.031,"-0,006",-0.031,1.8,"+0,1",0,1.4,"+0,1",0,0.16,0.08],
["10-12",4,4,4,"+0,030",0,"+0,078","+0,030",0,-0.03,"+0,015",-0.015,"-0,012",-0.042,"-0,012",-0.042,2.5,"+0,1",0,1.8,"+0,1",0,0.16,0.08],
["12-17",5,5,5,"+0,030",0,"+0,078","+0,030",0,-0.03,"+0,015",-0.015,"-0,012",-0.042,"-0,012",-0.042,3.0,"+0,1",0,2.3,"+0,1",0,0.25,0.16],
["17-22",6,6,6,"+0,030",0,"+0,078","+0,030",0,-0.03,"+0,015",-0.015,"-0,012",-0.042,"-0,012",-0.042,3.5,"+0,1",0,2.8,"+0,1",0,0.25,0.16],
["22-30",8,7,8,"+0,036",0,"+0,098","+0,010",0,-0.036,0,0,,0,0,0,4.0,"+0,2",0,3.3,"+0,2",0,0.25,0.16]
];

function calcularChaveta(){
    for (var i=0; i < norma.length; i++) {
        if (norma[i][0] === intdiametro.value){
            //console.log(norma[i])
            var chavetaVetorDados = norma [i];
            return chavetaVetorDados
        } 
    }
}

button.addEventListener("click",function(){
    largura.innerHTML = calcularChaveta()[1]
    altura.innerHTML = calcularChaveta()[2]
    toleranciaeixofls.innerHTML = calcularChaveta()[4]
    toleranciaeixofli.innerHTML = calcularChaveta()[5]
    toleranciacuboils.innerHTML = calcularChaveta()[6]
    toleranciacuboili.innerHTML = calcularChaveta()[7]

     console.log(intdiametro.value[1])})