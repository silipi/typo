// Este script junta dois ou mais arquivos JSON em um só.
// Usado para combinar diversas fontes de palavras que encontrei pela internet.

const fs = require("fs");

const a = JSON.parse(fs.readFileSync("palavras.json", "utf-8"));
const b = JSON.parse(fs.readFileSync("ULTIMATE.json", "utf-8"));

function mergeArrays(...arrays) {
  let jointArray = [];

  arrays.forEach((array) => {
    jointArray = [...jointArray, ...array];
  });
  const uniqueArray = jointArray.filter(
    (item, index) => jointArray.indexOf(item) === index
  );
  return uniqueArray;
}

let BIGFUCKINGARRAY = a.concat(b);

fs.writeFileSync(
  "ULTIMATE2.json",
  JSON.stringify(BIGFUCKINGARRAY, null, 2),
  (err) => {
    if (err) {
      console.log("Oh céus, um erro no arquivo! Veja aí: " + err);
    }
  }
);
