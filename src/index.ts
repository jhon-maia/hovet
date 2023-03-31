import express from "express";
import {funcionariosRouter,categoriasRouter, departamentoRouter, produtoRouter, fornecedorRouter, solicitanteRouter, loteRouter, entradaRouter} from "./routes"

const app=express()
app.use(express.json())
app.use("/funcionarios",funcionariosRouter)
app.use("/categorias",categoriasRouter)
app.use("/departamentos",departamentoRouter)
app.use("/produtos",produtoRouter)
app.use("/fornecedor",fornecedorRouter)
app.use("/solicitante",solicitanteRouter)
app.use("/lote",loteRouter)
app.use("/entrada",entradaRouter)

app.listen(8080,()=>(console.log("server is running on port 8080")))

