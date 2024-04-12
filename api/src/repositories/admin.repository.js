import adminMongoDao from "../daos/admin.mongoDao.js"
import adminDaoMySql from "../daos/admin.mySqlDao.js"

class AdminRepository {

  constructor (daoSelected) {
    this.dao= daoSelected
  }

  async findAdmin(email) {

    return await this.dao.findAdmin(email)
  }
}

let adminRepository 

if (process.env.NODE_ENV == "dev") {
  adminRepository = new AdminRepository(adminDaoMySql)
} else {
  adminRepository = new AdminRepository(adminMongoDao)
}

export default adminRepository