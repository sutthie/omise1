const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//require("dotenv").config({ path: "./.env" });
require("dotenv").config();

const PORT = process.env.PORT || 8080;
var token = "tokn_test_5ocg6kbwi2skqmz0gzv";

var omise = require("omise")({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

//console.log(process.env.OMISE_PUBLIC_KEY);

const app = express();
app.use(bodyParser.json());
app.use(cors());

// const createCharge = async () => {
//   const customer = await omise.customers.create({
//     email: "sutthie@gmail.com",
//     description: "Sutthie Jul(id:123457650)",
//     card: token,
//   });

//   const charge = await omise.charges.create({
//     amount: 10000,
//     currency: "thb",
//     customer: customer.id,
//   });

//   console.log("Charge -->", charge);
// };

// createCharge();

app.post("/checkout-credit-card", async (req, res, next) => {
  async () => {
    const customer = await omise.customers.create({
      email: "sutthie@gmail.com",
      description: "Sutthie Jul(id:123457650)",
      card: token,
    });

    const charge = await omise.charges.create({
      amount: 10000,
      currency: "thb",
      customer: customer.id,
    });

    console.log("Charge -->", charge);

    next();
  };
});

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});

module.exports = app;
