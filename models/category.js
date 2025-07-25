const mongoose = require("mongoose");
const joi = require("joi");

const CategorySchema = new mongoose.Schema({
    name: String,
    age: { type: Number, max: 110, min: 0 },
});

const Category = mongoose.model("Type", CategorySchema);

const categoryValidator = joi.object({
    name: joi.string().required(),
    age: joi.number().max(110).min(10).required(),
})
module.exports = {Category, categoryValidator};