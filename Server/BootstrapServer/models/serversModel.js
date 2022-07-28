const mongoose = require('mongoose');

let ServersSchema = new mongoose.Schema({
    Server_Id: String,
    Server_IP_Address: String,
    Clients_Capacity: Number,
    Location: String
})

module.exports = mongoose.model('servers', ServersSchema);