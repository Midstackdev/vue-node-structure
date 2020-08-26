import express from 'express'
import * as controller from './auth-controller'
import register from './register-controller'
import login from './login-controller'

const router = express.Router()

router.post('/auth', controller.index)

router.post('/register', register)

router.post('/login', login)

router.post('/logout', controller.logout)


export default router