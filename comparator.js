// Este script compara o arquivo gerado pelo garimpo do Puppeteer e um arquivo de base de texto, para validar se existe algo de errado.

const fs = require("fs");
const _ = require("lodash");

const pageTextContentString = fs.readFileSync("pageTextContent.json", "utf-8");
const palavrasString = fs.readFileSync("ULTIMATE2.json", "utf-8");

const pageTextContent = JSON.parse(pageTextContentString);
const palavras = JSON.parse(palavrasString);

const wrongWords = _.difference(pageTextContent, palavras);

console.log(wrongWords);
