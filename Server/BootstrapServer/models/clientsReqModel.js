const mongoose = require('mongoose');

let ClientsReqSchema = new mongoose.Schema({
    Client_Id: String,
    Client_pass: String,
    License_Key: String,
    Location: String
})

module.exports = mongoose.model('requests', ClientsReqSchema);