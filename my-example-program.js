// โปรแกรมแปลงหน่วยน้ำหนักระหว่างกิโลกรัมและปอนด์

import readline from "readline";

// Camel case -> kilogramToPounds -> JS functions
// Pascal case -> KilogramToPounds -> React components

function kilogramToPounds(kilogram) {
  return kilogram * 2.20462;
}

function poundsToKilogram(pounds) {
  return pounds / 2.20462;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your weight:", function (weightInput) {
  const weight = parseFloat(weightInput);
  rl.question("Enter unit (kg or lb):", function (unitInput) {
    const unit = unitInput.trim().toUpperCase();

    let result;

    // if statement
    if (unit === "KG") {
      result = kilogramToPounds(weight);
      console.log(`${weight}kg is ${result.toFixed(2)}lb`);
    } else if (unit === "LB") {
      result = poundsToKilogram(weight);
      console.log(`${weight}lb is ${result.toFixed(2)}kg`);
    } else {
      console.log(`Invalid unit! Please enter KG or LB.`);
    }
    rl.close();
  });
});
