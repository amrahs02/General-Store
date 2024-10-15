const Smartphone = require('../models/Smartphone');

exports.addSmartphone = (req, res) => {
    const { brand, model, price, specs, imageUrl } = req.body;
    Smartphone.create({ brand, model, price, specs, imageUrl })
        .then(smartphone => res.json(smartphone))
        .catch(err => res.status(400).json({ message: err.message }));
};

exports.getSmartphones = (req, res) => {
    Smartphone.find()
        .then(smartphones => res.json(smartphones))
        .catch(err => res.status(400).json({ message: err.message }));
};
