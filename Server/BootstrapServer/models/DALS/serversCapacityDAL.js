const ServersCapacityModel = require('../serversCapacityModel');

const getServersCapacity = function() {
    return new Promise((resolve, reject) => {
        ServersCapacityModel.find({}, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const getServerCapacity = function(id) {
    return new Promise((resolve, reject) => {
        ServersCapacityModel.find({ "Server_Id": id }, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const createSC = function(obj) {
    return new Promise((resolve, reject) => {

        let sc = new ServersCapacityModel({
            Server_Id: obj.Server_Id,
            Balance_Of_Capacity: obj.Balance_Of_Capacity
        });

        sc.save(function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('new status !')
            }
        })
    })
}

/*
const updateLicense = function(id, obj) {
    return new Promise((resolve, reject) => {

        Licenses2Model.findByIdAndUpdate(id, {
            License_Id: obj.License_Id,
            Client_Id: obj.Client_Id,
            License_Key: obj.License_Key,
            License_Expiration_Time: obj.License_Expiration_Time
        }, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Updated !')
            }
        })

    })
}
*/

module.exports = { getServersCapacity, getServerCapacity, createSC }