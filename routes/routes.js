const express = require("express");
const router = express.Router();
const Model = require("../model/model");

// Post Method
router.post("/post", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (_error) {
    res.status(401).json({ message: _error.message });
  }
});

// Get All Method
router.get("/get/all", async (req, res) => {
  try {
    const data = await Model.find();
    res.status(200).json(data);
  } catch (_error) {
    res.status(401).json({ message: _error.message });
  }
});

// Get By ID Method
router.get("/get/one/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.status(200).json(data);
  } catch (_error) {
    res.status(401).json({ message: _error.message });
  }
});

// Update By ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const data = await Model.findByIdAndUpdate(id, updateData);
    res.status(200).json(`${data.name} has been Updated successfully...`);
  } catch (_error) {
    res.status(401).json({ message: _error.message });
  }
});

// Delete By ID Method
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.status(200).json(`${data.name} has been Deleted successfully...`);
  } catch (_error) {
    res.status(401).json({ message: _error.message });
  }
});

module.exports = router;
