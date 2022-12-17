const express = require("express");
const Product = require("../models/Product");
const router = express.Router({ mergeParams: true });

// /api/product
router
    .route("/")
    .get(async (req, res) => {
        try {
            const list = await Product.find();
            res.send(list);
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже",
            });
        }
    })
    .post(async (req, res) => {
        try {
            const newProduct = await Product.create({
                ...req.body,
            });
            res.status(201).send(newProduct);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже",
            });
        }
    });

// /api/product/:productId
router
    .route("/:productId")
    .delete(async (req, res) => {
        try {
            const { productId } = req.params;
            const removedProduct = await Product.findById(productId);
            await removedProduct.remove();
            res.status(200).end();
        } catch (error) {
            res.status(500).end();
        }
    })
    .post(async (req, res) => {
        try {
            const { productId } = req.params;
            const updatedProduct = await Product.findByIdAndUpdate(
                productId,
                req.body,
                { new: true }
            );
            res.json(updatedProduct);
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже",
            });
        }
    });

module.exports = router;
