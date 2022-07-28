const Licenses2Model = require('../licenses2Model');

const getLicenses2 = function() {
    return new Promise((resolve, reject) => {
        Licenses2Model.find({}, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const getLicense2 = function(id) {
    return new Promise((resolve, reject) => {
        Licenses2Model.findById(id, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

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
                resolve('License Updated for this client!')
            }
        })

    })
}

const createLicense = function(obj) {
    return new Promise((resolve, reject) => {
        let license = new Licenses2Model({
            License_Id: obj.License_Id,
            Client_Id: obj.Client_Id,
            License_Key: obj.License_Key,
            License_Expiration_Time: obj.License_Expiration_Time
        });

        license.save(function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('A record has been created in the LICENSE table !')
            }
        })
    })
}

module.exports = { getLicenses2, getLicense2, updateLicense, createLicense }