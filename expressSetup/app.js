const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminRoute = require('./routes/admin')
const shopRouter =require('./routes/shop')

const app = express()

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname , 'public')))

app.use('/' , (req , res , next) => {
    next()
})

app.use('/admin' ,adminRoute)
app.use('/' ,shopRouter)

app.use((req , res , next) => {
    res.redirect('/page-not-found')
})

app.listen(3000 , () => {
    console.log('server is on port 3000')
})
