import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { JWT_SECRET_KEY } from "../config/auth.config.js";

export function hashPassword(plainPassword) {
  
  const bcryptSalt = process.env.BCRYPT_SALT;
  const saltRounds = bcryptSalt ? parseInt(bcryptSalt) : undefined;
  const salt = bcrypt.genSaltSync(saltRounds)
  return bcrypt.hashSync(plainPassword, salt)
}

export function isValidPassword(receivedPass, savedPass) {

  return bcrypt.compareSync(receivedPass, savedPass, )
}

const secretKey = JWT_SECRET_KEY
export function generateAToken(payload) {
  const token = jwt.sign(JSON.parse(JSON.stringify(payload)), secretKey, {
    // expiresIn: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).getTime(),
  });
  return token
}

export function decodeToken(token) {

  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, decodedUser) => {
      if (err) {
        reject(err)
      } else {
        resolve(decodedUser)
      }
    } )
  })

}
// const hashedPassword = hashPassword("");

// const userToSave = [
//   "avendanojorge29@gmail.com",
//   hashedPassword,
//   "jorge Avendaño",
// ];
// console.log({ userToSave });

// const queryLogin = "INSERT INTO administrador (`email`, `password`, `nombre`) VALUES (?)";

// const [rows] = await db.query(queryLogin, [userToSave]);

// console.log(rows);