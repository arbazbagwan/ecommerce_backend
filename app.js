const express = require('express');
const app = express();
const port = 3000;
const UserRoutes = require('./routes/UserRoutes');
const AuthRoutes = require('./routes/AuthRoutes');

app.use('/auth', AuthRoutes);
app.use('/users', UserRoutes);

app.listen(port, ()=>{
    console.log("App Running at port", port)
});

