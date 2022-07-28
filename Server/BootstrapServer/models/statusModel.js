const mongoose = require('mongoose');

let statusSchema = new mongoose.Schema({
    Client_Id: String,
    License_Key: String,
    License_Expiration_Time: Number,
    Server_Id: String,
    Clients_Capacity: Number,
    Location: String
})

module.exports = mongoose.model('status', statusSchema);