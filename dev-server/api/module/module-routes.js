import express from 'express'
import * as controller from './module-controller'

const router = express.Router()

router.post('/module', controller.create)

router.get('/module', controller.index)

router.get('/module/:id', controller.show)

router.put('/module', controller.update)

router.delete('/module', controller.remove)

export default router