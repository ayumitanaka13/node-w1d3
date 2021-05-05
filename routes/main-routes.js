const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const data = [
  {
    id: 1,
    product: "Shoes",
  },
  {
    id: 2,
    product: "Dresses",
  },
];

router.get("/", (req, res, next) => {
  res.render("index", { products: data, title: "Shopping List" });
});

router.post("/add-product", (req, res, next) => {
  data.push({
    id: Math.floor(Math.random() * 11),
    product: req.body.product,
  });
  fs.writeFile(
    path.join(__dirname, "..", "products.json"),
    JSON.stringify(data, null, 2),
    () => {
      res.status(302).redirect("/");
    }
  );
});

module.exports = router;
