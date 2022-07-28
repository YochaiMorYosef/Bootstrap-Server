const express = require('express');
const serversBL = require('../models/DALS/serversDAL');
const clientReqBL = require('../models/clientsReqBL')
const license2BL = require('../models/DALS/licenses2DAL')
const clientsDal = require('../models/DALS/clientsDAL')
const statusDal = require('../models/DALS/statusDAL')
const requestDal = require('../models/DALS/requestsDAL')

const router = express.Router();

router.route('/')
    .get(async function(req, resp) {
        let servers_data = await serversBL.getServers();
        //console.log(servers_data)
        return resp.json(servers_data)
    })


router.route('/clients')
    .get(async function(req, resp) {
        let clients_data = await clientsDal.getClients();
        return resp.json(clients_data)
    })

router.route('/status')
    .get(async function(req, resp) {
        let status_data = await statusDal.getStatus();
        return resp.json(status_data)
    })

//The process of checking license, availability and association works !!!
router.route('/request/create/:userid/:pass/:license_key/:location')
    .post(async function(req, resp) {
        let obj = {
            Client_Id: req.params.userid,
            Client_pass: req.params.pass,
            License_Key: req.params.license_key,
            Location: req.params.location
        }
        let serverAllocationMsg = await clientReqBL.clientAuthenticationOnTheServer(obj);
        // let license2_data = await license2BL.getLicenses2()
        return resp.json(serverAllocationMsg)
    })


router.route('/expire/e1')
    .delete(async function(req, resp) {

        let request = await requestDal.deleteRequest("62e13d25b1c0272501f05829")
            // let license2_data = await license2BL.getLicenses2()
        return resp.json(request)
    })

router.route('/signUpUser/create/:userid/:pass')
    .post(async function(req, resp) {
        let obj = {
            Client_Id: req.params.userid,
            Client_pass: req.params.pass,
            License_Key: "none",
            Location: "none",
        }

        let msg = await clientsDal.createClient(obj)
            // let license2_data = await license2BL.getLicenses2()
        return resp.json(msg)
    })

router.route('/delete')
    .delete(async function(req, resp) {

        let msg = await statusDal.deleteStatus("62e14b5a74376635be140ebd")
            // let license2_data = await license2BL.getLicenses2()
        return resp.json(msg)
    })

module.exports = router

/*
router.route('/get/get2')
    .put(async function(req, resp) {
    
        let temp = await statusDal.updateStatus("62dcf233faca96d2d192a4ea", req.body)
    
        return resp.json(temp)
    })*/