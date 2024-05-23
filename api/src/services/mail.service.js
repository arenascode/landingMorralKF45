import { AdminEmail, NodeMailerPass, mailTo } from "../config/auth.config.js";
import nodemailer from "nodemailer"

class MailService {

  async sendMailToNotifyPurchase(newClient) {

    const adminMail = AdminEmail
    const transport = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      auth: {
        user: adminMail,
        pass: NodeMailerPass
      }
    })
    console.log({ newClient });
    console.log({mailTo});
    
    const templateNotifyPurchase = `
    <body style="font-family: Arial, sans-serif;">

  <h2>Nueva Venta en tu Landing Page (MORRAL KF45)</h2>

  <p>Hola, Jorge Avendaño!</p>

  <p>Te informamos que has recibido una nueva venta en tu Landing Page:</p>

  <table style="width: 100%; margin-top: 20px;">
    <tr>
      <td><strong>Nombre:</strong></td>
      <td>${newClient.nombre}</td>
    </tr>
    <tr>
      <td><strong>Email:</strong></td>
      <td>${newClient.email}</td>
    </tr>
    <tr>
      <td><strong>Teléfono-wtsp:</strong></td>
      <td>${newClient.telefono}</td>
    </tr>
    <tr>
      <td><strong>Cedula:</strong></td>
      <td>${newClient.cedula}</td>
    </tr>
    <tr>
      <td><strong>Ciudad:</strong></td>
      <td>${newClient.ciudad}</td>
    </tr>
    <tr>
      <td><strong>Departamento:</strong></td>
      <td>${newClient.departamento}</td>
    </tr>
    <tr>
      <td><strong>Dirección de Envío:</strong></td>
      <td>${newClient.direccion}</td>
    </tr>
    <tr>
      <td><strong>Datos Adicionales:</strong></td>
      <td>${newClient.aditionalData}</td>
    </tr>
    <tr>
      <td><strong>Color Seleccionado del Morral:</strong></td>
      <td>${newClient.color_morral}</td>
    </tr>
    <tr>
      <td><strong>Valor de la Compra:</strong></td>
      <td>${newClient.valor_compra}</td>
    </tr>
    <tr>
      <td><strong>Fecha de la Compra:</strong></td>
      <td>${newClient.fecha_compra}</td>
    </tr>
  </table>

  <p>Por favor, contacta al cliente durante el mismo día para confirmar la compra. Además, considera ofrecerle un descuento en la segunda unidad por si está interesado. Esto puede ayudar a escalar aún más las ventas.</p>

  <p>¡Gracias!</p>

</body>`;

    const mailOptions = {
      from: "landing Morral KF45",
      to: mailTo, 
      subject: "Nueva Venta En tu Landing (KF45)",
      html: templateNotifyPurchase
    }

    try {
      const sendMail = await transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(`error sending email: ${error}`);
        } else {
          console.log(`email sent: ${info.response}`);
        }
      })
      console.log(`email sent: ${sendMail}`);
    } catch (error) {
      console.log(error);
      return error.message
    }
  }
}

const mailService = new MailService()
export default mailService