const path = require("path");
const express = require("express");
const shopController = require("../controllers/shop");

const router = express.Router();

// GET routes
router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);
router.get("/products/:productId", shopController.getProduct);
router.get("/cart", shopController.getCart);
router.get("/orders", shopController.getOrders);
// router.get("/checkout", shopController.getCheckout);

// POST routes
router.post("/cart", shopController.postCart);
router.post("/cart-delete-item", shopController.postCartDeleteProduct);
router.post("/create-order", shopController.postOrder);

module.exports = router;
