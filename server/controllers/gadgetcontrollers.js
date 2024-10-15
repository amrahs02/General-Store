const Gadget = require("../models/gadgets");

exports.addGadget = (req, res) => {
  console.log(req.body); // Log the incoming request body
  const { brand, model, price, specs, imageUrl } = req.body;
  Gadget.create({ brand, model, price, specs, imageUrl })
    .then((gadget) => res.json(gadget))
    .catch((err) => res.status(400).json({ message: err.message }));
};

exports.getGadgets = (req, res) => {
  Gadget.find()
    .then((gadgets) => res.json(gadgets))
    .catch((err) => res.status(400).json({ message: err.message }));
};
