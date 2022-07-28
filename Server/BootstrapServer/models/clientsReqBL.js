const Licenses2Dal = require('./DALS/licenses2DAL');
const ServersDal = require('./DALS/serversDAL');
const ClientsDal = require('./DALS/clientsDAL');
const StatusDal = require('./DALS/statusDAL');


const clientAuthenticationOnTheServer = async(obj_request) => {
    let msg = ""
        //let clients_data = await ClientsDal.getClients();
        //let client = clients_data.find(item => item.Client_Id == clientId)
    let licenses_data = await Licenses2Dal.getLicenses2();
    let license = licenses_data.find(item => item.License_Key == obj_request.License_Key)

    if (license == undefined) {
        // the license is not exist
        msg = "License does not exist"
    } else {
        if (license.Client_Id == 'none' || license.Client_Id == obj_request.Client_Id) {
            let obj = {
                    License_Id: license.License_Id,
                    Client_Id: obj_request.Client_Id,
                    License_Key: license.License_Key,
                    License_Expiration_Time: license.License_Expiration_Time
                }
                // Client association to license
            await Licenses2Dal.updateLicense(license._id, obj)
                // Server allocation
            let obj2 = await serverAllocationProcess(obj_request.Location);

            if (obj2.Server_Id == "-2" || obj2.Server_Id == "-1") {
                obj.Client_Id = "none"
                await Licenses2Dal.updateLicense(license._id, obj)
                return obj2.msg;
            } else {
                let obj3 = {
                    Client_Id: obj_request.Client_Id,
                    License_Key: license.License_Key,
                    License_Expiration_Time: license.License_Expiration_Time,
                    Server_Id: obj2.Server_Id,
                    Clients_Capacity: obj2.Clients_Capacity,
                    Location: obj_request.Location
                }
                let msg2 = await StatusDal.createStatus(obj3)
                let client = ClientsDal.getClients(obj_request.Client_Id)
                let objToUpdateClient = {
                    Client_Id: client.Client_Id,
                    Client_pass: client.Client_pass,
                    License_Key: client.License_Key,
                    Location: client.Location
                }
                await ClientsDal.updateClient(client._id, objToUpdateClient)
                console.log(msg2)
                msg = "Client to server association succeeded !!";
            }
        } else {
            msg = "This license is not available at the Licensing Bank"
        }
        //let servers_data = ServersDal.getServers()
    }
    return msg
}

const serverAllocationProcess = async(location) => {
    let obj = {
        Server_Id: "-2",
        Clients_Capacity: 0,
        msg: "Location does't exist in the available servers table"
    }
    let servers_data = await ServersDal.getServers();
    let optional_servers = servers_data.filter(item => item.Location == location)
    if (optional_servers.length == 0) return obj;
    let status_data = await StatusDal.getStatus()
    let server = optional_servers.find(item1 => {
        let counter = 0;
        status_data.forEach(item2 => {
            if (item2.Server_Id == item1.Server_Id) counter++;
        });
        if (counter < item1.Clients_Capacity)
            return item1;
    })
    if (server == undefined) {
        obj.msg = "No servers available"
        obj.Server_Id = "-1"
    } else {
        obj.msg = "Client to server association succeeded !!"
        obj.Server_Id = server.Server_Id
        obj.Clients_Capacity = server.Clients_Capacity
    }


    return obj;

}

module.exports = { clientAuthenticationOnTheServer, serverAllocationProcess }