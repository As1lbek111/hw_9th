const mongoose = require("mongoose");
const joi = require("joi");

const ProductSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },
    count: Number
});

const Product = mongoose.model("Tvat", ProductSchema);

const productValidator = joi.object({
    name: joi.string().required(),
    image: joi.string().required(),
    price: joi.number().max(2000).min(10).required(),
    category: joi.string().required(),
    count: joi.number().min(1).required()
});

module.exports = {Product, productValidator};







