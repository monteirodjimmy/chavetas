var norma = [["6-8",2,2,2,0.0025,0],
["8-10",3,3,3,0.0025,0],
["10-12",4,4,4,0.0025,0]]

var todos = [
    "room",
    "hall",
    "kitchen",
    "dining room"
]

intervaloDiametro = "10-12"

for (var i=0; i < norma.length; i++) {
    if (norma[i][0] === intervaloDiametro ){
        console.log(norma[i][1],norma[i][2],norma[i][3],norma[i][4])
    } else {
        console.log("Esse intervalo de diâmetro não é válido")
    }

}

todos.forEach(
    function(todos,i) {
        console.log(todos,i)
    }
)