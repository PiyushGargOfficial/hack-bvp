const mongoose = require('mongoose');
const db = require('../config/keys').MongoDB_local;
const chalk = require('chalk');

mongoose.connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => console.log(chalk.green("Connected To MongoDB..")));
module.exports = mongoose;