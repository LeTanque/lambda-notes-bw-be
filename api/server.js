require("dotenv").config();
const express = require("express");

// Dependencies
const helmet = require("helmet");
const cors = require("cors");
const http = require("http");
const session = require("express-session");

// Experimental
const react = require("react");

// Routes
const notesRoutes = require("./api/auth");

const dev = process.env.NODE_ENV !== "production";
const app = react({
    dev,
    dir: "../src"
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    // 1 - create server
    const server = express();
    server.use(helmet());
    server.use(cors());

    // 2 - add session management to Express
    const sessionConfig = {};
    server.use(session(sessionConfig));

    // 3 - use routes
    server.use(notesRoutes);

    // 4 - handling everything else with react
    server.get("*", handle);

    http.createServer(server).listen(process.env.PORT, () => {
        console.log(`listening on port ${process.env.PORT}`);
    });
});
