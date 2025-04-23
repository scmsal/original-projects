const plantNamesList = [
  "basil",
  "bean",
  "broccoli",
  "carrot",
  "chard",
  "dill",
  "kale",
  "lettuce",
  "onion",
  "pea",
  "bell pepper",
  "potato",
  "sage",
  "thyme",
  "tomato",
  "zucchini",
];

const API_KEY = import.meta.env.VITE_PERENUAL_API_KEY;

const edibleParts = ["any", "tubers/bulbs", "leaves/stems", "fruit/pods"];

export { plantNamesList, API_KEY, edibleParts };
