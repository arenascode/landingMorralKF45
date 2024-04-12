import adminService from "../services/sessions.service.js";
import { generateAToken } from "../utils/cryptography.js";

export async function adminLogin(req, res, next) {
  console.log(req.body);
  
  try {
    const result = await adminService.loginAdmin(req.body)
    console.log({ resultController: result });
    if (result == "invalid data. try again") {
      res.status(400).json(result)
    } else if (result == null) {
      res.status(400).json("invalid data. try again")
    } else {
      res.cookie("accessToken", generateAToken(result), {
        signed: true,
        httpOnly: true,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        sameSite: "None",
        secure: true,
      });
      res.status(200).json(result.nombre)
    }
  } catch (error) {
    console.log({error});
    res.status(500).json(error)
  }
}