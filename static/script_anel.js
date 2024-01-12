//botoes
var diameter_anel_form = document.getElementById("diameter-anel-form");
var tipo_anel_form = document.getElementById("tipo-anel-form")
//entradas
var diametros = document.getElementById("diametros")
console.log(parseInt(diametros.value))
var tipo = document.getElementById("tipo")
console.log(tipo.value)
//saidas
var D3 = document.getElementById("D3");
var D4 = document.getElementById("D4")
var D2 = document.getElementById("D2");
var M = document.getElementById("M");

//manipulação de imagens
imagem = document.getElementById("img-anel")


//  [0    1         2        3      4      5          6       7      9 ]
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

//  [0    1    2     3      4      5        6       7       8 ]
var norma_int = [
    //a    b  d1     d2      d3     d4      d5      H/s      M
    [2.4, 1.1, 8,	8.4,	8.7,	3,      1,	    0.8,	0.9],
    [2.5, 1.3, 9,	9.4,	9.8,	3.7,	1,	    0.8,	0.9],
    [3.2, 1.4, 10,	10.4,	10.8,	3.3,	1.2,	1,	    1.1],
    [3.3, 1.5, 11,	11.4,	11.8,	0.0,	1.2,	1,	    1.1],
    [3.4, 1.7, 12,	12.5,	13,	    4.9,	1.5,	1,	    1.1],
    [3.7, 1.9, 14,	14.6,	15.1,	6.2,	1.7,	1,	    1.1],
    [3.7, 2,   15,	15.7,	16.2,	7.2,	1.7,	1,	    1.1],
    [3.8, 2,   16,	16.8,	17.3,	8,	    1.7,	1,	    1.1],
    [3.9, 2.1, 17,	17.8,	18.3,	8.8,	1.7,	1,  	1.1],
    [4.1, 2.2, 18,	19,     19.5,	9.4,	2,	    1,	    1.1],
    [4.1, 2.2,  19,	20,	    20.5,	10.4,	2,	    1,	    1.1],
    [4.2, 2.3,  20,	21,	    21.5,	11.2,	2,	    1,	    1.1],
    [4.2, 2.5,  22,	23,	    23.5,	13.2,	2,	    1,	    1.1],
    [4.4, 2.6,  24,	25.2,	25.9,	14.8,	2,	    1.2,	1.3],
    [4.5, 2.7,  25,	26.2,	26.9,	15.5,	2,	    1.2,	1.3],
    [4.7, 2.8,  26,	27.2,	27.9,	16.1,	2,	    1.2,	1.3],
    [4.8, 2.9,  28,	29.4,	30.1,	17.9,	2,	    1.2,	1.3],
    [4.8, 3,    30,	31.4,	32.1,	19.9,	2,	    1.2,	1.3],
    [5.2, 3.1,  31, 32.7,   33.4,   0.0,    2.5,    1.2,    1.3],
    [5.4, 3.2,  32,	33.7,	34.4,	20.6,	2.5,	1.2,	1.3],
    [5.4, 3.4,  35,	37,	    37.8,	23.6,	2.5,	1.5,	1.6],
    [5.5, 3.7,  38,	40,	    40.8,	26.4,	2.5,	1.5,	1.6],
    [5.8, 3.9,  40,	42.5,	43.5,	27.8,	2.5,	1.75,	1.85],
    [6.2, 4.3,  45,	47.5,	48.5,	32,	    2.5,	1.75,	1.85],
    [6.4, 4.4,  47,	49.5,	50.5,	33.5,	2.5,	1.75,	1.85],
    [6.5, 4.6,  50,	53,	    54.2,	36.3,	2.5,	2,	    2.15],
    [6.8, 5,    55, 58,	    59.2,	40.7,	2.5,	2,	    2.15],
    [7.3, 5.4,  60,	63,	    64.2,	44.7,	2.5,	2,	    2.15],
    [7.8, 6.6,  75,	78,	    79.5,	58.6,	3,	    2.5,	2.65]
    
];

/*
for (var i=0; i < norma.length; i++) {
    if (norma[i][2] === parseInt(diametros.value)){
        console.log(norma[i])
        var chavetaVetorDados = norma [i];
    } 
}
*/


function bucarDados(){
    if (tipo.value==="EIXO"){
        for (var i=0; i < norma.length; i++) {
            if (norma[i][2] === parseInt(diametros.value)){
                //console.log(norma[i])
                var chavetaVetorDados = norma [i];
                return chavetaVetorDados
            } 
        }
    }
    else if (tipo.value ==="FURO"){
        for (var i=0; i < norma_int.length; i++) {
            if (norma_int[i][2] === parseInt(diametros.value)){
                //console.log(norma[i])
                var chavetaVetorDados = norma_int [i];
                return chavetaVetorDados
            } 
        }
    }
   
}

console.log(bucarDados()[8])


function exibirDados (){
    
    if (tipo.value==="EIXO"){
        D2.innerHTML = bucarDados()[3]
        M.innerHTML = bucarDados()[8]
        D3.innerHTML = bucarDados()[4]
        D4.innerHTML = bucarDados()[5]
        //imagem.setAttribute('src','./static/anel_dimentions_04.png')
    }
    else if (tipo.value ==="FURO"){ //vou pegar de outra tabela
        D2.innerHTML = bucarDados()[3]
        M.innerHTML = bucarDados()[8]
        D3.innerHTML = bucarDados()[4]
        D4.innerHTML = bucarDados()[5]
        //imagem.setAttribute('src','./static/anel_interno_dimentions_02.png')
        //tem que mudar o Inner HTML ou Inner Text do D4- Diâmtro externo do anel:
    }

};

tipo_anel_form.addEventListener("click", function(){
        //vou mudar o src da imagem de cima aqui
        if (tipo.value==="EIXO"){
             //vou ter que voltar o Inner HTML para o anterior aqui
            imagem.setAttribute('src','./static/anel_dimentions_04.png')
        }
        else if (tipo.value ==="FURO"){ 
           
            diametros.innerHTML = '<option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="12">12</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="22">22</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="28">28</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option>'
            imagem.setAttribute('src','./static/anel_interno_dimentions_02.png')
            //tem que mudar o Inner HTML ou Inner Text do D4- Diâmtro externo do anel:
        }
        //exibirDados()
})

diameter_anel_form.addEventListener("click",function(){  
     exibirDados()
    })

