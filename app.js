const express = require('express');
const app = express();
const port = 3000;
const UserRoutes = require('./routes/UserRoutes');

app.use('/users', UserRoutes);
app.listen(port, ()=>{
    console.log("App Running at port", port)
});

