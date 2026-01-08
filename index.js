// Brebe introducción a JavaScript

const age=10
if (age>=18){
    console.log("Tu eres adulto")
}else{
    console.log("Tu eres niñp")
}

// const names=["Kevin","Yukiel","Corona","Ramos"]

// for(let i=0;i<names.length;i++){
//     console.log(names[i])
// }

// console.log("")
// for(let nam of names){
//     console.log(nam)
// }

function show(userName,userAge){
    return `Hola ${userName} your age ${userAge}`
}

console.log(show("Yuki",21))

// Uso de las funciones Flecha
const show2 = (userName,userAge)=> `Hola ${userName} your age ${userAge}`
console.log(show("Kevin",21))


const show3 = (userName,userAge)=> 
    `Hola ${userName} your age ${userAge}`


console.log(show("Kevin",21))



