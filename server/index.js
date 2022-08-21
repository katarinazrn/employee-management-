const sequelize = require("./model/dbconfig");
let cors = require('cors');
const formidable = require('express-formidable');

sequelize.sync({ force: true })

const express = require("express");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
app.use(express.static('uploads'))

app.use(cors());
app.use(formidable());

app.get("/", (req, resp) => resp.send("application is up and running"));

app.use("/api", employeeRoutes.routes);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Service endpoint = http://localhost:${PORT}`);
});