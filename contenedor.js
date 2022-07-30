const fs = require('fs')
class Contenedor {
    constructor(ruta) {
        this.ruta = ruta
    }


    async getAll() {
        try {
            const dataArch = await fs.promises.readFile(this.ruta, 'utf8')
            const dataArchParse = JSON.parse(dataArch)
            
            if (dataArchParse.length) {
                console.log(dataArchParse)
                   return dataArchParse
            } else {
                console.log('no hay productos')               
            }
        } catch (error) {
            console.log(error)
        }
    }

    async getRandom(){
        try{
            const dataFile = await fs.promises.readFile(this.ruta, 'utf-8')
            const dataFileParse = JSON.parse(dataFile)
            const max = dataFileParse.length
            const min = 0
            const id = Math.ceil(Math.random()* (max - min))
            const producto = dataFileParse.find(producto => producto.id === id)
            console.log(dataFileParse , id, producto)
            if(producto){
                console.log(producto)
                return producto
            }else {
                console.log("sin resultados ")
            }
        }catch (error){
            console.log(error)
        }
    }
}

module.exports = Contenedor



