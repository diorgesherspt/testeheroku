const express = require('express')
const app = express()

const database = new Prohairesis(env.CLEARDB_DATABASE_URL)

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

app.get('/mensagem', async (req, res) => {
    try{
        const users =await database.query(
            `select * from mensagem`
        )
        res.status(200)
        res.json(users)
    }
    catch(err){
        console.error('Erro usuarios')
        res.status(500)
        res.end('Erro ao procurar usuários')
    }
})

app.listen(PORT, ()=>{
    console.log("escutando na porta "+PORT)
})