function Comments(author, body) {
  this.author = author;
  this.body = body;
}

function Food(
  name,
  image,
  reviews,
  comments,
  price,
  priceCategory,
  foodCategory
) {
  this.name = name;
  this.image = image;
  this.reviews = reviews;
  this.comments = comments;
  this.price = price;
  this.priceCategory = priceCategory;
  this.foodCategory = foodCategory;
}

let comment1 = new Comments("Steven Agang", "Delecious");
let comment2 = new Comments(
  "Khaizer",
  "Didnt expect this is good for its price"
);
let comment3 = new Comments("JJ", "Quite expensive tbh");

let product1 = new Food("Coffee", "IMAGES", 180, comment2, 200, "Moderate", [
  "coffee & tea",
  "Cafeteria",
]);

let product2 = new Food("Cake", "IMAGES", 100, comment1, 50, "Inexpensive", [
  "Cakes",
  "Sweet",
]);

let product3 = new Food("Steak", "IMAGES", 50, comment3, 500, "Expensive", [
  "Meat",
  "Cow",
]);

console.log(product1);
console.log(product2);
console.log(product3);
