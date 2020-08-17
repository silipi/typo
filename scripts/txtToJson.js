// Utilitário para ir convertendo os arquivos que eu ia achando para JSON's Array.

const fs = require("fs");
const _ = require("lodash");

const a = fs.readFileSync("palavras.txt", "utf-8");

const b = a.split("\n");

fs.writeFileSync("palavras.json", JSON.stringify(b, null, 2), (err) => {
  if (err) {
    console.log("Oh céus, um erro no arquivo! Veja aí: " + err);
  }
});
