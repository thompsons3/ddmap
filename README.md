# DDMap

DDMap é uma biblioteca CLI (command-line interface) escrita em NodeJS. Essa aplicação foi desenvolvida para uso exclusivo com a plataforma do **_[Bugsnag](https://www.bugsnag.com/)_** com **_React Native_**. *Bugsnag* é uma plataforma para monitorar erros da sua aplicação. O DDMap facilita a geração de arquivos source-map (Android e IoS) e realiza o upload para o *Bugsnag* e um único comando.

-----------------

## Instalação

Use o gerenciador de pacotes [npm](https://www.npmjs.com/) para instalar o ddmap.

```bash
$ npm -g install ddmap
```

## Como usar

> Seu aplicativo React Native deve fazer todas as intalações da biblioteca do bugsnag. [Documentação de instalação.](https://docs.bugsnag.com/platforms/react-native/)

```bash
# Entre dentro da pasta do seu projeto

$ cd seu_repositorio_aplicativo
```

```bash
# Copie sua API_KEY na plataforma do bugsnag.

$ ddmap --set-key=SUA_API_KEY
```

```bash
# Informe a versão do aplicativo que os arquivos source-map foram gerados e faça o upload para o bugsnag.

$ ddmap --set-version=3.04.07 --android --ios
```

## Funcionalidades

| Comando                             | Resultado                           |
| ----------------------------------- | ----------------------------------- |
| ddmap --set-key=SUA_API_KEY | Setando no ddpmap sua api_key do bugsnag                        
| ddmap --set-version=VERSAO     | Versão dos arquivos source-map           |
| ddmap --android    | Upload de arquivos source-map somente para Android                      |
| ddmap --ios      | Upload de arquivos source-map somente para Ios |


## Contribuintes

Solicitações pull são bem-vindas. Para grandes mudanças, abra um problema primeiro para discutir o que você gostaria de mudar.

Please make sure to update tests as appropriate.

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
