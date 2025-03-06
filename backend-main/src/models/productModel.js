const db = require("../config/db");

const getAllProducts = (callback) => {
  db.query("SELECT * FROM products", callback);
};

const getProductById = (id, callback) => {
  db.query("SELECT * FROM products WHERE ProductID = ?", [id], callback);
};

const createProduct = (product, callback) => {
  const {
    Name,
    Description,
    Price,
    Discount,
    FinalPrice,
    StockQuantity,
    CategoryID,
    ImageURL,
  } = product;
  const query =
    "INSERT INTO products (Name, Description, Price, Discount, FinalPrice, StockQuantity, CategoryID, ImageURL) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    query,
    [
      Name,
      Description,
      Price,
      Discount,
      FinalPrice,
      StockQuantity,
      CategoryID,
      ImageURL,
    ],
    callback
  );
};

module.exports = { getAllProducts, getProductById, createProduct };
