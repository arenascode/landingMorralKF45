import clientDaoMysql from "../daos/purchase.mySqlDao.js";
import Client from "../entities/Client.js";
import clientRepository from "../repositories/purchase.repository.js";
import mailService from "./mail.service.js";

class ClientService {

  async newClient(clientData) {
    
    const newClient = new Client(clientData.Nombre, clientData.Email, clientData.Telefono, clientData.Ciudad, clientData.Departamento, clientData.Direccion, clientData.datosAdicionales, clientData.Color, clientData.valorCompra)

    try {
      const clientSaved = await clientRepository.newClient(newClient)
      console.log({ clientSavedService: clientSaved });
      if (clientSaved) {
        const sendMail = await mailService.sendMailToNotifyPurchase(newClient)
        console.log(sendMail);
      }
      return clientSaved
    } catch (error) {
      return error.message
    }
  }

  async getClients() {

    try {
      const clients = await clientRepository.getClients()
      console.log(clients);
      
      return clients
    } catch (error) {
      return error.message
    }
  }
}

const clientService = new ClientService()
export default clientService