const express = require("express");
const app = express();
const port = 5000;
const connection = require("./config/db")
const dotenv = require("dotenv").config();
const userRoute = require("./routes/User.routes")
const telemedRoute = require("./routes/Telemed.routes")
const authRoute = require("./routes/Auth.routes")
const adminRoute = require("./routes/Admin.routes")

app.use(express.json());

app.use('/api/user',userRoute);
app.use('/api/telemed',telemedRoute);
app.use('/api/auth',authRoute);
app.use('/api/admin',adminRoute);

app.listen(port, () => console.log(`Example app listening http://localhost:${port}`));
