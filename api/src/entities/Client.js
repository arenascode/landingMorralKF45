export default class Client {
  constructor(
    nombre,
    email,
    telefono,
    cedula,
    ciudad,
    departamento,
    direccion,
    aditionalData,
    color,
    valorCompra
  ) {
    (this.nombre = nombre),
      (this.email = email),
      (this.telefono = telefono),
      (this.cedula = cedula),
      (this.ciudad = ciudad),
      (this.departamento = departamento);
    this.direccion = direccion;
    this.aditionalData = aditionalData;
    this.color_morral = color;
    this.valor_compra = Number(valorCompra.replace(/,/g, ''));
    this.fecha_compra = new Date();
  }

  // purchaseDate() {
  //   const options = {
  //     day: "numeric",
  //     month: "numeric",
  //     year: "numeric",
  //     hour: "numeric",
  //     minute: "numeric",
  //   };
  //   const newDate = new Date("es-419", options);
  //   // const formattedDate = date.toLocaleString("es-419", options);
  //   return newDate;
  // }
}
// con ≤,///././st client = new Client(
//   "miguel",
//   "arenas",
//   "1234567",
//   "bogota",
//   "cundinamarca",
//   "calle 124 siempre vida",
//   "al frente del cc"
// );
// console.log(client);
// const client = new Client()
// export default client
