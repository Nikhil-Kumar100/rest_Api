const { request } = require("express");
const Product = require("../models/product");

const GetAllProducts = async (req, res) => {
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 4;
  let skip = (page - 1) * limit;

  const { sort, name, select } = req.query;
  const queryObject = {};

  if (name) {
    queryObject.name = name;
  }

  // Create the base query
  let query = Product.find(queryObject);

  // Apply sorting if specified
  if (sort) {
    query = query.sort(sort);
  }

  // Apply select if specified
  if (select) {
    const fieldsToSelect = select.split(',').join(' ');
    query = query.select(fieldsToSelect);
  }

  // Apply pagination
  query = query.skip(skip).limit(limit);

  try {
    const products = await query.exec();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const GetAllProductsTesting = async (req, res) => {
  const MyData = await Product.find(req.query);
  res.status(200).json(MyData);
};

module.exports = { GetAllProducts, GetAllProductsTesting };
