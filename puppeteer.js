// Busca por um site, recolhe todo e qualquer texto digitado dentro dele e armazena em um arquivo para comparação.

const puppeteer = require("puppeteer");
const fs = require("fs");

const url = "https://brasilescola.uol.com.br/geografia";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  // Busca e tratamento de dados.
  const pageText = await page.evaluate(() => {
    return document.body.innerText
      .toLowerCase()
      .replace(".", " ")
      .replace("\n", " ")
      .replace(/[^\w \xC0-\xFF-_]/g, " ")
      .replace(/[0-9]/g, " ");
  });

  const pageArray = pageText.split(/\s+/);

  await browser.close();

  fs.writeFileSync(
    "pageTextContent.json",
    JSON.stringify(pageArray, null, 2),
    (err) => {
      if (err) {
        console.log("Oh céus, um erro no arquivo! Veja aí: " + err);
      }
    }
  );
})();
