require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

// Authentication route
const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();


// ================= MIDDLEWARE =================

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use(cookieParser());


// ================= AUTH ROUTES =================

app.use("/auth", authRoute);


// ================= HOLDINGS =================

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error fetching holdings",
    });
  }
});


// ================= POSITIONS =================

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error fetching positions",
    });
  }
});


// ================= NEW ORDER =================

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.send("Order saved");
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Error saving order",
    });
  }
});


// ================= SERVER + DATABASE =================

mongoose
  .connect(uri)
  .then(() => {
    console.log("DB Connected");

    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database connection failed:", error);
  });