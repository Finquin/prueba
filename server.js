const express = require ('express');
const Productos = require('./contenedor')

const productos = new Productos('./productos.txt')


const app = express()
const PORT =   8080
const server = app.listen(PORT, () => {
    console.log(`Puerto ${server.address().port}`)
})


app.get('/productos', async(req, res) => {
    const stockProductos = await productos.getAll()
    res.send(stockProductos)
   
})


app.get('/productosRandom',async (req, res) => {

    const produdotosRandom = await productos.getRandom()
    res.send(produdotosRandom)

})


server.on('error', err => console.log(err))
