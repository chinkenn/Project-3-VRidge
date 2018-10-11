const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Books collection and inserts the books below
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/foodList"
);
const foodSeed = [
  {
    user: "Ken",
    list: "List 1",
    item: "chicken",
    qty: 3,
    entryDate: new Date(Date.now()),
    isFridge: false,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Ken",
    list: "List 1",
    item: "steak",
    qty: 2,
    entryDate: new Date(Date.now()),
    isFridge: false,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Ken",
    list: "List 1",
    item: "chicken noodle soup",
    qty: 5,
    entryDate: new Date(Date.now()),
    isFridge: false,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Ken",
    list: "List 1",
    item: "apples",
    qty: 12,
    entryDate: new Date(Date.now()),
    isFridge: true,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Ken",
    list: "List 2",
    item: "pears",
    qty: 3,
    entryDate: new Date(Date.now()),
    isFridge: false,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Ken",
    list: "List 2",
    item: "garlic",
    qty: 2,
    entryDate: new Date(Date.now()),
    isFridge: false,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Ken",
    list: "List 2",
    item: "coffee",
    qty: 5,
    entryDate: new Date(Date.now()),
    isFridge: false,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Johnson",
    list: "List 1",
    item: "milk",
    qty: 2,
    entryDate: new Date(Date.now()),
    isFridge: false,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Johnson",
    list: "List 1",
    item: "ice cream",
    qty: 2,
    entryDate: new Date(Date.now()),
    isFridge: false,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Johnson",
    list: "List 1",
    item: "pork chops",
    qty: 4,
    entryDate: new Date(Date.now()),
    isFridge: true,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Johnson",
    list: "List 1",
    item: "pasta sauce",
    qty: 4,
    entryDate: new Date(Date.now()),
    isFridge: true,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Johnson",
    list: "List 1",
    item: "bread",
    qty: 3,
    entryDate: new Date(Date.now()),
    isFridge: true,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Brian",
    list: "List 1",
    item: "bagels",
    qty: 2,
    entryDate: new Date(Date.now()),
    isFridge: false,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Brian",
    list: "List 1",
    item: "penne pasta",
    qty: 4,
    entryDate: new Date(Date.now()),
    isFridge: false,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Brian",
    list: "List 1",
    item: "cereal",
    qty: 3,
    entryDate: new Date(Date.now()),
    isFridge: false,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Brian",
    list: "List 1",
    item: "lobster",
    qty: 3,
    entryDate: new Date(Date.now()),
    isFridge: true,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Brian",
    list: "List 1",
    item: "lettuce",
    qty: 3,
    entryDate: new Date(Date.now()),
    isFridge: true,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Stacie",
    list: "List 1",
    item: "popcorn",
    qty: 1,
    entryDate: new Date(Date.now()),
    isFridge: false,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Stacie",
    list: "List 1",
    item: "sugar",
    qty: 4,
    entryDate: new Date(Date.now()),
    isFridge: false,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Stacie",
    list: "List 1",
    item: "strawberries",
    qty: 2,
    entryDate: new Date(Date.now()),
    isFridge: false,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Stacie",
    list: "List 1",
    item: "onions",
    qty: 1,
    entryDate: new Date(Date.now()),
    isFridge: true,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Stacie",
    list: "List 1",
    item: "bananas",
    qty: 6,
    entryDate: new Date(Date.now()),
    isFridge: true,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Stacie",
    list: "List 1",
    item: "oatmeal",
    qty: 3,
    entryDate: new Date(Date.now()),
    isFridge: true,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  },
  {
    user: "Stacie",
    list: "List 1",
    item: "green tea",
    qty: 2,
    entryDate: new Date(Date.now()),
    isFridge: true,
    fridgeDate: "",
    exprDate: "",
    isTrash: false
  }
];
db.Food
  .remove({})
  .then(() => db.Food.collection.insertMany(foodSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });