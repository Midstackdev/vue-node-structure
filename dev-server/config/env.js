import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

const env = dotenv.config()

export function setEnvironment(app) {
    if(process.env.NODE_ENV !== 'production') {
        setDevEnv(app)
    }else {
        setProdEnv(app)
    }
}

function setDevEnv(app) {
    process.env.NODE_ENV = 'development'
    app.use(bodyParser.json())
    app.use(morgan('dev'))
    app.use(cors())
}

function setProdEnv(app) {
    process.env.NODE_ENV = 'production'
    process.env.DB_URL = 
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2mon0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    app.use(bodyParser.json())
    app.use(express.static(__dirname + '/../../dist'))
    
}