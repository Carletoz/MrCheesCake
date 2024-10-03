import express from "express";
import indexRouter from "./routes";

const server = express();

server.use(express.json());
server.use(indexRouter);

export default server;
