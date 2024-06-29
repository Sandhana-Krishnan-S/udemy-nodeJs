
const requestHandler = (req , res) => {
    const url = req.url
    const method = req.method
    if (url === '/') {
        res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome</title>
        </head>
        <body>
            <h1>Hello And Welcome to The home page</h1>
            <form action="/create-user" method="post">
                <label for="username">Username : </label>
                <input type="text" name="username">
                <button type="submit">Send</button>
            </form>
            <a href = "/users">View User </a>
        </body>
    </html>`)
    return res.end()
    }
    if (url === '/users') {
        res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Users</title>
        </head>
        <body>
            <ul>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
                <li>User 4</li>
                <li>User 5</li>
            </ul>
        </body>
    </html>`)
    return res.end()
    }
    if (url === '/create-user' && method === 'POST') {
        const body = []
        req.on('data' , chunk => body.push(chunk))
        
        return req.on('end' , () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1]
            console.log(user)
            res.statusCode = 302
            res.setHeader('Location' , '/') 
            res.end()
        })
    }
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body style="display: flex; height: 100vh; width: 100%; align-items: center; justify-content: center; overflow: hidden;">
        <h1>Page Not Found</h1>
    </body>
</html>`)
return res.end()
}

module.exports = requestHandler;