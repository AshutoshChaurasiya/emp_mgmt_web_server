const Express = require ('express'); //retreiving express package

//create express instance/object
const express = new Express();

function roothandler(request, response){
    response.json({ "test": "ok"});
}

//creating route
express.get('/api/login', roothandler); 

//listen for connection
express.listen(3000, 'localhost', () => console.log("Successfully running on 3000 port"));
