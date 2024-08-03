const express=require('express');
const app=express();
const http=require("http");
const path=require('path');

const socketio=require("socket.io");
const server=http.createServer(app);
const io=socketio(server);

app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname,"js")));
io.on("connection",function(socket){
    console.log("connected");

});

app.get("/",function(req,res){
    res.render("index");
});

server.listen(3000);