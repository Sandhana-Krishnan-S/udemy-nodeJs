const express = require('express')

const router = express.Router()

router.get('/' , (req , res , next) => {
    res.send('Hi From Express')
})

module.exports = router