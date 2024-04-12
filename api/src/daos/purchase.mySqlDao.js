import db from "../connect.js"

class ClientsDao {
  
  constructor(db) {
    this.db = db
  }

  async newClient(purchaseData) {

    const newPurchaseQuery = "INSERT INTO clientes (`nombre`, `email`, `telefono`, `ciudad`, `departamento`, `direccion`, `datos adicionales`, `color_morral`, `valor_compra`, `fecha_compra`) VALUES (?)"

    console.log({ purchaseData });

    const values = [
      purchaseData.nombre,
      purchaseData.email,
      purchaseData.telefono,
      purchaseData.ciudad,
      purchaseData.departamento,
      purchaseData.direccion,
      purchaseData.aditionalData,
      purchaseData.color,
      purchaseData.valorCompra,
      purchaseData.purchaseDate
    ]

    console.log(values);
    try {
      const [rows] = await this.db.query(newPurchaseQuery, [values])
      console.log(rows);
      if (rows.affectedRows > 0) {
        return true;
      } else {
        return null;
      }
    } catch (error) {
      return error.message
    }
  }

  async getAllClients() {

    const queryGetClients = "SELECT * FROM clientes"

    try {
      const [rows] = await this.db.query(queryGetClients)
  
      console.log(rows);
      if (rows.length > 0) {
        return rows
      } else {
        return null
      }
    } catch (error) {
      return error.message
    }
  }

}

const clientDaoMysql = new ClientsDao(db)

export default clientDaoMysql