const RequestsDal = require('../requestsModel');

const getRequest = function() {
    return new Promise((resolve, reject) => {
        RequestsDal.find({}, function(err, data) {
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
const createRequest = function() {
    return new Promise((resolve, reject) => {
        let request = new RequestsDal({
            Client_Id: new Date(),
            Client_pass: "1111",
        });
        request.save(function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Created !')
            }
        })
    })
}

const deleteRequest = function(id) {
    return new Promise((resolve, reject) => {
        RequestsDal.findByIdAndDelete(id, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Deleted !')
            }
        })

    })
}


module.exports = { getRequest, createRequest, deleteRequest }