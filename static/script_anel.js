//botoes
var diameter_anel_form = document.getElementById("diameter-form");
var tipo_anel_form = document.getElementById("tipo-anel-form")

//saidas
var intdiametro = document.getElementById("diametros");
var tolerancia = document.getElementById("tolerancia")
var largura = document.getElementById("largura");
var altura = document.getElementById("altura");

//  [0    1         2        3      4      5    6     7    8        9 ]
var norma = [
    
    [1.9, 	0.8, 	3,  	2.8,  	2.7,  	7,    	1,   	0.4,	0.5],
    [2.2,	0.9, 	4,  	3.8,  	3.7,  	8.6,  	1,   	0.4, 	0.5],
    [2.5, 	1.1, 	5, 	    4.8,    4.7,  	10.3, 	1,   	0.6, 	0.7],
    [2.7, 	1.3, 	6,  	5.7,  	5.6,  	11.7, 	1.2, 	0.7, 	0.8],
    [3.1, 	1.4, 	7,  	6.7,  	6.5,  	13.5, 	1.2, 	0.8, 	0.9],
    [3.2, 	1.5, 	8,  	7.6,  	7.4,  	14.7,	1.2,  	0.8, 	0.9],
    [3.3, 	1.7, 	9,  	8.6,  	8.4,  	16,   	1.2,  	1, 	1.1],
    [3.3, 	1.8, 	10, 	9.6,  	9.3,  	17,   	1.5, 	1, 	1.1],
    [3.3, 	1.8, 	12, 	11.5, 	11,   	19,   	1.7,  	1, 	1.1],
    [3.5, 	2.1, 	14, 	13.4, 	12.9,	 21.4, 	1.7,  	1, 	1.1],
    [3.6, 	2.2, 	15, 	14.3, 	13.8, 	22.6,  	1.7,  	1, 	1.1],
    [3.7, 	2.2, 	16, 	15.2, 	14.7, 	23.8,  	1.7,  	1, 	1.1],
    [3.8, 	2.3, 	17, 	16.2, 	15.7, 	25,    	1.7,  	1, 	1.1],
    [3.9, 	2.4, 	18, 	17,   	16.5, 	26.2,  	2,    	1.2, 	1.3],
    [3.9, 	2.5, 	19, 	18,   	17.5, 	27.2,  	2,   	1.2, 	1.3],
    [4,   	2.6, 	20, 	19,   	18.5, 	28.4,  	2,    	1.2, 	1.3],
    [4.2, 	2.8, 	22, 	21,   	20.5, 	30.8, 	2,    	1.2, 	1.3],
    [4.4, 	3,   	24, 	22.9, 	22.2, 	33.2,  	2,    	1.2, 	1.3],
    [4.4, 	3,  	25, 	23.9, 	23.2, 	34.2,  	2,    	1.2, 	1.3],
    [4.5, 	3.1, 	26, 	24.9, 	24.2, 	35.5,  	2,    	1.2, 	1.3],
    [4.7, 	3.2, 	28, 	26.6, 	25.9, 	37.9,  	2,    	1.5, 	1.6],
    [5,   	3.5, 	30, 	28.6, 	27.9, 	40.5,  	2,   	1.5, 	1.6],
    [5.2, 	3.6, 	32, 	30.3, 	29.6, 	43,	2.5, 	1.5, 	1.6],
    [5.6, 	3.9, 	35, 	33, 	32.2, 	46.8,	2.5, 	1.5, 	1.6],
    [5.8, 	4.2, 	38, 	36, 	35.2, 	50.2,	2.5, 	1.75, 	1.85],
    [6,   	4.4, 	40, 	37.5, 	36.5, 	52.6, 	2.5, 	1.75, 	1.85],
    [6.7, 	4.7, 	45, 	42.5, 	41.5, 	59.1, 	2.5, 	1.75, 	1.85],
    [6.8, 	4.9, 	47, 	44.5, 	43.5,	"-" , 	2.5, 	1.75, 	1.85],
    [6.9, 	5.1, 	50, 	47, 	45.8, 	64.5, 	2.5, 	2,	2.15],
    [7.2, 	5.4, 	55, 	52, 	50.8, 	70.2, 	2.5, 	2, 	2.15],
    [7.4, 	5.8, 	60, 	57, 	55.8, 	75.6, 	2.5, 	2,	2.15],
    [8.4, 	7,   	75, 	72, 	70.5, 	92.7, 	3,	2.5,  	2.65]
    
];

//const filterArray = array.filter((num)=> num === intdiametro.value)

function bucarDados(){
    for (var i=0; i < norma.length; i++) {
        if (norma[i][2] === intdiametro.value){
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
       
    }
    else if(tolerancia.value==="FOLGA"){
        toleranciaeixofls.innerHTML = bucarDados()[4]
        toleranciaeixofli.innerHTML = bucarDados()[5]
        toleranciacuboils.innerHTML = bucarDados()[7]
        toleranciacuboili.innerHTML = bucarDados()[8]
        document.getElementsByClassName("nome-tolerancia")[0].innerHTML = bucarDados()[6]
        document.getElementsByClassName("nome-tolerancia")[1].innerHTML = bucarDados()[9]
       // altura.style.margin = "0px 0px 0px 215px"
       // largura.style.margin = "0px 0px 0px 205px"
    }
    else{
        toleranciaeixofls.innerHTML = bucarDados()[16]
        toleranciaeixofli.innerHTML = bucarDados()[17]
        toleranciacuboils.innerHTML = bucarDados()[16]
        toleranciacuboili.innerHTML = bucarDados()[17]
        document.getElementsByClassName("nome-tolerancia")[0].innerHTML = bucarDados()[18]
        document.getElementsByClassName("nome-tolerancia")[1].innerHTML = bucarDados()[18]
       // altura.style.margin = "0px 0px 0px 315px"
       // largura.style.margin = "0px 0px 0px 305px"
    }
    
    t1.innerHTML = bucarDados()[19]
    t2.innerHTML = bucarDados()[22]
    t1_toleranciaeixofls.innerHTML = bucarDados()[20]
    t1_toleranciaeixofli.innerHTML = bucarDados()[21]
    t2_toleranciacuboils.innerHTML = bucarDados()[20]
    t2_toleranciacuboili.innerHTML = bucarDados()[21]


     console.log(intdiametro.value)

};

tipo_anel__form.addEventListener("click", function(){
        //vou mudar o src da imagem de cima aqui
       
        exibirDados()
})

diameter_form.addEventListener("click",function(){  
     exibirDados()
    })

    