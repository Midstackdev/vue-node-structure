import express from 'express'

const router = express.Router()

router.post('/module', (req, res) => {
    res.send('post.module - create a module')
})
router.get('/module', (req, res) => {
    res.send('get.module - get all module')
})
router.get('/module/:id', (req, res) => {
    res.send('get.module - create module by id')
})
router.put('/module', (req, res) => {
    res.send('put.module - update a module')
})
router.delete('/module', (req, res) => {
    res.send('delete.module - delete a module')
})

export default router