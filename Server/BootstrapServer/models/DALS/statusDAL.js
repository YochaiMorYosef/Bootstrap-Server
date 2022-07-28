const StatusModel = require('../statusModel');

const getStatus = function() {
    return new Promise((resolve, reject) => {
        StatusModel.find({}, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

/*
const updateStatus = function(id, obj) {
    return new Promise((resolve, reject) => {

        StatusModel.findByIdAndUpdate(id, {
            License_Id: obj.License_Id,
            Client_Id: obj.Client_Id,
            License_Key: obj.License_Key,
            License_Expiration_Time: obj.License_Expiration_Time
        }, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('License Updated for this client!')
            }
        })

    })
}*/

const createStatus = function(obj) {
    return new Promise((resolve, reject) => {
        let status = new StatusModel({
            Client_Id: obj.Client_Id,
            License_Key: obj.License_Key,
            License_Expiration_Time: obj.License_Expiration_Time,
            Server_Id: obj.Server_Id,
            Clients_Capacity: obj.Clients_Capacity,
            Location: obj.Location
        });

        status.save(function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('new status !')
            }
        })
    })
}

const updateStatus = function(id, obj) {
    return new Promise((resolve, reject) => {
        console.log(obj)
        StatusModel.findByIdAndUpdate(id, {
            Client_Id: obj.Client_Id,
            License_Key: obj.License_Key,
            License_Expiration_Time: obj.License_Expiration_Time,
            Server_Id: obj.Server_Id,
            Clients_Capacity: obj.Clients_Capacity,
            Location: obj.Location
        }, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Status Updated for this client!')
            }
        })

    })
}
const deleteStatus = function(id) {
    return new Promise((resolve, reject) => {
        StatusModel.findByIdAndDelete(id, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Deleted !')
            }
        })

    })
}


module.exports = { getStatus, createStatus, updateStatus, deleteStatus }