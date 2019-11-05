const http = require("http")
const uuid = require("uuid/v1")
const faker = require("faker")


let arrBooks = [
    {id: 1, title: "Name of the rose" },
    {id: 2, title: "The DaVinci Code" },
    {id: 3, title: "Rosemaries Baby" }
]

const server = http.createServer((req, res) => {

    if(req.url === "/") {
        res.write("<h1>Homepage</h1>")
        res.write("<img src='//unsplash.it/300/300' />")
        res.write("<br />")
        res.write("<a href='/books'>Books</a>")
        return res.end()
    }
    else if(req.url === "/books") {
        // convert each book object in the array to an HTML list string
        // at the end join the array of LI strings to one single string 
        let strBookList = 
            "<ul>" +
            arrBooks.map(book => `<li>${book.title}</li>`).join("") + 
            "</ul>"
 
        res.write("<h1>Books</h1>")
        res.write(strBookList)
        res.write("<a href='/'>Back to Home</a>")
        return res.end()
    }
    else if(req.url === "/api/books") {
        let strBooks = JSON.stringify(arrBooks)
        res.writeHead(200, {
            "Content-Type": "application/json"
        })
        return res.end(strBooks)
    }
    else if(req.url === "/api/books/add") {
        let bookNew = {}
        bookNew.id = uuid()
        bookNew.title = faker.lorem.words(4)
        arrBooks.push(bookNew)
        return res.end(`New book created: ${bookNew.title}`)
    }
    else {
        res.statusCode = 404
        return res.end("This page does not exist")
    }
})

let port = 3000
server.listen(port, () => {
    console.log(`Server runs now on port ${port}`)
})
