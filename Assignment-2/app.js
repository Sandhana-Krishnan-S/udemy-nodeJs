const express = require('express')

const app = express()


// Task - 1
// app.use((req , res , next) => {
//     console.log('I am first middleware')
//     next()
// })

// app.use((req , res , next) => {
//     console.log("I am second middleware")
//     res.send('Hi From ExpressJS')
// })

// Task - 2

app.use((req , res , next) => {
    console.log("I always run!")
    next()
})

app.use('/users' , (req , res , next) => {
    res.send('user1 , user2 , user3')
})

app.use('/' , (req , res , next) => {
    res.send('Hi From ExpressJS')
})

app.listen(3000 , () => {
    console.log('sever is started successfully on port 3000')
})