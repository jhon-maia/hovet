import express from "express";
import {funcionariosRouter,categoriasRouter, departamentoRouter} from "./routes"

const app=express()
app.use(express.json())
app.use("/funcionarios",funcionariosRouter)
app.use("/categorias",categoriasRouter)
app.use("/departamentos",departamentoRouter)
app.listen(8080,()=>(console.log("server is running on port 8080")))

