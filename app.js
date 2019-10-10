const express = require('express');
const app = express();
const chalk = require('chalk');

const PORT = process.env.PORT || 1234;

//Body Parser: 
app.use(express.json());

//Import Routes :
const AuthRoute = require('./routes/auth');

//Middlewares : 
app.use('/api/auth', AuthRoute);

app.listen(PORT, () => {
    console.log(chalk.red(`Server started at PORT : ${PORT}`))
})