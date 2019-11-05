# HTTP Server - Exercise #3

- Copy your server js file from the previous exercise to this directory
- Init a package.json (npm init -y)
- Install the packages faker & uuid
- Add another route /api/books/add
- When this route is called:  
  - Generate a lorem book title using faker
  => How to use the faker library: https://www.npmjs.com/package/faker (> section Node.js)
  - Generate a unique ID using UUID
  => How to use: https://www.npmjs.com/package/uuid
  (section quickstart > version 1)
  - Add the created book to our array of books
  - Never forget: End the response
