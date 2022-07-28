const mongoose = require('mongoose');

let RequestSchema = new mongoose.Schema({
    Client_Id: String
})

module.exports = mongoose.model('requests', RequestSchema);