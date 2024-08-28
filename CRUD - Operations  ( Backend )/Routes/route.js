const express = require('express')
const control = require('../Control/control')

const router = express.Router()

router.get('/',control.getBook)
router.post('/',control.createBook)
router.put('/book/:id',control.updateBook)
router.delete('/book/:id',control.delBook)

module.express = router
