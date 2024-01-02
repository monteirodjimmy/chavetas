//botoes
var diameter_form = document.getElementById("diameter-form");
var tolerancia_form = document.getElementById("tolerancia-form")

//saidas
var intdiametro = document.getElementById("diametros");
var tolerancia = document.getElementById("tolerancia")
var largura = document.getElementById("largura");
var altura = document.getElementById("altura");
//var tipo_tolerancia = document.getElementById("tipo-tolerancia")
var tipo_tolerancia = document.getElementsByClassName("tipo-tolerancia")
console.log(tipo_tolerancia[1].innerHTML)
var toleranciaeixofls = document.getElementById("toleranciaeixofls")
var toleranciaeixofli = document.getElementById("toleranciaeixofli")
var toleranciacuboils = document.getElementById("toleranciacuboils")
var toleranciacuboili = document.getElementById("toleranciacuboili")
var t1 = document.getElementById("t1")
var t2 = document.getElementById("t2")
var t1_toleranciaeixofls = document.getElementById("tolerancia-profundidade-eixofls")
var t1_toleranciaeixofli = document.getElementById("tolerancia-profundidade-eixofli")
var t2_toleranciacuboils = document.getElementById("tolerancia-profundidade-cuboils")
var t2_toleranciacuboili = document.getElementById("tolerancia-profundidade-cuboili")
//  [0     1 2 3            4      5  6      7          8     9      10     11       12    13       14      15      16     17        18  19   20   21  22    23    24]
var norma = [
    ["6-8",2,2,2,         "+0,025",0,"H9","+0,060","+0,020","D10","-0,004","-0,029","N9","+0,012","-0,013","JS9","-0,006","-0,031", "P9",1.2,"+0,1",0,  1,   0.16,0.08],
    ["8-10",3,3,3,        "+0,025",0,"H9","+0,060","+0,020","D10","-0,004","-0,029","N9","+0,012","-0,013","JS9","-0,006","-0,031", "P9",1.8,"+0,1",0,  1.4, 0.16,0.08],
    ["10-12",4,4,4,       "+0,030",0,"H9","+0,078","+0,030","D10",0,      "-0,03",  "N9","+0,015","-0,015","JS9","-0,012","-0,042", "P9",2.5,"+0,1",0,  1.8, 0.16,0.08],
    ["12-17",5,5,5,       "+0,030",0,"H9","+0,078","+0,030","D10",0,      "-0,03",  "N9","+0,015","-0,015","JS9","-0,012","-0,042", "P9",3.0,"+0,1",0,  2.3, 0.25,0.16],
    ["17-22",6,6,6,       "+0,030",0,"H9","+0,078","+0,030","D10",0,      "-0,03",  "N9","+0,015","-0,015","JS9","-0,012","-0,042", "P9",3.5,"+0,1",0,  2.8, 0.25,0.16],
    ["22-30",8,7,8,       "+0,036",0,"H9","+0,098","+0,010","D10",0,      "-0,036", "N9","+0,018","-0,018","JS9","-0,015","-0,051", "P9",4.0,"+0,2",0,  3.3, 0.25,0.16],
    ["30-38",10,8,10,     "+0,036",0,"H9","+0,098","+0,010","D10",0,      "-0,036", "N9","+0,018","-0,018","JS9","-0,015","-0,051", "P9",5.0,"+0,2",0,  3.3, 0.4,0.25],
    ["38-44",12,8,12,     "+0,043",0,"H9","+0,120","+0,50", "D10",0,      "-0,043", "N9","+0,021","-0,022","JS9","-0,018","-0,061", "P9",5.0,"+0,2",0,  3.3, 0.4,0.25],
    ["44-50",14,9,14,     "+0,043",0,"H9","+0,120","+0,50", "D10",0,      "-0,043", "N9","+0,021","-0,022","JS9","-0,018","-0,061", "P9",5.5,"+0,2",0,  3.8,0.4,0.25],
    ["50-58",16,10,16,    "+0,043",0,"H9","+0,120","+0,50", "D10",0,      "-0,043", "N9","+0,021","-0,022","JS9","-0,018","-0,061", "P9",6.0,"+0,2",0,  4.3,0.4,0.25],
    ["58-65",18,11,18,    "+0,043",0,"H9","+0,120","+0,50", "D10",0,      "-0,043", "N9","+0,021","-0,022","JS9","-0,018","-0,061", "P9",7.0,"+0,2",0,  4.4,0.4,0.25],
    ["65-75",20,12,20,    "+0,052",0,"H9","+0,149","+0,065","D10",0,      "-0,052", "N9","+0,026","-0,026","JS9","-0,022","-0,074", "P9",7.5,"+0,2",0,4.9,0.6,0.4],
    ["75-85",22,14,22,    "+0,052",0,"H9","+0,149","+0,065","D10",0,      "-0,052", "N9","+0,026","-0,026","JS9","-0,022","-0,074", "P9",9.0,"+0,2",0,5.4,0.6,0.4],
    ["85-95",25,14,25,    "+0,052",0,"H9","+0,149","+0,065","D10",0,      "-0,052", "N9","+0,026","-0,026","JS9","-0,022","-0,074", "P9",9.0,"+0,2",0,5.4,0.6,0.4],
    ["95-110",28,16,28,   "+0,052",0,"H9","+0,149","+0,065","D10",0,      "-0,052", "N9","+0,026","-0,026","JS9","-0,022","-0,074", "P9",10.0,"+0,2",0,6.4,0.6,0.4],
    ["110-130",32,18,32,  "+0,062",0,"H9","+0,180","+0,080","D10",0,      "-0,062", "N9","+0,031","-0,031","JS9","-0,026","-0,088", "P9",11.0,"+0,2",0,7.4,0.6,0.4],
    ["130-150",36,20,36,  "+0,062",0,"H9","+0,180","+0,080","D10",0,      "-0,062", "N9","+0,031","-0,031","JS9","-0,026","-0,088", "P9",12.0,"+0,3",0,8.4,1.0,0.7],
    ["150-170",40,22,40,  "+0,062",0,"H9","+0,180","+0,080","D10",0,      "-0,062", "N9","+0,031","-0,031","JS9","-0,026","-0,088", "P9",13.0,"+0,3",0,9.4,1.0,0.7],
    ["170-200",45,25,45,  "+0,062",0,"H9","+0,180","+0,080","D10",0,      "-0,062", "N9","+0,031","-0,031","JS9","-0,026","-0,088", "P9",15.0,"+0,3",0,10.5,1.0,0.7],
    ["200-230",50,28,50,  "+0,062",0,"H9","+0,180","+0,080","D10",0,      "-0,062", "N9","+0,031","-0,031","JS9","-0,026","-0,088", "P9",17.0,"+0,3",0,11.4,1.0,0.7],
    ["230-260",56,32,56,  "+0,074",0,"H9","+0,220","+0,100","D10",0,      "-0,074", "N9","+0,037","-0,037","JS9","-0,032","-0,106","P9",20.0,"+0,3",0,12.4,1.0,0.7],
    ["260-290",63,32,63,  "+0,074",0,"H9","+0,220","+0,100","D10",0,      "-0,074", "N9","+0,037","-0,037","JS9","-0,032","-0,106","P9",20.0,"+0,3",0,12.4,1.6,1.2],
    ["290-330",70,36,70,  "+0,074",0,"H9","+0,220","+0,100","D10",0,      "-0,074", "N9","+0,037","-0,037","JS9","-0,032","-0,106","P9",22.0,"+0,3",0,14.4,1.6,1.2],
    ["330-380",80,40,80,  "+0,074",0,"H9","+0,220","+0,100","D10",0,      "-0,074", "N9","+0,037","-0,037","JS9","-0,032","-0,106","P9",25.0,"+0,3",0,15.5,2.5,2.0],
    ["380-440",90,45,90,  "+0,087",0,"H9","+0,260","+0,120","D10",0,      "-0,087", "N9","+0,043","-0,044","JS9","-0,037","-0,124","P9",28.0,"+0,3",0,17.4,2.5,2.0],
    ["440-500",100,50,100,"+0,087",0,"H9","+0,260","+0,120","D10",0,      "-0,087", "N9","+0,043","-0,044","JS9","-0,037","-0,124","P9",31.0,"+0,3",0,19.5,2.5,2.0]
];

//const filterArray = array.filter((num)=> num === intdiametro.value)

function bucarDados(){
    for (var i=0; i < norma.length; i++) {
        if (norma[i][0] === intdiametro.value){
            //console.log(norma[i])
            var chavetaVetorDados = norma [i];
            return chavetaVetorDados
        } 
    }
}

function exibirDados (){
    
    largura.innerHTML = bucarDados()[1]
    altura.innerHTML = bucarDados()[2]
    if (tolerancia.value==="NORMAL"){

        toleranciaeixofls.innerHTML = bucarDados()[10]
        toleranciaeixofli.innerHTML = bucarDados()[11]
        toleranciacuboils.innerHTML = bucarDados()[13]
        toleranciacuboili.innerHTML = bucarDados()[14]
        document.getElementsByClassName("nome-tolerancia")[0].innerHTML = bucarDados()[12]
        document.getElementsByClassName("nome-tolerancia")[1].innerHTML = bucarDados()[15]
        altura.style.margin = "0px 0px 0px 235px"
        largura.style.margin = "0px 0px 0px 225px"
       
    }
    else if(tolerancia.value==="FOLGA"){
        toleranciaeixofls.innerHTML = bucarDados()[4]
        toleranciaeixofli.innerHTML = bucarDados()[5]
        toleranciacuboils.innerHTML = bucarDados()[7]
        toleranciacuboili.innerHTML = bucarDados()[8]
        document.getElementsByClassName("nome-tolerancia")[0].innerHTML = bucarDados()[6]
        document.getElementsByClassName("nome-tolerancia")[1].innerHTML = bucarDados()[9]
        altura.style.margin = "0px 0px 0px 215px"
        largura.style.margin = "0px 0px 0px 205px"
    }
    else{
        toleranciaeixofls.innerHTML = bucarDados()[16]
        toleranciaeixofli.innerHTML = bucarDados()[17]
        toleranciacuboils.innerHTML = bucarDados()[16]
        toleranciacuboili.innerHTML = bucarDados()[17]
        document.getElementsByClassName("nome-tolerancia")[0].innerHTML = bucarDados()[18]
        document.getElementsByClassName("nome-tolerancia")[1].innerHTML = bucarDados()[18]
        altura.style.margin = "0px 0px 0px 315px"
        largura.style.margin = "0px 0px 0px 305px"
    }
    
    t1.innerHTML = bucarDados()[19]
    t2.innerHTML = bucarDados()[22]
    t1_toleranciaeixofls.innerHTML = bucarDados()[20]
    t1_toleranciaeixofli.innerHTML = bucarDados()[21]
    t2_toleranciacuboils.innerHTML = bucarDados()[20]
    t2_toleranciacuboili.innerHTML = bucarDados()[21]


     console.log(intdiametro.value)

};

tolerancia_form.addEventListener("click", function(){
        tipo_tolerancia[0].innerHTML = tolerancia.value
        tipo_tolerancia[1].innerHTML = tolerancia.value
        
        //document.getElementsByClassName("nome-tolerancia")[0].style.border = "2px solid #fff"
        //document.getElementsByClassName("nome-tolerancia")[1].style.border = "2px solid #fff"
        exibirDados()
})

diameter_form.addEventListener("click",function(){  
     exibirDados()
    })

    