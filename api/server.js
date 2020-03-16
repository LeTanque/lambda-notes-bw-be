require("dotenv").config();

// Dependencies
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// creates the server
const server = express();
const envPort = process.env.PORT || 3333; 

// Connect the pieces
server.use(helmet());
server.use(express.json());
server.use(cors());

// Applies to all connections to the api
server.all('/api', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Credentials", true); 
    next();
})

// handle requests to the root of the api, the / route
server.all('/api', (req, res) => {
    res.send(`
        <body style="background-color:#131313; color:#fafafa">
            <code>  
                <h1>Welcome to the Lambda Notes mini mono</h1>
                <h5>${req.method} request recieved</h5>
            </code>
        </body>
    `);
});


// hello, friend
server.listen(envPort, () =>
    console.log(`2 step paradise ${envPort}`)
);

// Routes
const notes = require("./routes/notes");
server.use('/api/notes', notes);  // Connect / to the routes

