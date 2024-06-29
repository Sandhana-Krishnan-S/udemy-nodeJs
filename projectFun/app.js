const express = require('express')

const app = express()

app.use('/' ,(req , res , next) => {
    res.send('Hi From ExpressJS')
})

app.listen(3000 , () => {
    console.log('server started on the port 3000')
})