const ClientsReqModel = require('../clientsReqModel');

const clientsReq = function() {
    return new Promise((resolve, reject) => {
        ClientsReqModel.find({}, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

/*
const getClient = function(id) {
    return new Promise((resolve, reject) => {
        ClientsReqModel.findById(id, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
*/
const createReqClient = function(obj) {
    return new Promise((resolve, reject) => {
        let client = new ClientsReqModel({
            Client_Id: obj.client_id,
            Client_pass: obj.client_pass,
            License_Key: obj.license_key,
            Location: obj.location
        });

        user.save(function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Created !')
            }
        })
    })
}

module.exports = { clientsReq, createReqClient }