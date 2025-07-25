const { Category, categoryValidator } = require("./../models/category");

const express = require("express");

const router = express.Router();


router.get("/", async (req, res) => {
    let data = await Category.find();
    res.json(data);
});

router.post("/", async (req, res) => {
    try {
        let { value, error } = categoryValidator.validate(req.body);
        if (error) {
            return res.json({ message: error.details[0].message });
        }
        let data = new Category(value);
        await data.save();
        res.json(data);
    } catch (err) {
        res.status(400).json({ message: "Xatolik" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        let { value, error } = categoryValidator.validate(req.body);
        if (error) {
            return res.json({ message: error.details[0].message });
        }
        let data = await Category.findByIdAndUpdate(req.params.id, value);
        res.json(data);
    } catch (err) {
        res.status(400).json({ message: "Xatolik" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.json({ message: "Ochirildi" });
    } catch (err) {
        res.status(400).json({ message: "Xatolik" });
    }
});

module.exports = router;
