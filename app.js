require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);
const express = require('express');
require('dotenv').config()
const app = express();
const UserRoutes = require('./routes/UserRoutes');
const AuthRoutes = require('./routes/AuthRoutes');
const { default: mongoose } = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', AuthRoutes);
app.use('/users', UserRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.log('❌ FULL ERROR:', err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("App Running at PORT", PORT)
});

