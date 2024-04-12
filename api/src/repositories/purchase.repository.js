import clientDaoMongoDb from "../daos/purchase.mongoDao.js";
import clientDaoMysql from "../daos/purchase.mySqlDao.js";

class UsersRepository {
  constructor(daoSelected) {
    this.dao = daoSelected;
  }

  async getClients() {
    return await this.dao.getAllClients();
  }

  async newClient(dataNewUser) {
    return this.dao.newClient(dataNewUser);
  }

}

let clientRepository
if (process.env.NODE_ENV == 'prod') {
  clientRepository = new UsersRepository(clientDaoMongoDb)
} else {
  clientRepository = new UsersRepository(clientDaoMysql)
}

export default clientRepository;
