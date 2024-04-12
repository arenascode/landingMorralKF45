import adminModel from "../models/admin.model.js";

class AdminMongoDao {

  constructor() {
    this.collection = adminModel
  }

  async findAdmin(email) {
    console.log({email});
    return await this.collection.findOne({email: email})
  }
} 

const adminMongoDao = new AdminMongoDao()

export default adminMongoDao