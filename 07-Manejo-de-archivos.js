//Manejo de archivos con el módulo FS

const fs = require('fs')

// // Leer archivos
// const first= fs.readFileSync('./data/first.txt','utf8')
// const first2= fs.readFileSync('./data/second.txt')

// // Escribir archivos

// const title='Este es un titulo escrito con NodeJS\n'
// // Seguir añadiendo contenido
// fs.writeFileSync('./data/third.txt',title,{flag:'a'})
// const third= fs.readFileSync('./data/third.txt','utf8')




// console.log(first)
// console.log(first2.toString())
// console.log(third)




// Usando codigo asincrono
fs.readFile('./data/first.txt', 'utf8', (error, data1) => {
    if (error) {
        console.log(error)
        return
    }
    console.log(data1)

    fs.readFile('./data/second.txt', 'utf8', (error, data2) => {
        if (error) {
            console.log(error)
            return
        }
        console.log(data2)

        fs.writeFile('./data/newfile.txt', 'Archivo creado desde fs', (err, data3) => {
            console.log(err)
            console.log(data3)

            fs.writeFile('./data/newfile2.txt', 'Archivo creado desde fs', (err, data3) => {
                console.log(err)
                console.log(data3)

                fs.writeFile('./data/newfile3.txt', 'Archivo creado desde fs', (err, data3) => {
                    console.log(err)
                    console.log(data3)
                })
            })
        })
    })
})

