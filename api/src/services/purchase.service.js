import clientDaoMysql from "../daos/purchase.mySqlDao.js";
import Client from "../entities/Client.js";
import clientRepository from "../repositories/purchase.repository.js";
import mailService from "./mail.service.js";

class ClientService {

  async newClient(clientData) {
    
    const newClient = new Client(clientData.Nombre, clientData.Email, clientData.Telefono, clientData.Ciudad, clientData.Departamento, clientData.Direccion, clientData.datosAdicionales, clientData.Color, clientData.valorCompra)

    try {
      const clientSaved = await clientRepository.newClient(newClient)
      if (clientSaved) {
        const sendMail = await mailService.sendMailToNotifyPurchase(newClient)
      }
      return clientSaved
    } catch (error) {
      return error.message
    }
  }

  async getClients() {

    try {
      const clients = await clientRepository.getClients()
      return clients
    } catch (error) {
      return error.message
    }
  }
}

const clientService = new ClientService()
export default clientService