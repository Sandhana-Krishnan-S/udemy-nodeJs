const http = require('http')
const fs = require('fs')

const fun = (req , res) => {
    console.log(req.headers , req.method)
    const url = req.url
    if(url === '/') {
        res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Server</title>
            </head>
            <body>
                <form action="/message" method="post">
                    <input type="text" name = "message">
                    <button type="submit">send</button>
                </form>    
            </body>
            </html>`)
        return res.end();
    }
    if(url === '/message') {
        const body = []
        req.on('data' , chunk => {
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end' , () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            const message = parsedBody.split('=')[1]
            console.log(message)
            fs.writeFileSync('message.txt' , message)
        })
       res.statusCode = 302
       res.setHeader('Location' , '/') 
       return
    }
    
    res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Server</title>
        </head>
        <body>
            <form action="/message" method="post">
                <input type="text" name = "message">
                <button type="submit">send</button>
            </form>    
        </body>
        </html>`)
    res.end();
}

const app = http.createServer(fun)

app.listen(80)

