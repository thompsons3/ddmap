const chalk = require("chalk");
const fs = require("fs");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

async function mapAndroid(version) {
  const API_KEY = await getApiKey();

  try {
    if (API_KEY.length == 0) {
      throw "Api key nao localizada - execute: ddmap --set-key=SUA_API_KEY";
    }

    await exec(
      "npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android-release.bundle --sourcemap-output android-release.bundle.map"
    );

    await exec(
      "curl --http1.1 https://upload.bugsnag.com/react-native-source-map -F apiKey=" +
        `${API_KEY}` +
        " -F appVersion=" +
        `${version}` +
        " -F dev=false -F platform=android -F sourceMap=@android-release.bundle.map -F bundle=@android-release.bundle -F projectRoot=`pwd`"
    );

    console.log(
      chalk.green("SUCESSO - ") + `Upload de source map concluido com sucesso.`
    );
  } catch (error) {
    console.log(chalk.red("ERRO - ") + `${error}`);
  }
}

async function mapIos(version) {
  const API_KEY = await getApiKey();

  try {
    if (API_KEY.length == 0) {
      throw "Api key nao localizada - execute: ddmap --set-key=SUA_API_KEY";
    }

    await exec(
      "npx react-native bundle --platform ios --dev false --entry-file index.js --bundle-output ios-release.bundle --sourcemap-output ios-release.bundle.map"
    );

    await exec(
      "curl --http1.1 https://upload.bugsnag.com/react-native-source-map -F apiKey=" +
        `${API_KEY}` +
        " -F appVersion=" +
        `${version}` +
        " -F dev=false -F platform=ios -F sourceMap=@ios-release.bundle.map -F bundle=@ios-release.bundle -F projectRoot=`pwd`"
    );

    console.log(
      chalk.green("SUCESSO - ") + `Upload de source map concluido com sucesso.`
    );
  } catch (error) {
    console.log(chalk.red("ERRO - ") + `${error}`);
  }
}

async function getApiKey() {
  const data = fs.readFileSync("./api_key.txt", {
    encoding: "utf8",
    flag: "r",
  });

  return data;
}

const MapService = {
  mapAndroid,
  mapIos,
};

module.exports = MapService;
