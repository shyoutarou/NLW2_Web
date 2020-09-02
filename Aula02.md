# Aula 2 (04/08/2020): Proffy-Server

- [Voltar a Aula 1](Aula01.md)
- [Voltar as README.md](README.md)

<details>
 <summary>Videos Youtube</summary>

2. Trilha OmniStack
[Trilha OmniStack Aula 1](https://www.youtube.com/watch?v=AC7fGkJRYNw)
[Trilha OmniStack Aula 2](https://www.youtube.com/watch?v=TjUO72eAtog)
[Trilha OmniStack Aula 3](https://www.youtube.com/watch?v=ytVJxv0OPEA)

</details>

<details>
 <summary>Wikis</summary>

[Wiki Home](https://github.com/shyoutarou/NLW2_Web/wiki)
1. [Aula 1](https://github.com/shyoutarou/NLW2_Web/wiki/Aula-1-(03-08-2020):-Proffy-Web)
2. [Aula 2](https://github.com/shyoutarou/NLW2_Web/wiki/Aula-2-(04-08-2020):-Proffy-Server)
3. [Aula 3](https://github.com/shyoutarou/NLW2_Web/wiki/Aula-3-(05-08-2020):-Front-e-Back-End-Web)

</details>

<details>
 <summary>GitHub Pages</summary>

1. [Web](https://shyoutarou.github.io/NLW2_Web/)
2. [Mobile](https://shyoutarou.github.io/NLW2_Mobile/)

</details>


## 📌 Index
- [FLUXO DESENVOLVIMENTO REACT](#fluxo-desenvolvimento-react)
    - [API (Application Programming Interface)](#api-application-programming-interface)
    - [REST (Representational State Transfer)](#rest-representational-state-transfer)
    - [Rotas, Recursos e Métodos HTTP](#rotas-recursos-e-métodos-http)
- [PARÂMETROS](#parâmetros)
    - [RequestBody](#requestBody)
    - [Route Params](#route-params)
    - [Route Query](#route-query)
- [CASOS DE USO](#casos-de-uso)
    - [Conexões](#conexões)
    - [Aulas/Classes](#aulas/classes)
- [ROTA PARA CRIAR UMA AULA](#rota-para-criar-uma-aula)
    - [Databases](#databases)
    - [Migrations](#migrations)
    - [Organizando Código](#organizando-código)
- [ROTA PARA LISTAR AULAS](#rota-para-listar-aulas)

## FLUXO DESENVOLVIMENTO REACT

É explicado o fluxo normal de aplicações, as funções Front e Back-End. A diferença do modelo MVC (carregava tudo a cada Refresh) e o modelo SPA (Single Page Application). Explicado que está se utilizando o Node.js pois permite utilizar a mesma linguagem, Typescript e React, para escrever o Front o Back e o mobile.

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/fluxo_react.png" />
    <br>
</h1>

Em aplicativos mobile (Kotlin, Swift, React, Flutter), não entendem HTML (body, table, etc.) para facilitar o consumo de dados por este tipo de dispositivos que tornou popular as API REST, pois retornam os dados em formato JSON e a tecnologia do Front-End que constrói o HTML, ele não retorna mais do servidor (modelo MVC). 

### API (Application Programming Interface)

O acrônimo API que provém do inglês trata-se de um conjunto de rotinas e padrões estabelecidos e documentados por uma aplicação A, para que outras aplicações consigam utilizar as funcionalidades desta aplicação A, sem precisar conhecer detalhes da implementação do software.

Desta forma, entendemos que as APIs permitem uma interoperabilidade entre aplicações. Em outras palavras, a comunicação entre aplicações e entre os usuários.

### REST (Representational State Transfer)

REST trata-se de uma abstração da arquitetura da Web. Resumidamente, o REST consiste em princípios/regras/constraints que, quando seguidas, permitem a criação de um projeto com interfaces bem definidas. Desta forma, permitindo, por exemplo, que aplicações se comuniquem.

O HTTP é o principal protocolo de comunicação para sistemas Web, existente há mais de 20 anos, e em todo esse tempo sofreu algumas atualizações. Nos anos 2000, um dos principais autores do protocolo HTTP, Roy Fielding, sugeriu, dentre outras coisas, o uso de novos métodos HTTP. Estes métodos visavam resolver problemas relacionados a semântica quando requisições HTTP eram feitas.

Estas sugestões permitiram o uso do HTTP de uma forma muito mais próxima da nossa realidade, dando sentido às requisições HTTP. Para melhor compreensão, veja os exemplos abaixo (requisições em formatos fictícios):

- **GET** http://www.meusite.com/usuarios
- **DELETE** http://www.meusite.com/usuarios/jackson
- **POST** http://www.meusite.com/usuarios �data {nome: joaquim}


Pela simples leitura  é possível inferir que no primeiro caso estamos pegando (GET) todos os usuários do site, ou seja, teremos uma lista de todos os usuários que estão cadastrados no sistema/site. Já, no segundo caso, estamos apagando (DELETE) o usuário Jackson. No último exemplo, estamos usando o método POST, em que percebemos o envio de dados extras para cadastrar um novo usuário.

Veja o quão simples ficou expressar o que desejamos realizar ao acessar um determinado endereço, usando verbos específicos para URLs específicas e usando dados padronizados, quando necessário.

Estes princípios apresentados fazem parte do REST! Em outras palavras, nesses exemplos, temos: uma representação padronizada, verbos e métodos usados, bem como, URLs.

Existe uma certa confusão quanto aos termos REST e RESTful. Entretanto, ambos representam os mesmo princípios. A diferença é apenas gramatical. Em outras palavras, sistemas que utilizam os princípios REST são chamados de RESTful.

- **REST**: conjunto de princípios de arquitetura
- **RESTful**: capacidade de determinado sistema aplicar os princípios de REST.

Iremos agora criar uma Web API REST. Crie uma pasta server, abra o PowerShell. Para iniciar um projeto, entre na pasta onde o projeto será criado e dê o comando:

```bash
yarn init -y
```

O parâmetro “-y” serve para pular as perguntas iniciais como nome e autor do projeto. Após isso abra o VS Code e foi criado a dependências da aplicação (packages.json)

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/dependencias.png" />
    <br>
</h1>

Crie uma pasta src e um arquivo server.ts

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/serverfile.png" />
    <br>
</h1>

Abra um terminal no VS Code e instale a biblioteca typescript com o comando:
```bash
yarn add typescript –D
```
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/addtypescript.png" />
    <br>
</h1>


Gere o arquivo de configuração do Typescript com o comando:
```bash
yarn tsc –init
```
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/typescriptsonfig.png" />
    <br>
</h1>


Definimos a versão do ECMAScript para es2017 pois é a versão que o Node.js entende. Se fosse uma versão de browser como o IE teria que ser uma versão mais antiga. Instalamos a também a dependência:
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/addnodedev.png" />
    <br>
</h1>

Que executa o servidor Node, fazendo ele entender Typescript, e monitora se teve alteração no Script. Se houver, ele restart automaticamente o servidor. Por padrão, sem a extensão, teríamos que parar e reiniciar o Node manualmente se houvesse alterações.

Para testar o serviço, altere o arquivo packages.json e crie uma seção scripts e no arquivo server.ts uma mensagem console.log genérica:

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/testestart.png" />
    <br>
</h1>

Observe que esta configuração "start": "ts-node-dev src/server.ts" poderia ser abreviada como "start": "tsnd src/server.ts". Para executar no terminai digite:
```bash
yarn start OU npm start
```
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/runserver.png" />
    <br>
</h1>

No script do   iremos inserir algumas flags e ficará assim:

```bash
"scripts": {
    "dev": "tsnd -
            --transpile-only
            --ignore-watch
            --respawn
            src/server.ts",
   },
```
- **transpile-only** Converte Javacript para Typescript, não verifica se tem erros, acelara desenvolvimento
- **ignore-watch** Não converte código dentro da pasta node_modules
- **respawn** Funcionamento de, se alterar o código, faz um restart e continua rodando. Só sai se der Crtl+C

Abaixo um comparativo das saídas de usando o flag respawn, exemplificando que ele continua rodando...

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/respawn.png" />
    <br>
</h1>

Outro exemplo é que se alterar a saída, ele atualiza automaticamente:

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/respawnupdate.png" />
    <br>
</h1>

Por causa dessa funcionalidade temos que abrir outro terminal para instalar outra dependência o express:
yarn add express
```bash
yarn add express
```
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/addexporess.png" />
    <br>
</h1>


O express é micro-framework que traz algumas funcionalidades prontas que evitam ficar fazendo configurações. Ao importar o express no arquivo server.ts dá um erro de dependência já visto anteriormente
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/expresserror.png" />
    <br>
</h1>


Quando estamos trabalhando com typescript, alguns pacotes adicionados são também em typescript e outros não. Os que não são a comunidade precisar criar esses pacotes de tipagem (com @type) que precisam ser instaladas também.
```bash
npm install @types/express –D
```
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/expresstypes.png" />
    <br>
</h1>


Executando o método get acima, já temos a comunicação da aplicação mas os resultados não saem no navegador.
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/CannotGET.png" />
    <br>
</h1>


Para dar a saída temos que incluir os 2 parâmetros que são injetados pelo método app.get: o request e o response. O request traz informações sobre a requisição (o cabeçalho e o corpo, o usuário, e-mail, senha, dados recebidos pelo Front-End). O response é a resposta da API para a aplicação. O código fica assim:

```bash
import express from 'express';

const app = express();

app.get("/users", (request, response) =>{
    return response.send('Start on port 3333 🚀')
});

app.listen(3333);

```
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/start3333.png" />
    <br>
</h1>


Porém como trabalhar com formato JSON precisamos fazer algumas alterações:

```bash
import express from 'express';

const app = express();

app.get("/users", (request, response) =>{
    const users =[
        {name: 'Diogo', age:25},
        {name: 'Ana', age:25},
    ]

    return response.json(users)
});

app.listen(3333);
```
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/startJSON.png" />
    <br>
</h1>

Para visualizarmos melhor os resultados podemos instalar um plugin no navegador Chrome, JSON Viewer:

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/JSONViewer.png" />
    <br>
</h1>


<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/JSONViewerformat.png" />
    <br>
</h1>


## Rotas, Recursos e Métodos HTTP

Cada endereço é uma rota (Ex.: http://localhost:3333/users ou http://localhost:3333/contact). O recurso é qualquer coisa que vem depois da URL base, ou seja, /users e /contact são os recursos. Os métodos HTTP de uma API mais comuns são o GET, POST, PUT e DELETE responsáveis pelas operações de CRUD. Como o pacote express que estamos utilizando parece ter limitações(???) quanto as outras requisições que não seja GET vamos utilizar outra ferramenta: O Insomnia Core. E vamo criar um Worksapace para o NLW.
Insonmnia (https://insomnia.rest/download/)

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/insomniacreate.png" />
    <br>
</h1>


Depois criamos uma nova requisição CriarUsuario pelo método POST:

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/userrequest.png" />
    <br>
</h1>


Depois de alterarmos o método de GET para POST conseguimos obter o resultado desejado:

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/GETtoPOST.png" />
    <br>
</h1>

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/GETtoPOSTresult.png" />
    <br>
</h1>

## PARÂMETROS

	Quando fazemos requisição existem 3 tipos de parâmetros:
- **RequestBody**: Para criar ou atualizar um registro, uma informação vem no corpo da requisição.
- **Route Params**: Identifica um recusrso na nossa rota qunado for atualizar ou deletar um registro específico.
- **Query Params**: Usados principalmente em listagens, para fazer filtros, paginação, ordenação, etc.

### RequestBody

Se colocarmos um request.body no método POST:

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/RequestPOST.png" />
    <br>
</h1>


E no Insomnia enviarmos um novo registro de usuário e colocamos método POST:

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/createuserPOT.png" />
    <br>
</h1>


No terminal retorna undefined pois o express não entende JSON por padrão. Corrigimos isso adicionando no arquivo server.ts o módulo que interpreta o JSON:
```bash
app.use(express.json());
```

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/servermodule.png" />
    <br>
</h1>

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/servermoduleresult.png" />
    <br>
</h1>

### Route Params

Se colocarmos um request.params no método DELETE:

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/routeparams.png" />
    <br>
</h1>

E no Insomnia enviarmos uma rota com a barra e um id e selecionamos método DELETE:

```bash
http://localhost:3333/users/1
```

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/routeparamsdelete.png" />
    <br>
</h1>

No terminal retorna

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/routeparamsdeletereturn.png" />
    <br>
</h1>


### Route Query

Se colocarmos um request.query no método GET:

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/routequery.png" />
    <br>
</h1>


E no Insomnia enviarmos uma rota com a query:
```bash
http://localhost:3333/users?page=20&name=Bob
```

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/routequeryinsomnia.png" />
    <br>
</h1>

No terminal retorna

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/routequeryreturn.png" />
    <br>
</h1>


## CASOS DE USO

	Identificando acessos de Back-End pelo layout Front-End:

### Conexões
- Rota para listar o total de conexões realizadas

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/rotaconections.png" />
    <br>
</h1>


- Rota para criar uma nova conexão (Entrar em contato). Juntamente irá abrir o WhatsApp do professor
- Armazenamento interno do Mobile dos Professores favoritos

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/rotazap.png" />
    <br>
</h1>

### Aulas/Classes

- Rota para criar uma aula;

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/rotacriarclass.png" />
    <br>
</h1>

- Rota para listar aulas
    - Filtra por matéria, dia da semana e horário

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/rotalistarclass.png" />
    <br>
</h1>

## ROTA PARA CRIAR UMA AULA

### Databases

- Instalar 
    - knex (Query-Builer, escreve comando SQL em Javascript) 
    - sqlite3 (driver para que o Node consiga se conectar ao sqlite)
```bash
yarn add knex sqlite3
```

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/addsqllite.png" />
    <br>
</h1>

Adicione uma pasta dentro de src com um arquivo connections.ts:

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/connetionsrtx.png" />
    <br>
</h1>


A função path.resolve é útil pois não precisamos colocar as barras do caminho. Esta função irá gerar um arquivo sqlite dentro da pasta database (que é o valor gravado em _dirname também). O sqlite não sabe o que fazer com valores não preenchidos por isso setamos useNullAsDefault como true.

## Migrations

Como o knex só entende Javascript e não Typescript precisamos criar um arquivo na raiz do projeto chamado knexfile.ts:

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/knexfilets.png" />
    <br>
</h1>


Depois incluímos um script no arquivo packages.json, que faz o redirecionamento dos comando knex através do arquivo anterior. Para cada comando que a gente tiver necessidade de usar pelo Typescript, podemos declarar neste script.

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/knexredirect.png" />
    <br>
</h1>


- **make**: Cria uma nova migração, com o nome da migração sendo adicionado.
- **latest**: Executa todas as migrações que ainda não foram executadas.

Controlam as versões dentro do banco de dados, similar ao Git. Por isso que vamos montar a estrutura do BD utilizando essa ferramenta. Quando outro desenvolvedor for trabalhar no mesmo projeto o Migrations reconstrói o banco na sua versão mais atualizada.

Poderíamos utilizar um comando knex que cria a Migrations tudo em Javascript (???), mas como estamos utilizando Typescript vamos cria-los manualmente. Primeiro, é interessante nomear os arquivos com número, pois isso definirá uma ordem de execução do Migrations. Crie uma pasta migrations dentro de database com os seguintes arquivos para gerar os objetos do DB:

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/migrationsfiles.png" />
    <br>
</h1>

- **Up**: Executa o especificado (pelo parâmetro config.name) ou a próxima migração cronológica que ainda não foi executada.
- **Down**: Desfaz o especificado (pelo parâmetro config.name) ou a última migração que foi danificada

Para maiores informações de implementação desses objetos pode ser obtida na documentação oficial [aqui] (http://knexjs.org/#Migrations-API)

Rodando o comando adaptado para criar a tabela de usuários:
```bash
yarn knex:migrate OU npx knex migrate:latest
```
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/knexmigration.png" />
    <br>
</h1>

Para visualizar os dados gravados em database.sqlite precisamos instalar a Extensão abaixo. (OBS.: Essa extensão dá muitos problemas na hora de visualizar os dados e **tem que ficar dando RELOAD no VS Code e reiniciando o yarn start)**

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/sqlliteerrror.png" />
    <br>
</h1>


Ao clicar com o botão direito no arquivo database.sqlite, podemos abrir uma nova janela com nossa conexão sqlite com a tabela gerada. As outras tabelas migrations são as que guardam o histórico de alterações desse BD. Se outro desenvolvedor executar o comando yarn knex:migrate executará só as migrações não executadas.

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/tableusers.png" />
    <br>
</h1>

Se algo der errado, o mais fácil e deletar o arquivo database.sqlite e tentar gerar novamente tudo. No código abaixo, podemos ver a implementação de tabelas relacionadas e Trigger em Cascade para Deletar e Fazer update das tabelas. A cada alteração do banco, para atualizar o arquivo database.sqlite precisamos rodar o comando:
```bash
yarn knex:migrate OU npx knex migrate:latest
```
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/yarnmigrate.png" />
    <br>
</h1>


### Organizando Código

Por critério de organização iremos criar um arquivo routes.ts para retirar o código de rotas que estava dentro de server:


Como está em um arquivo separado utilizamos express.Router() (anteriormente as rotas eram construídas diretamente através de express). Isso possibilita as rotas serem chamadas e utilizadas em diversas partes do projeto. Para testar as alterações voltamos ao Insomnia e fazemos as seguintes alterações:
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/changeservertoroutes.png" />
    <br>
</h1>


Como está em um arquivo separado utilizamos express.Router() (anteriormente as rotas eram construídas diretamente através de express). Isso possibilita as rotas serem chamadas e utilizadas em diversas partes do projeto. Para testar as alterações voltamos ao Insomnia e fazemos as seguintes alterações:
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/testchanges.png" />
    <br>
</h1>


Ao enviar temos a resposta no terminal:
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/testchangesresult.png" />
    <br>
</h1>


Agora altramos os dados do objeto para cadastrar uma classe:
```bash
{
	"name": "Shyoutaou Shyou",
	"avatar": "https://image",
	"whatsapp":"999999999",
	"bio": "Software developer, whose likes to be in tune with the technology flow.",
	"subject": "Mathematic",
	"cost": 250,
	"schedule": [
		{"week_day": 1, "from": "8:08", "to": "12:00"},
		{"week_day": 3, "from": "10:08", "to": "18:00"},
		{"week_day": 4, "from": "8:08", "to": "12:00"}
	]
}
```

Fazemos as alterações abaixo no arquivo routes.ts para testar a gravação n tabela users:

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/insertusers.png" />
    <br>
</h1>

Para inserir classes o mesmo procedimentos, só temos que recuperar o user_id ao salvar um usuário:
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/insertclass.png" />
    <br>
</h1>

Para habilitar as operações em transações e commit igual no SQL declaramos uma constante:
```bash
const trx = await db.transaction();
```
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/transactions.png" />
    <br>
</h1>

E substituímos por toda ocorrência de db que havia antes. No final damos o commit: 
```bash
trx.commit();
```
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/commits.png" />
    <br>
</h1>

Para tratar erro com try-catch pode ser feito assim:

```bash
const trx = await db.transaction();
try 
{
        Code here	
       trx.commit();
} 
catch (error) 
{
        trx.rollback();
        console.log(error);
        return response.status(400).json({error: "Unexpected error"})
}
```

## ROTA PARA LISTAR AULAS
	
 Foi feito um refatoramento de código, retirando tudo que estava em route.ts (que gravava no BD) e deixado somente o que é relativo a rotas neste arquivo. Repare que já foi adicionado a rota do método GET que será usado na página de filtragem.

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/listpage.png" />
    <br>
</h1>

As partes de código de gravação e filtragem estão agora em outra pasta chamada controllers que segue o modelo MVC e que foi visto uma implementação similar quando vimos a parte de componentes anteriormente. Foi criado o arquivo ClassesController.ts e codificado um teste para página de filtro utilizando o método GET:

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/classcontrolles.png" />
    <br>
</h1>

Para testar no Insomnia, crie o 3 parâmetros utilizados (week_day, subject, time) com o auxílio da interface e clique Enviar
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/tresparams.png" />
    <br>
</h1>


Se retornar o valor dos minutos no terminal está tudo OK:
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/minutes.png" />
    <br>
</h1>


Adicionando a filtragem e retornando um objeto JSON:
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/filtragemJSON.png" />
    <br>
</h1>


Testando no Insomnia:
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/filterInsomnia.png" />
    <br>
</h1>


Para finalizar, adicionamos o pacote cors, que permite que aplicações em endereços diferentes, no caso,  nosso Front-End esteja no localhost:3000 e seja acessado pela API Back End em localhost:3333. Por padrão, só permite o acesso de aplicações no mesmo endereço a API.
```bash
yarn add cors
```
<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/addcors.png" />
    <br>
</h1>

## ROTA LISTAR O TOTAL DE CONEXÕES REALIZADAS 

Para a criação de uma conexão, foi criado um arquivo ConnectionControler.ts e adicionadas duas funções, uma GET e outra. A POST somente insere o id do usuário na tabela connections: 

### GET

**'/connections'**: Retorna o total de possíveis conexões já realizadas pela plataforma.

- Parâmetros: Nenhum.
- Retorno: Um objeto com o total de conexões, no seguinte formato:

```bash
  {
    total: NUMBER - Total de conexões realizadas.
  }
```

### POST

**'/connections'**: Cria uma nova conexão.

- Corpo: O identificador do professor a ser contactado:

```bash
  {
    user_id: STRING - Identificador do professor
  }
```
- Retorno: Código 201 de criação efetuada.

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/createconnections.png" />
    <br>
</h1>

E para pegarmos as conexões fazemos um count de todos os registros da tabela. No retorno é feito uma desestruturação dos da primeira posição do array:

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/listconnections.png" />
    <br>
</h1>

No arquivo routes.ts incluímos a importação do ConnectionsController e adicionamos as novas rotas GET e outra POST.

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/routesconnections.png" />
    <br>
</h1>

Foi feita uma correção no arquivo de criação da tabela connections no campo da data de criação do registro:

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/timestamp.png" />
    <br>
</h1>

No Insomnia foi dado uma dica de sempre criarmo pastas para separarmos em categorias os nossos Requests:

<h1 align="center">
    <img alt="Missing Image" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/insomniafolders.png" />
    <br>
</h1>

Foi criado a Request GET para recuperar o número de conexões e no POST de criação precisou criar no corpo da Requisição o parâmetro user_id.

- [Voltar a Aula 1](https://github.com/shyoutarou/NLW2_Web/wiki/Aula-1-(03-08-2020):-Proffy-Web)
- [Continuar a Aula 3](https://github.com/shyoutarou/NLW2_Web/wiki/Aula-3-(05-08-2020):-Front-e-Back-End-Web)
- [Voltar a Wiki Home](https://github.com/shyoutarou/NLW2_Web/wiki)
    