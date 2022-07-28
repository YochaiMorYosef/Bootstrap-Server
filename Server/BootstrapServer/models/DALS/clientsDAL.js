const ClientsModel = require('../clientsModel');

const getClients = function(client_id) {
    return new Promise((resolve, reject) => {
        if (client_id == undefined) {
            ClientsModel.find({}, function(err, data) {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        } else {
            ClientsModel.find({ "Client_Id": client_id }, function(err, data) {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })

        }

    })
}




const updateClient = function(id, obj) {
    return new Promise((resolve, reject) => {

        ClientsModel.findByIdAndUpdate(id, {
            Client_Id: obj.Client_Id,
            Client_pass: obj.Client_pass,
            License_Key: obj.License_Key,
            Location: obj.Location
        }, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve(' Updated !')
            }
        })

    })
}

/*
const getClient = function(id) {
    return new Promise((resolve, reject) => {
        ClientsModel.findById(id, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}
*/
const createClient = function(obj) {
    return new Promise((resolve, reject) => {
        console.log(obj)
        let client = new ClientsModel({
            Client_Id: obj.Client_Id,
            Client_pass: obj.Client_pass,
            License_Key: obj.License_Key,
            Location: obj.Location,
        });

        client.save(function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Created !')
            }
        })
    })
}

module.exports = { getClients, createClient, updateClient }