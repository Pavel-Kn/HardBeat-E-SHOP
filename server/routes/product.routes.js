const express = require("express");
const Product = require("../models/Product");
const auth = require("../middleware/auth.middleware");
const router = express.Router({ mergeParams: true });

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

router
    .use(auth)
    .route("/:prodId")
    .patch(async (req, res) => {
        try {
            const { prodId } = req.params;
            const updatedProduct = await Product.findByIdAndUpdate(
                prodId,
                req.body,
                { new: true }
            );
            res.json(updatedProduct);
        } catch (error) {
            res.status(500).json({
                message: "На сервере произошла ошибка. Попробуйте позже",
            });
        }
    })
    .delete(async (req, res) => {
        if (req.user.isAdmin === false) {
            res.status(403).json({
                message: "Недостаточно прав",
            });
            return;
        }
        try {
            const { prodId } = req.params;
            const removedProduct = await Product.findById(prodId);
            await removedProduct.remove();
            res.status(200).end();
            return;
        } catch (error) {
            res.status(500).end();
        }
    })
    .post(async (req, res) => {
        if (req.user.isAdmin === false) {
            res.status(403).json({
                message: "Недостаточно прав",
            });
            return;
        }
        try {
            const { prodId } = req.params;
            const updatedProduct = await Product.findByIdAndUpdate(
                prodId,
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
