const veggieList = [
  "basil",
  "beans",
  "broccoli",
  "carrots",
  "cauliflower",
  "chard",
  "dill",
  "eggplant",
  "kale",
  "lettuce",
  "onions",
  "peas",
  "peppers",
  "potatoes",
  "pumpkin",
  "rosemary",
  "sage",
  "spinach",
  "squash",
  "thyme",
  "tomatoes",
  "zucchini",
];

const veggieObjects = veggieList.map((name, index) => ({
  id: `veg-${index + 1}`,
  name,
  category: "",
  url: "",
  isEdible: true,
}));

console.log(veggieObjects);

const edibleParts = ["any", "tubers/bulbs", "leaves/stems", "fruit/pods"];

export { veggieObjects, veggieList, edibleParts };
