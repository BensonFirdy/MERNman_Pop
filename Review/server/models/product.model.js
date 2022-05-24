const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [2, "Title must be at least 2 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Cannot be less than 0 dollar"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [2, "Title must be at least 2 characters"],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;