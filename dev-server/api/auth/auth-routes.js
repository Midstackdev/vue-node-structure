import express from 'express'
import * as controller from './auth-controller'
import register from './register-controller'
import login from './login-controller'
import * as auth from '../../services/auth'

const router = express.Router()

router.get('/auth', auth.requireLogin, controller.index)

router.post('/register', register)

router.post('/login', login)

router.post('/logout', auth.requireLogin, controller.logout)


export default router