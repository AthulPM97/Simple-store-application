const Product = require('../models/Product');

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });

};



// {
//   "id": "1532",
//   "title": "A Book",
//   "imageUrl": "https://www.publicdomainpictures.net/pictures/10000/velka/1-1210009435EGmE.jpg",
//   "description": "This is an awesome book!",
//   "price": "20"
// }