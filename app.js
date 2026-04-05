const express = require('express');
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log("App Running at port", port)
});

app.get('/', (req, res)=>{
    res.send("hello")
})