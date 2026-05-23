import express from 'express'

const app = express()

console.log("Index.ts is executed")

app.listen(process.env.PORT,()=>{
    console.log("Server Started")
})
