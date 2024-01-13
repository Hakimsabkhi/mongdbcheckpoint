const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./Model/user");

const app = express();
dotenv.config();
mongoose.connect(process.env.DB_URL).then(console.log("DB Connected"));

const PORT = process.env.PORT || 4000;

// async function start() {
//   const person = await User.create({
//     name: "Saif",
//     age: 27,
//     favoriteFoods: ["Pizza"],
//   });
// }
// start();

// async function start() {
//   const arrayOfPeoples = [
//     { name: "Haythem", age: 28, favoriteFoods: ["Pizza"] },
//     { name: "Khaled", age: 30, favoriteFoods: ["Hamburger"] },
//   ];

//   await User.create(arrayOfPeoples);
// }
// start();

// async function start() {
//   console.log(await User.find());
// }
// start();

// async function start() {
//   console.log(await User.findOne({ name: "Saif" }));
// }
// start();

// async function start() {
//   console.log(await User.findById("6584908e8600f37df8b131d4"));
// }
// start();

// async function start() {
//   await User.findByIdAndUpdate("6584908e8600f37df8b131d4", {
//     $push: { favoriteFoods: "Juice" },
//   });
// }
// start();

// async function start() {
//   await User.findByIdAndUpdate("6584908e8600f37df8b131d4", { age: 20 });
// }
// start();

// async function start() {
//   await User.findOneAndUpdate(
//     { name: "Khaled" },
//     { favoriteFoods: ["Lablebi"] }
//   );
// }

// async function start() {
//   await User.findByIdAndDelete("65848fe467a3798aee888694");
// }
// start();

async function start() {
  const specificSearch = await User.find({ favoriteFoods: "Pizza" })
    .sort({
      age: -1,
    })
    .limit(1)
    .select("name");
  console.log(specificSearch);
}

start();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
