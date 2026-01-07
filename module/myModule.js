// console.log(module)

let mySecretVariable="xyz123"

const myWebAddres="www.yukielcorona.com"
const myNumber=1234567890
const myArray=[10,20,30]

const user={
    name:"Yukiel",
    lastName:"Corona",
}

// Exportando todo en un solo objeto
// const group={
//     myWebAddres:myWebAddres,
//     myNumber:myNumber,
//     myArray:myArray,
//     user:user,
// }
// module.exports=group

// Otra forma de exportar
// module.exports={
//     myWebAddres:myWebAddres,
//     myNumber:myNumber,
//     myArray:myArray,
//     user:user,
// }

// Esta es la forma más corta de exportar
// module.exports={
//     myWebAddres,
//     myNumber,
//     myArray,
//     user,
// }
// console.log(module)


// Exportando de forma individual
module.exports.myWebAddres=myWebAddres
module.exports.myNumber=myNumber
module.exports.myArray=myArray
module.exports.user=user
// console.log(module)