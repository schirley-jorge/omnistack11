// import express from 'express'
const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: bucar/listar uma informação
 * POST: criar uma informação
 * PUT: alterar uma informação
 * DELETE: deletar uma informação
 */

 /**
  * Tipos de parâmetros:
  * Query params: parâmetros nomeados enviados na rota apôs "?" (filtros, paginação)
  * Obtido em "request.query", { name: 'Schirley' } 
  * Route params: parâmetros utilizados para identificar recursos, ex /users/:id
  * Obtidos em "request.params", ex { id: '10' 
  * Request body: corpo da requisição
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */



app.listen(3333)