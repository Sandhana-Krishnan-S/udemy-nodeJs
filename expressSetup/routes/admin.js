const express = require('express')

const router = express.Router()

router.get('/add-product' , (req , res , next) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/product" method="post">
        <input type="text" name="user">
        <button type="submit">send</button>
    </form>
</body>
</html>`)
})

router.post('/product' , (req , res , next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router
