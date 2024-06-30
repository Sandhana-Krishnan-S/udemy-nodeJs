const express = require('express')
const bodyParser = require('body-parser')

const adminRoute = require('./routes/admin')
const shopRouter =require('./routes/shop')

const app = express()

app.use(bodyParser.urlencoded({extended : true}))

app.use('/' , (req , res , next) => {
    next()
})

app.use(adminRoute)
app.use(shopRouter)


app.listen(3000 , () => {
    console.log('server is on port 3000')
})
