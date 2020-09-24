const fs = require("fs");
const chalk = require("chalk");

function verificandoApiKeyExiste() {
  try {
    let fileExists = fs.existsSync(`./api_key.txt`);

    if (!fileExists) {
      throw "Api key nao localizada - execute: ddmap --set-key=SUA_API_KEY";
    }

    fs.readFile("./api_key.txt", "utf8", function (err, data) {
      if (err) throw err;

      if (data.length === 0)
        throw "Api key nao localizada - execute: ddmap --set-key=SUA_API_KEY";
    });

    return false;
  } catch (error) {
    console.log(chalk.red("ERRO - ") + `${error}`);
    return true;
  }
}

function setandoApiKey(api_key) {
  try {
    fs.writeFile(`./api_key.txt`, api_key, (err) => {
      if (err) {
        throw "Nao foi possivel gerar api_key.txt";
      }
    });

    console.log(chalk.green("SUCESSO - ") + `Api key configurada.`);
  } catch (error) {
    console.log(chalk.red("ERRO - ") + `${error}`);
  }
}

const ApiKeyRemote = {
  verificandoApiKeyExiste,
  setandoApiKey,
};

module.exports = ApiKeyRemote;
