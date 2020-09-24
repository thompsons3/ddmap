const { Command } = require("commander");
const chalk = require("chalk");

/* SERVICES */
const ApiKeyRemote = require("./service/ApiKeyRemote");
const MapService = require("./service/MapService");

const program = new Command();

/* DEFINIÇÃO DE VERSÃO */
program.version("0.0.1");

program
  .option("-k, --set-key <type>", "Subindo api key do bugsnag.")
  .option("-v, --set-version <type>", "Setando versão da aplicação em questão.")
  .option("-a, --android", "Subindo source map para android.")
  .option("-i, --ios", "Subindo source map para ios.");

/* REPASSANDO OS ARGUMENTOS DA LINHA */
program.parse(process.argv);

/* CONTROLLER */

if (program.setKey) {
  ApiKeyRemote.setandoApiKey(program.setKey);
}

/* VERIFICANDO SE EXISTE UMA APIKEY SETADA */
const error = ApiKeyRemote.verificandoApiKeyExiste();

if (error === false) {
  if (program.android) {
    if (!program.setVersion) {
      console.log(
        chalk.yellow("ATENCAO - ") +
          `Informe a versao - execute: ddmap --set-version=1.0.0 --android`
      );
    } else {
      MapService.mapAndroid(program.setVersion);
    }
  }

  if (program.ios) {
    if (!program.setVersion) {
      console.log(
        chalk.yellow("ATENCAO - ") +
          `Informe a versao - execute: ddmap --set-version=1.0.0 --ios`
      );
    } else {
      MapService.mapIos(program.setVersion);
    }
  }
}
