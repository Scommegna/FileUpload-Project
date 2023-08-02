const Product = require("../models/Product");
const { StatusCodes } = require("http-status-codes");

const createProduct = async (req, res) => {
  res.send("created");
};

const getAllProducts = async (req, res) => {
  res.send("list of all products");
};

module.exports = {
  createProduct,
  getAllProducts,
};
