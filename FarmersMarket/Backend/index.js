const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotEnv = require("dotenv");
const ValidateOtp = require("./Routes/ValidateOtpRoutes.js");
const farmerRouter = require("./Routes/Farmer/FarmerRoutes.js");
const router = require("./Routes/otprequestRoutes.js");
const consumerRouter = require("./Routes/consumerRoutes.js");
const SearchRouter = require("./Routes/loginRoutes.js");
const emailCheckRouter = require("./Routes/emailCheckRouter.js");
const otpRouter = require("./Routes/SendOtpRouter.js");
const ResetPassRouter = require("./Routes/RestPasswordRouter.js");
const RegistrationRouter = require("./Routes/AdminRoutes/RegistrationsRoutes.js");
const Profilerouter = require("./Routes/ProfileRoutes.js");
const addProductRouter = require("./Routes/Farmer/addProduct.js");
const ViewProductsRouter = require("./Routes/Farmer/ViewProductsRoutes.js");
dotEnv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const port = 5000;

const products = require("./Models/Products.js");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`Connected`);
  })
  .catch((err) => {
    console.log("server:", err);
  });

app.use(cors()); // Allow frontend access
app.use(express.json()); // Parse JSON requests
app.use("/api", Profilerouter);
app.use("/api", consumerRouter);
app.use("/api", router);
app.use("/api", farmerRouter);
app.use("/api", SearchRouter);
app.use("/api", emailCheckRouter);
app.use("/api", otpRouter);
app.use("/api", ValidateOtp);
app.use("/api", ResetPassRouter);
app.use("api", RegistrationRouter);
app.use("/api", addProductRouter);
app.use("/api", ViewProductsRouter);

// ✅ START THE SERVER
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
