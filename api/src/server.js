import { app } from "./app/app.js";
import { PORT } from "./config/server.config.js";

console.log(process.env.NODE_ENV);
const connectedServer = app.listen(PORT, () => console.log(`Listening on ${PORT} Port`))

export default connectedServer