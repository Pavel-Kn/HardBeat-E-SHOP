const { Schema, model } = require("mongoose");

const schema = new Schema({
    name: { type: String },
    model: { type: String },
    category: { type: String },
    price: { type: Number },
    image: { type: String },
    descriptionShort: { type: String },
    descriptionFull: { type: String },
    quantity: { type: Number },
    rating: { type: Number },
});

module.exports = model("Product", schema);
