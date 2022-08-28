// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
// DEBUG: belongsTo error: Error: product.belongsTo called with something that's not a subclass of Sequelize.Model
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  // TODO: check this later for correct on delete
  onDelete: "CASCADE",
});

// https://sequelize.org/api/v6/class/src/associations/belongs-to-many.js~belongstomany
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag });

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
