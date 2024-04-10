// import express from "express";


const express= require('express');
const app= express();

app.listen(5000,()=>{
    console.log("server is running on 5000");
});

app.get("/api",(req,res)=>{
    res.json({"users":["ashish", "hero ", 'virat']});
});