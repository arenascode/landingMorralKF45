import  db  from "../connect.js";

class AdminMysqlDao {

  constructor(db) {
    this.db = db
  }

  async findAdmin(email) {

    const queryLogin = "SELECT * FROM administrador WHERE email=?";

    try {
      const [rows] = await this.db.query(queryLogin, [email]);
      console.log({rowsDao: rows});
      if (rows.length > 0) {
        return rows[0]
      } else {
        return null
      }
    } catch (error) {
      return error
    }
  }
}

const adminDaoMySql = new AdminMysqlDao(db)
export default adminDaoMySql