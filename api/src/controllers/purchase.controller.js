import clientService from "../services/purchase.service.js";

export async function newPurchase(req, res, next) {
  
  console.log(req.body);
  try {
    const result = await clientService.newClient(req.body)
    console.log({resultController: result});
    if (result) {
      res.status(200).json({message: 'purchase was saved succesfully'})
    }
  } catch (error) {
    res.status(500).json({error: error.message})
  }

  
}

export async function getClients(req, res, next) {

  try {
    const clients = await clientService.getClients()
console.log({clientsController: clients});
    if (clients) {
      res.status(200).json(clients)
    } else {
      res.status(400).json({message: 'Not clients found'})
    }
  } catch (error) {
    res.status(500).json({errorMsg: error.message})
  }
}