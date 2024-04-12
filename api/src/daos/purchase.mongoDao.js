import clientsModel from "../models/clients.model.js";

class PurchaseMongoDao {

  constructor() {
    this.collection = clientsModel
  }

  async getAllClients() {
    return await this.collection.find()
  }

  async newClient(dataNewClient) {
    return await this.collection.create(dataNewClient)
  }


}

const clientDaoMongoDb = new PurchaseMongoDao()
export default clientDaoMongoDb