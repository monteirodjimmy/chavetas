var button = document.getElementById("enter")
var input = document.getElementById("userinput")
var ul = document.querySelector("ul")

function createListElement(){
    var li = document.createElement("li")
        li.appendChild(document.createTextNode(input.value))
        ul.appendChild(li)
        input.value = ""
}

function addListAfterClick(){
        if(input.value.length >0) {
            createListElement()
        }     
}

function addListAfterpreeskey(event){
    if(input.value.length >0 && event.keyCode === 13) {
        createListElement()
    }
}

button.addEventListener("click",addListAfterClick)

input.addEventListener("keypress",addListAfterpreeskey)

// let expiriece = 100;
// let wizardLevel = false;

// if (expiriece >90) {
//     let wizardLevel = true;
//     console.log('inside', wizardLevel)
// }

// console.log('outside',wizardLevel)

const obj = {
    player: 'bobby',
    expiriece: 100,
    wizardLevel: false
}

// const palyer = obj.palyer
// const expiriece = obj

const {player, expiriece} = obj;
let {wizardLevel} = obj

console.log(player)
console.log(wizardLevel)

const greetingBest =  `helo ${player} you heve the wizard power ${wizardLevel}`

console.log(greetingBest)

function add(a,b) {
    return a +b;
}
// advenced functions 
const add2 = (a,b) => a + b; // forma de declarar função nova ES6

const multiply = (a,b) => a * b;
const multiply2 = (a) => (b) => a * b;
multiply2(3)
multiply2(3)(2)

const compose = (f,g) => (a) => f(g(a)); // aplica g em (a) depois aplica f no resultado de g(a)

const soma = (num) => num +3;
const divide = (num) => num/2;
compose(soma,divide)(7)


//advenced arrays
const array = [1,2,3,4,5];
const double = [];
const newArray = array.forEach((num)=> {
    double.push(num*2)
})
console.log(double)
// estudar map, filter and accumulator
const filterArray = array.filter((num)=> num > 2)

console.log('filter',filterArray)
// reference type
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10 };

// context vs scope

const object4 = {
    a: function(){
        console.log(this)
    }
}

class Payler1 {
    constructor(name,type) {
        this.name = name;
        this.name = type;
    }
}

//instaciation em JS 
// tem aver com class, constructor, super e this

// pass by reference

var a = 5;
var b = a; // aqui eu copiei o valor
b++

// pas by reference 

let obj1 = {name: 'Yaouu', password: '98718961'}
let obj2 = obj1; // já aqui eu indiquei onde é o endereço da memória

obj2.password = "easy pra carai";

console.log(a)
console.log(b)
console.log(obj1)
console.log(obj2)

var c = [1,3,5,2,8]
var d = c; // também dá merda pq é um obejeto e passa por referencia
var f = [].concat(c)//aqui eu criei uma cópia 
d.push(45)
// c também será alterado
console.log(c)