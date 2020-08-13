# Aula 2: Proffy-Server

[Voltar as README.md](README.md)

## FLUXO DESENVOLVIMENTO REACT

� explicado o fluxo normal de aplica��es, as fun��es Front e Back-End. A diferen�a do modelo MVC (carregava tudo a cada Refresh) e o modelo SPA (Single Page Application). Explicado que est� se utilizando o Node.js pois permite utilizar a mesma linguagem, Typescript e React, para escrever o Front o Back e o mobile.

<h1 align="center">
    <img alt="Create Project" src=".github/fluxo_react.png" />
    <br>
</h1>

Em aplicativos mobile (Kotlin, Swift, React, Flutter), n�o entendem HTML (body, table, etc.) para facilitar o consumo de dados por este tipo de dispositivos que tornou popular as API REST, pois retornam os dados em formato JSON e a tecnologia do Front-End que constr�i o HTML, ele n�o retorna mais do servidor (modelo MVC). 

### API (Application Programming Interface)

O acr�nimo API que prov�m do ingl�s trata-se de um conjunto de rotinas e padr�es estabelecidos e documentados por uma aplica��o A, para que outras aplica��es consigam utilizar as funcionalidades desta aplica��o A, sem precisar conhecer detalhes da implementa��o do software.

Desta forma, entendemos que as APIs permitem uma interoperabilidade entre aplica��es. Em outras palavras, a comunica��o entre aplica��es e entre os usu�rios.

### REST (Representational State Transfer)

REST trata-se de uma abstra��o da arquitetura da Web. Resumidamente, o REST consiste em princ�pios/regras/constraints que, quando seguidas, permitem a cria��o de um projeto com interfaces bem definidas. Desta forma, permitindo, por exemplo, que aplica��es se comuniquem.

O HTTP � o principal protocolo de comunica��o para sistemas Web, existente h� mais de 20 anos, e em todo esse tempo sofreu algumas atualiza��es. Nos anos 2000, um dos principais autores do protocolo HTTP, Roy Fielding, sugeriu, dentre outras coisas, o uso de novos m�todos HTTP. Estes m�todos visavam resolver problemas relacionados a sem�ntica quando requisi��es HTTP eram feitas.

Estas sugest�es permitiram o uso do HTTP de uma forma muito mais pr�xima da nossa realidade, dando sentido �s requisi��es HTTP. Para melhor compreens�o, veja os exemplos abaixo (requisi��es em formatos fict�cios):

- **GET** http://www.meusite.com/usuarios
- **DELETE** http://www.meusite.com/usuarios/jackson
- **POST** http://www.meusite.com/usuarios �data {nome: joaquim}

Pela simples leitura  � poss�vel inferir que no primeiro caso estamos pegando (GET) todos os usu�rios do site, ou seja, teremos uma lista de todos os usu�rios que est�o cadastrados no sistema/site. J�, no segundo caso, estamos apagando (DELETE) o usu�rio Jackson. No �ltimo exemplo, estamos usando o m�todo POST, em que percebemos o envio de dados extras para cadastrar um novo usu�rio.

Veja o qu�o simples ficou expressar o que desejamos realizar ao acessar um determinado endere�o, usando verbos espec�ficos para URLs espec�ficas e usando dados padronizados, quando necess�rio.

Estes princ�pios apresentados fazem parte do REST! Em outras palavras, nesses exemplos, temos: uma representa��o padronizada, verbos e m�todos usados, bem como, URLs.

Existe uma certa confus�o quanto aos termos REST e RESTful. Entretanto, ambos representam os mesmo princ�pios. A diferen�a � apenas gramatical. Em outras palavras, sistemas que utilizam os princ�pios REST s�o chamados de RESTful.
- **REST**: conjunto de princ�pios de arquitetura
- **RESTful**: capacidade de determinado sistema aplicar os princ�pios de REST.

Iremos agora criar uma Web API REST. Crie uma pasta server, abra o PowerShell. Para iniciar um projeto, entre na pasta onde o projeto ser� criado e d� o comando:

```bash
yarn init -y
```

O par�metro �-y� serve para pular as perguntas iniciais como nome e autor do projeto. Ap�s isso abra o VS Code e foi criado a depend�ncias da aplica��o (packages.json)

[Voltar as README.md](README.md)
    