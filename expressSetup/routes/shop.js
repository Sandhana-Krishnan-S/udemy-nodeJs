const express = require('express')
const path = require('path')

const rootDir = require('../util/path')

const router = express.Router()

router.get('/' , (req , res , next) => {
    res.sendFile(path.join(rootDir , 'view' , 'shop.html'))
})
router.get('/page-not-found' , (req , res , next) => {
    res.sendFile(path.join(rootDir , 'view' , 'not-found.html'))
})

module.exports = router