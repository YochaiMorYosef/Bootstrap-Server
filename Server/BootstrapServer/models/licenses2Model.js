const mongoose = require('mongoose');

let LicensesSchema2 = new mongoose.Schema({
    License_Id: String,
    Client_Id: String,
    License_Key: String,
    License_Expiration_Time: Number,
})

module.exports = mongoose.model('licenses', LicensesSchema2);