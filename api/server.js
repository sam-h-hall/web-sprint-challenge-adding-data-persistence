const express = require("express");
const projectsRouter = require("../routers/projects-router");
const tasksRouter = require("../routers/tasks-router");

const server = express();

server.use(express.json());
server.use("/api/projects", projectsRouter);
server.use("/api/tasks", tasksRouter);

module.exports = server;