const mongoose = require('mongoose');

let ServersCapacitySchema = new mongoose.Schema({
    Server_Id: String,
    Balance_Of_Capacity: Number
})

module.exports = mongoose.model('servserscapacities', ServersCapacitySchema);