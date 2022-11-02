// import express, { Request, Response } from 'express';
// const app = express();
// const PORT: number = 4000;

// import { UserRoutes } from './Routes/user'

// app.use(UserRoutes)

// app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`)});


const express = require('express')
const app = express()
const PORT = 3000

const routes = require('../src/routes/router')

app.use(express.json())



app.use('/', routes)






app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`)
})


