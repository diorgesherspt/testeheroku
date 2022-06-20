const express = require('express')
const app = express()

const PORT = process.env.PORT || 8877

app.get('/sobre', (req,res)=>{
    res.json({
        nome: "Diorges",
        cidade: "Cariacica"
    })
})

app.get('/', (req,res)=>{
    res.json({
        msg: "ok"
    })
})

app.listen(PORT, ()=>{
    console.log("escutando na porta "+PORT)
})