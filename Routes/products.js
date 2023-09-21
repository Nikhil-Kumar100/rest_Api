const express=require("express");
const routes = express.Router();
const {GetAllProducts, GetAllProductsTesting} =require("../controller/products");

routes.route("/").get(GetAllProducts);
routes.route("/testing").get(GetAllProductsTesting);

module.exports =routes;