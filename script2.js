/*4 + 3;
if (4+3 === 7){
    alert("you are smart")
}*/

function multiply(a,b){
    if (a > 10 || b > 10){
        return "That's hard"
    } else {
        return a *b
    }  
}

var list = [["6-8",2,2,2,0.0025,0],
["8-10",3,3,3,0.0025,0],
["10-12",4,4,4,0.0025,0]]
console.log(list[0][4])

list.shift()//retira o primeiro elemento da lista
list.pop() //retira o último elemento da lista 
list.push("12-17")
list.concat(["17-20","20-30"])
newList = list.concat(["17-20","20-30"]) // se quise adicionar a mudanaça a uma variável

var user = {
    name: "Mateus",
    age: "28",
    hobby: "Python",
    isMarried: false,
    spells:["feitiço","cabrunco","canço mariano"],
    shout: function() {
        console.log("a function inside an object is a method")
    }
};

console.log(user.name)
console.log(user.spells[1])
user.shout()

var list2 = [
    {
        username:"andy",
        password:"secrete"
    },
    {
        username: "teuzinho",
        password: "123545"
    }
];

console.log(list2[0].password)
