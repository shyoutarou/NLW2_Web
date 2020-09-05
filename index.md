# Aula 1 (03/08/2020): Proffy-Web


### Videos Youtube

Trilha OmniStack
- [Trilha OmniStack Aula 1](https://www.youtube.com/watch?v=AC7fGkJRYNw)
- [Trilha OmniStack Aula 2](https://www.youtube.com/watch?v=TjUO72eAtog)
- [Trilha OmniStack Aula 3](https://www.youtube.com/watch?v=ytVJxv0OPEA)

### Wikis

Resumo dos três primeiros dias da NLW da Rocketseat.

[Wiki Home](https://github.com/shyoutarou/NLW2_Web/wiki)
1. [Aula 1](https://github.com/shyoutarou/NLW2_Web/wiki/Aula-1-(03-08-2020):-Proffy-Web)
2. [Aula 2](https://github.com/shyoutarou/NLW2_Web/wiki/Aula-2-(04-08-2020):-Proffy-Server)
3. [Aula 3](https://github.com/shyoutarou/NLW2_Web/wiki/Aula-3-(05-08-2020):-Front-e-Back-End-Web)

### GitHub Pages
 
[GitHub Pages: Mobile](https://shyoutarou.github.io/NLW2_Mobile/)

## 📌 Index
- [INSTALAÇÕES](#instalações-node-e-npm)
    - [Windows](#windows)
    - [Shell](#escolhido-o-shell)
    - [NPM](#npm)
    - [Chocolatey](#chocolatey-opcional)
    - [YARN](#yarn-1-opcional)
    - [VS-Code](#visual-studio-code)
- [CRIAR-PROJETO](#criar-projeto)

## INSTALAÇÕES - Node E NPM 

O primeiro passo para podermos utilizar a Omnistack (Node.js, ReactJS e React Native) é instalar o Node.js, que vem acompanhado do NPM. Para visualizar o site do Node.js e suas versões:
    * https://nodejs.org/en/

Como você já deve ter visto, na página principal do Node são apresentadas duas versões: LTS e Current.

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/node_download.png" />
    <br>
</h1>

A primeira se refere à versão do Node que possui Long Term Support (LTS), são as mais confiáveis e é a que recomendamos utilizar na NLW. Já a segunda se refere à versão do Node mais atual e experimental, o que não é recomendada para desenvolvimento ainda.

Escolhida a versão LTS do Node, precisamos decidir o método de instalação. É importante ressaltar que apesar de na tela inicial do Node.js eles recomendarem a forma de instalação direta (famosa janela que só clicamos no Next), iremos utilizar nesse guia os gerenciadores de pacote (exceto Linux). 

Não só pelo fato de facilitar possíveis desinstalações e atualizações do Node, mas também por serem muito úteis para trabalhar com diversos outros pacotes. Pronto dev, agora que já sabemos que iremos instalar a versão LTS do Node.js utilizando um gerenciador de pacote, bora para o passo-a-passo de cada sistema operacional.

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/node_versao.png" />
    <br>
</h1>

### Windows

Para o Windows utilizaremos o gerenciador de pacotes [Chocolatey] (https://chocolatey.org/), porém antes dos passos de instalação vamos falar brevemente sobre qual shell você deve usar.
- **CMD**: também conhecido como Command Prompt, ele é um dos shells mais antigos da atualidade (foi construído para ser compatível com o MS-DOS) e, apesar da sua fama, hoje em dia tem sido cada vez menos utilizado.
- **Powershell**: novo shell apresentado pela Microsoft por volta de 2005, ele apresenta diversas melhorias em relação ao CMD, tornando-o popular atualmente e consequemente a nossa escolha para a NLW#02.

### Escolhido o shell:

Busque no campo de busca do Windows por Windows Powershell, clique com o botão direito em cima do programa e escolha a opção “Executar como administrador”. O Powershell trabalha com um esquema de autorizações (conhecido como `Execution Policy`) para execução de scripts e, por isso, precisamos verificar se o presente no sistema está compatível com o que o Chocolatey precisa. Execute o seguinte comando:

```bash
> Get-ExecutionPolicy
```
Caso ele retorne `Restricted`, execute o comando:

```bash
> Set-ExecutionPolicy RemoteSigned
```

E escolha a opção `[A] Sim para Todos. Caso o comando acima apresente erro, tente usar:

```bash
> Set-ExecutionPolicy Bypass -Scope Process
```

Verifique se alteração de permissão ocorreu com sucesso executando novamente o comando:

```bash
> Get-ExecutionPolicy
```

Gerenciador de pacotes vs Gerenciador de dependências
- Um gerenciador de pacotes é uma ferramenta utilizada para instalação, remoção e atualização de programas/pacotes ou software.
- Um gerenciador de dependências é uma ferramenta que permite registrar dependências externas (bibliotecas) que serão utilizadas por nossa aplicação.

### NPM

O npm é um projeto Open Source criado em 2009 com objetivo de facilitar a troca de código JavaScript, sendo usado como gerenciador de pacotes padrão do Node.js. Ao falarmos de npm podemos estar nos referindo a um destes itens:
- O repositório aberto onde ficam armazenados os pacotes
- Um cliente que permite o envio/download de código do repositório
- Um site onde é possível pesquisar informações dos pacotes e ver a documentação do npm.

Também existe uma empresa chamada NPM, Inc., que é a mantenedora do repositório aberto de pacotes e coordena o desenvolvimento do npm. Ela também trabalha no desenvolvimento de soluções pagas focadas no mercado empresarial.

O npm utiliza um arquivo de configuração chamado package.json. Este arquivo é o responsável pela configuração do projeto como o nome,a versão, atalhos de comandos que npm executa, etc. Uma das funções mais importantes é a de armazenar uma lista de dependências que o projeto irá utilizar – se quiser saber mais informações sobre este arquivo e de como realizar a configuração da sua aplicação, clique aqui. Com este arquivo e o cliente do npm é possível instalar todas as dependências com apenas um comando, sendo muito útil quando você precisa executar um projeto em um novo ambiente ou durante a execução de ferramentas de integração contínua.

Mas, e quando o projeto é aquele aerolito monolito, com tantas dependências que você até cogita ver um episódio da sua série favorita enquanto instala? É aí que o Yarn se torna atrativo em comparação ao npm.
Yarn: uma história

Em outubro de 2016, o Facebook lançou o Yarn em conjunto com o Google, Exponent e Tilde, com o objetivo de tornar o processo de instalação das dependências não só mais rápido, mas também mais seguro.

No Facebook, muitos dos projetos que dependiam do npm apresentavam certos problemas, como:
- Demora no tempo de instalação
- Dependência que não possuíam a mesma versão em diversas máquinas
- A forma que o npm executa códigos das dependências de forma automática

Após tentar algumas soluções alternativas para resolver estas questões, alguns engenheiros começaram a trabalhar em um cliente novo, buscando resolver estes problemas a partir da raiz.

Até o lançamento do Yarn, o npm realizava as instalações das dependências de forma não determinística, ou seja, a estrutura da pasta node_modules poderia ser diferente de uma pessoa para outra, causando aquele velho problema do “Mas na minha máquina funciona!”. Para contornar este problema, o Yarn faz uso de arquivos de lock (yarn.lock) e de um algoritmo de instalação determinístico. No arquivo de lock a versão exata da dependência é armazenada, garantindo que todas as instalações são iguais. Apesar de o npm já possuir uma opção para gerar arquivos de lock, o Yarn gera seu arquivo de lock automaticamente. Abaixo o arquivo de lock gerado automaticamente pelo npm e o yarn.

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/npm_lock.png" />
    <br>
</h1>

E no Yarn:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/yarn_lock.png" />
    <br>
</h1>

Para acelerar a instalação, o Yarn consulta um diretório de cache global, que é usado tanto para evitar que o download seja feito, quanto para permitir a instalação enquanto estiver offline, o que não era possível realizar com o npm.

O processo de instalação através do Yarn é feito em três etapas, sendo elas:
- Busca recursiva de dependências no repositório do npm
- Procura no cache global e, caso a dependência ainda não tenha sido baixada, salva uma cópia no cache global
- Conecta as dependências ao copiá-las do cache global para a pasta node_modules local

Desta forma, o Yarn consegue maximizar o uso dos recursos disponíveis e reduzir o tempo de instalação. Em diversos testes de performance realizados após o lançamento do Yarn, ele mostrou-se muito mais rápido que o npm.

Em março de 2017, após um ano e meio de desenvolvimento, foi lançada versão 5 do npm, trazendo diversas melhorias de performance semelhantes às presentes no Yarn. Nesta versão, o npm já cria um arquivo de lock chamado package-lock.json automaticamente; é capaz de instalar dependências a partir do cache; realiza validações de hashes SHA-512 e a velocidade de instalação aumentou cerca de 5x comparada com a anterior. Se você já instalou a versão 8 do Node.js, ela já conta com o npm 5 instalado por padrão.

O melhor de tudo é que tanto o npm quanto o Yarn utilizam o package.json, dando a você a escolha sobre qual melhor se adequa à sua necessidade. Na Umbler não poderia ser diferente, não é mesmo?

Se você usa o npm, não é necessário mais nada. O comando npm install vai ser executado durante o deploy da sua aplicação. Lembrando que se você já usa o Node.js 8, é indicado que você adicione o arquivo package-lock.json no versionamento de código para aproveitar todos os benefícios da nova versão do npm.
Já se você usa o Yarn, é só ter certeza que o arquivo yarn.lock foi adicionado no controle de versão que, durante o deploy, será identificado o uso do Yarn e o comando yarn install será executado.

### Chocolatey Opcional

O Chocolatey entra na categoria de gerenciador de pacotes, mais precisamente para sistemas Windows. Por exemplo: caso tente instalar uma ferramenta que possui dependências, tal como o VSCode possui do DotNet, o Chocolatey vai resolver tudo para você! Ele vai lá, baixa a versão correta do DotNet, instala, testa, depois baixa o VSCode, instala, configura e testa para ver se a instalação e configuração ocorreram com sucesso.

Alterada a permissão, basta instalar o Chocolatey com o comando:

```bash
> Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```
<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/choco_install.png" />
    <br>
</h1>

Após o fim da instalação, feche e abra o Powershell como administrador novamente e execute:

```bash
> choco –v
```

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/choco_versao.png" />
    <br>
</h1>

Caso ele retorne a versão do Chocolatey, a instalação foi um sucesso. Para finalizar, basta instalar a versão LTS mais recente do Node com o seguinte comando:
cinst nodejs-lts

E escolha a opção `[A]ll - yes to all`. Após o fim da instalação, feche e abra o Powershell como administrador novamente e execute:

```bash
> node –v
```
<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/node_power_versao.png" />
    <br>
</h1>

Caso retorne as versões do Node e npm, sua instalação foi um sucesso. Para atualizar o NodeJS, basta ir ao nodejs.org e fazer o download do instalador mais recente (MSI). 

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/node_update.png" />
    <br>
</h1>

Para atualizar os pacotes instalados:
```bash
> npm cache clean -f
> npm update npm -g
```
### YARN 1 (Opcional)

Para instalar o Yarn 1 no Windows com o choco siga os seguintes passos, execute o comando no Powershell (como admin):
```bash
> cinst yarn
```

E escolha a opção `[A]ll - yes to all`.  Feche e abra o terminal novamente, em seguida rode o comando:
```bash
> yarn --version
```
<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/yarn_version.png" />
    <br>
</h1>

Caso retorne a versão do Yarn (acima de 1.0, abaixo de 2.0), a instalação ocorreu com sucesso.

EXPO

O Expo é uma ferramenta utilizada no desenvolvimento mobile com React Native que permite o fácil acesso às API’s nativas do dispositivo sem precisar instalar qualquer dependência ou alterar código nativo. Apesar de cumprir esse papel muito bem, o Expo possui algumas desvantagens, principalmente para programadores que estão migrando de um estágio iniciante para intermediário com React Native e por isso vamos analisar todas vantagens do Expo e pontos negativos nesse post.

Quando iniciamos no desenvolvimento mobile percebemos que o número de API’s e recursos nativos que podemos controlar através da nossa aplicação é gigante, e muitas vezes não nos recordamos de todas opções que temos disponíveis. O Expo, por sua vez, oferece grande parte desses recursos de forma nativa e integrada e, por exemplo, você tem acesso à recursos como câmera, microfone, player de música, entre outros, de forma muito simples utilizando essa ferramenta.

Apesar de todos esses benefícios, o grande ponto do Expo para quem está iniciando é que para começar a desenvolver suas aplicações mobile com React Native você não precisará instalar a SDK do Android ou o XCode para Mac, isso porque o Expo possui um aplicativo móvel instalável pelas lojas do Android/iOS que contém todo código nativo necessário pelo React Native para iniciar sua aplicação e, dessa forma, a única alteração em código que você faz é em Javascript.

O ponto destacado acima, na minha opinião, tem dois lados. A vantagem é que nesse formato o desenvolvedor inicia muito rápido e em poucos minutos está criando sua aplicação, toda parte complicada foi abstraída. A desvantagem está em exatamente pular essas etapas pois desconhecendo todo processo de instalação da SDK do Android ou XCode para iOS vai te limitar MUITO futuramente para lidar com processos de atualização e build das aplicações. Utilizar o Expo quando:

- Você está testando o React Native e quer entender como ele funciona;
- Você não tem interesse em publicar e manter aplicações mobile complexas (apenas criar apps simples).

Para instalar o Expo é bem simples e o passo é o mesmo nos 3 sistemas operacionais.  Com o Node e Yarn instalados, abra o terminal (no Windows, sem ser como admin) e execute:
```bash
> yarn global add expo-cli
```

Caso você prefira utilizar o npm, basta executar:
```bash
> npm install expo-cli --global
```

Para verificar se a instalação ocorreu com sucesso, execute:
```bash
> expo –version
```

### Visual Studio Code

Para instalar o editor de texto Visual Studio Code em qualquer um dos 3 sistemas operacionais, basta [acessar o site](https://code.visualstudio.com/), baixar e rodar o executável. Com a instalação finalizada, abra o programa. 

Para finalizar, vamos adicionar algumas configurações no Visual Studio Code. Para isso, basta pressionar `Ctrl + Shift + P` e escolher a opção `Open Settings (JSON). Na janela que foi aberta, adicione as configurações abaixo:

É preciso tomar alguns cuidados ao realizar essas alterações. Verifique se a configuração adicionada já não existe no arquivo. Se sim, apenas atualize o valor.  Verifique também se a todas as linhas de configuração, exceto a última, terminam com vírgula, para não gerar erro.  Por fim, caso queira substituir completamente a sua configuração pela abaixo, envolva com chaves `{}` todo o código disponibilizado.

```bash
  "workbench.startupEditor": "newUntitledFile",
  "explorer.compactFolders": false,
  "editor.renderLineHighlight": "gutter",
  "workbench.editor.labelFormat": "short",
  "extensions.ignoreRecommendations": true,
  "javascript.updateImportsOnFileMove.enabled": "never",
  "typescript.updateImportsOnFileMove.enabled": "never",
  "breadcrumbs.enabled": true,
  "editor.parameterHints.enabled": false,
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,
  "emmet.syntaxProfiles": { "javascript": "jsx" },
  "emmet.includeLanguages": { "javascript": "javascriptreact" },
  "javascript.suggest.autoImports": true,
  "typescript.suggest.autoImports": true,
  "workbench.colorTheme": "Omni"
  "workbench.iconTheme": "material-icon-theme",
```

## CRIAR PROJETO

Depois do Node.js ou Yarn instalado. Execute um dos seguintes comandos:
    * yarn create react-app web --template typescript
    * npx create-react-app web --template typescript

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/create_project.png" />
    <br>
</h1>

Esse comando, na minha máquina, durou uns 10 min... Na demonstração demorava 22s. Dependendo da máquina e velocidade de download dos pacotes. Todos os comando yarn podem ser substituídos por um correspondente npm pois o yarn utiliza do npm para funcionar.

Abra o VS Code e habilite o Toggle Terminal (Crtl + ‘ )  

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/abra_terminal.png" />
    <br>
</h1>

Inicie o yarn com ou npm:
```bash
> yarn start
```
OU
```bash
> npm start
```

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/yarn_start.png" />
    <br>
</h1>

Caso o projeto tenha sido clonado do GitHub está sem o node_modulos e precisa instalá-los com:
```bash
> npm install
```

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/npm_install.png" />
    <br>
</h1>

Vai pedir permissão de acesso pois estará abrindo a aplicação no localhost :3000

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/permissao.png" />
    <br>
</h1>

E já inicia o aplicativo

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/react_App.png" />
    <br>
</h1>

Para teste remotamente no celular você pode consultar o IPv4 da máquina que está executando indo na linha de comando e digitando:

```bash
> ipconfig
```
<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/ip_config.png" />
    <br>
</h1>


E no navegador do celular, se estiverem conectados na mesma rede Wifi, digite na URL do navegador o IP e a porta:
```bash
> http://192.168.X.XXX:3000
```

Do template criado pelo React foram apagados os seguintes arquivos do diretório pois não seria utilizados no curso:
- README.md: Arquivo de informações de descrição do projeto no formato Markdown (md) utilizado pelo Git.
- Scr>App.css: Arquivo de estilo de página local (vai ser criado estilo global)
- Scr>index.css: Arquivo de estilo de página local (vai ser criado estilo global)
- Scr>App.test.tsx: Arquivo de Testes.
- Scr>Logo.svg: Image de logo do React.
- Scr>serviceWorker.ts: Usado quando a aplicação é um PWA (Progressive Web App)
- Scr>setupTests.ts: Arquivo de Testes.

Depois da exclusão ocorre alguns erros de referências, mas e só excluí-los e temos uma aplicação limpa para desenvolvimento. Analisando um pouco o arquivo packages.json:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/packagesjson.png" />
    <br>
</h1>

- **BabelJS** é um transpiler de JavaScript que transpila novos recursos em padrões antigos. Com isso, os recursos podem ser executados em navegadores antigos e novos, sem complicações. Babeljs vem com uma ampla gama de recursos na forma de plug-ins, predefinições, polyfills, etc. Resumindo, Babeljs é um conjunto de ferramentas que possui todas as ferramentas necessárias disponíveis com ele e que ajuda os desenvolvedores a usar todos os recursos atuais disponíveis no ECMA Script e ainda não se preocupam como será suportado nos navegadores.
- **Webpack** é um empacotador de módulo que empacota todos os módulos com dependências - js, estilos, imagens, etc. em ativos estáticos .js, .css, .jpg, .png, etc. Webpack vem com predefinições que ajudam na compilação na forma necessária. Por exemplo, a predefinição de reação que ajuda a obter a saída final na forma de reação, a predefinição es2015 ou env que ajuda a compilar o código em ES5 ou 6 ou 7, etc.

As duas partes principal do projeto são a pasta public e src. No public encontra-se apenas o arquivo index.html foi deixada da seguinte forma:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/public_src.png" />
    <br>
</h1>

Apesar de não ter nenhum componente na tag:

```bash
> <div id="root"></div>
```

O React cuida disso, renderizando os componentes a partir do Javascript em tempo de execução. Se o Javascript estiver desabilitado no navegador não aparecerá nada. O arquivo que faz a interface fica no src e se chama index.tsx. O React.StricMode injeta HTML dentro do elemento encontrado pelo método getElement(“root”).

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/getelement.png" />
    <br>
</h1>

Nos arquivos extensão TSX (Typescript com XML) coloca-se as funções que irá renderizar os componentes. Um componente é basicamente uma função que retorna/injeta HTML. A sintaxe utilizada é chamada de JSX (Javascript com XML) e é neste arquivo onde ficará os componentes que poderá ser utilizado em várias partes do código.  Note que o nome da função deve estar em maiúscula. Note que se o nome da função fosse em minúscula, o React entenderia como se fosse tag HTML.E de que sempre devemos importar a biblioteca:

```bash
import React from 'react';
```
<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/importreact.png" />
    <br>
</h1>

Crie uma pasta assets dentro de src e coloque a pasta imagens fornecida pelo treinamento. Criado pelo W3C o SVG (Scalable Vectorial Graphics) é nada mais que um arquivo XML que contém tags especificas para gerar uma imagem vetorizada na sua aplicação. Com tags bastante simples você consegue gerar imagens de alta qualidade vetorizadas que por mais que você altere as proporções na tela essa não perderá qualidade, por ser uma imagem vetorizada.

Podendo ser apenas imagem fixa ou animação, o SVG pode ser trabalhado junto ao JavaScript para manipular eventos de imagem. O formato SVG permite três tipos de objetos gráficos, sendo eles imagens, textos ou formas geométricas vetoriais. Crie também uma pasta style e um arquivo global.css. O height 100vh corresponde a sempre 100% da tela.

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/globalstyle.png" />
    <br>
</h1>

Para associar fontes ao projeto só precisa ir no site do Google Fonts(https://fonts.google.com/)

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/archivofont.png" />
    <br>
</h1>

Depois de selecionar as fontes abaixo, clicamos em Embedd e copiamos o link e colamos em public/indez.html:
- archivo Regular 400
- archivo Bold 700
- poppins Regular 400

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/embeddedfonts.png" />
    <br>
</h1>

Depois de incluirmos as fontes podemos definir o tamanho delas responsivo com o unidade de medida rem: 

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/fontsstyle.png" />
    <br>
</h1>

O 1.6 significa que a fonte desses elementos será 60% maior do que o tamanho padrão da fonte (16px) para dar mais destaque. Esse ajuste é criado, pois como no início do style havia sido definido font-size de 60% (16 x 0.60 = 9.6px). E o rem é utilizado para caso futuramente precisasse aumentar a fonte, só será necessário alterar o valor do root. 

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/remsize.png" />
    <br>
</h1>

Próximo passo, criamos uma página Landing, e a importamos na página App.tsx, substituindo o html estático com Hello Word e o botão que havia.

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/landingpage.png" />
    <br>
</h1>

Repare que a referência de arquivos dentro da aplicação deve estar sempre precedido por ./ ou ../ senão o React confunde com pacotes e não consegue encontrar os arquivos.

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/referencefiles.png" />
    <br>
</h1>


É possível acelerar a codificação de páginas agora com a sintaxe abreviada Emmet que utiliza com padrões de sintaxe do css para gera o id, class, e outros atributos como uma engenharia reversa:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/emmetshort.png" />
    <br>
</h1>


Essa habilidade foi ativada no início da aula no arquivo settings.json com os parâmetros:
- "emmet.syntaxProfiles": { "javascript": "jsx" },
- "emmet.includeLanguages": { "javascript": "javascriptreact" },

	Se essas configurações não tiverem ativadas você pode ir por Workspace Settings

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/enableemett.png" />
    <br>
</h1>

Repare que as classes são definidas pelo atributo classname e não mais somente com o class. Isso por que o class é palavra reservada no React. Agora para navegar entre páginas temos que instalar:
```bash
yarn add react-router-dom OU npm install react-router-dom
```
<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/addrouterdom.png" />
    <br>
</h1>

Incluímos um arquivo routes.tsx para configurar as rotas e na hora de importar emite um aviso para instalar outro pacote, 

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/routestsx.png" />
    <br>
</h1>

Colocamos o parâmetro –D para indicar que é uma dependência de desenvolvimento e não vai ser utilizada na produção
```bash
yarn add @types/react-router-dom –D  OU  npm install @types/react-router-dom -D
```

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/addtypesrouterdom.png" />
    <br>
</h1>

Depois de instalarmos esse pacote aparece o Inteligesense quando digitamos:

O código da função Routes ficará assim:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/routesinitial.png" />
    <br>
</h1>

Repare na primeira rota que navega para raiz tem uma propriedade exact. Isso é para diferenciar das outras rotas que também contém a barra para frente, então a página inicial apareceria em todas as outras páginas. Se alterarmos agora a página inicial App.tsx e a página Landing.tsx as rotas já estarão funcionando.

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/routesexact.png" />
    <br>
</h1>

Porém de formos em Network do browser podemos ver que a cada navegação está havendo o Refresh e carregamento da página inteira (css, scripts) e não queremos isso.

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/routesreflesh.png" />
    <br>
</h1>

Para resolver isso temos que importar de react-router-dom o componente Link e substitui-lo pelas anchor tags do HTML.

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/routesLink.png" />
    <br>
</h1>

E invés de href fica to:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/routeshref.png" />
    <br>
</h1>

Ao salvar e testar não está recarregando mais nada ao mudar de página. Esse é o conceito de SPA (Single Page Application). Não tem que ficar recarregando recursos compartilhados da mesma aplicação.

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/noreflesh.png" />
    <br>
</h1>

Um recurso interessante que foi ativado no settings.json no começo dessa aula com os parâmetros:
"javascript.suggest.autoImports": true,
"typescript.suggest.autoImports": true,

Isso ativa a possibilidade de importar as referência de outros objetos enquanto estamos digitando ou clicando na palavra e teclando Ctrl + .(ponto)

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/ctrlponto.png" />
    <br>
</h1>

Para criar um componente é o mesmo processo de criar as páginas:
- Criar a pasta componentes
- Cria-se um folder com o nome do componente
- Cria-se um arquivo index.tsx
- Cria-se um arquivo de estilo local style.css
- Faz as importações de import React from 'react'; import './styles.css';

Uma das diferenças é a criação personalizada de atributos que é feita adicionando uma interface, onde define-se o nome e tipo do atributo, como a seguir:
interface PageHeaderProps 

```bash
interface PageHeaderProps 
{
    title: string;
}

```

Se fosse permitido nulos no parâmetro title teria que colocar um sinal de interrogação após o nome (title?). Além disso, é necessário transformar a função em um objeto constante ficando como abaixo:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/objetocontatne.png" />
    <br>
</h1>

O React.FC é uma abreviação de React.FuncionalComponent. As duas formas são aceitas, quando você passa a interface PageHeaderProps está declarando as propriedades que esse componente pode aceitar. Sempre quando se deseja inserir um objeto Javascript dentro do HTML coloca-se em chaves {props} ou {logimg}. O props refere-se a construção lambda, essa denominação é definida pelo programador.

O props.children refere-se a um propriedade que todos os componentes possuem. E significa que tudo que você colocar dentro de um componente será considerado como “children” e será renderizado se você chamar props.children.Na página TeacherList ficaria assim:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/children.png" />
    <br>
</h1>


<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/childrenfilters.png" />
    <br>
</h1>


Para a listagem dos professores foi criado um componente TeacherItem e feita a estilização como abaixo:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/teacherliststyle.png" />
    <br>
</h1>

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/itemList.png" />
    <br>
</h1>


Aula 2 (04/08/2020): Proffy Server

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


Aula 3 (05/08/2020): Front e Back End Web

- [Voltar a Aula 1](Aula01.md)
- [Voltar a Aula 2](Aula02.md)
- [Voltar as README.md](README.md)

## 📌 Index
- [CADASTRO](#cadastro)
    - [TextArea e Caixa de Seleção](#textarea-e-caixa-de-seleção)
- [CONCEITO DE ESTADOS](#conceito-de-estados)
- [INTEGRANDO BACK E FRONT](#integrando-back-e-front)
    - [### GET de Dados](#get-de-dados)
    - [POST no Formulário](#post-no-formulario)
    - [GET Lista de Classes](#get-lista-de-classes)

## CADASTRO

Voltamos ao projeto Front-End, na página Formulário de Cadastro da classe que ficou faltando da aula 1. Como já foi mencionado, é possível criar uma propriedade nula no componente.

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/cadastronull.png" />
    <br>
</h1>

Para renderizar condicionalmente essa informa��es no componente PageHeader temos duas sintaxe poss�veis:
- **Tern�rio**: {propriedade.description? <p>{propriedade.description}</p> : null}
- **Javacript**: {propriedade.description && <p>{propriedade.description}</p> }

Crie na pasta componentes uma pasta input com os arquivos padr�o index.tsx e styles.css. Para extender todos atributos de um componente padr�o para o seu componente tem que aplicar heran�a (extends) da classe InutHTMLAttributes do React, como abaixo:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/HTMLAttributes.png" />
    <br>
</h1>

Depois recorte e cole a css do input que estava no css da p�gina TeacheList no css desse componente.

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/TeacheListstyle.png" />
    <br>
</h1>

Importando o componente e substituindo os input da página TeacherList.tsx:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/TeacheListform.png" />
    <br>
</h1>

Testando a herança do componente:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/filtertest.png" />
    <br>
</h1>

### TextArea e Caixa de Seleção

	Basicamente, esses dois componentes é o mesmo procedimento do Input, entãom podemos copiar toda a pasta e arquivos e renomeie para o correto. Para renomear múltiplas ocorrências você pode utilizar os atalhos:
- **Crtl + D**: Para ir selecionando uma a uma as ocorrências de um texto selecionado.
- **Crtl + Shift + L**: Para selecionar todas ocorrências de um texto selecionado.

O TextArea teve pequenas mudanças de estilo em relação ao componente Input.

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/textararcompo.png" />
    <br>
</h1>

A caixa de seleção poderia ser estilizada usando uma biblioteca externa como o React-Select (https://react-select.com/home):

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/reactselect.png" />
    <br>
</h1>

Para criar os items da caixa de seleção siga o exemplo abaixo no arquivo index.tsx do componente Select

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/combobox.png" />
    <br>
</h1>

E na págima TeacherForm.tsx:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/comboboxitens.png" />
    <br>
</h1>

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/comboboxitenstest.png" />
    <br>
</h1>

Porém no Inspect >> Console indica que houve erro:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/comboboxerror.png" />
    <br>
</h1>

Isso por que não colocamos o key, que deve ser único para o primeiro elemento da lista. Ajuda o React a identificar os elementos na hora de listar na tela. Foi incluído também um option default.

```bash
const Select: React.FC<SelectProps> = ({label, name, options, ...rest}) => 
{  
    const inputRef = useRef(null);

    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} {...rest}> 
                <option value="" disabled hidden >
                    Selecione um opção
                </option>
                {options.map(option => {
                    return <option key={option.id} value={option.id}>{option.value}</option>
                })}
            </select>
        </div>
    )
}

```

## CONCEITO DE ESTADOS

Sempre que precisar manipular um ação dentro de um componente cria-se um estado para manipular o valor. Com o React, diferente do Javascript, estamos criando uma interface declarativa. Principios React no [site](https://reactjs.org/):


- **Declarativo**: O React facilita a criação de UIs interativas. Crie visualizações simples para cada estado do aplicativo e o React atualizará e renderizará com eficiência os componentes certos quando os dados forem alterados. Exibições declarativas tornam seu código mais previsível e mais fácil de depurar.

- **Baseado em componentes**: Crie componentes encapsulados que gerenciam seu próprio estado e os componha para criar UIs complexas. Como a lógica do componente é escrita em JavaScript, em vez de modelos, você pode passar facilmente dados ricos pelo aplicativo e manter o estado fora do DOM.

-  **Aprenda uma vez**, escreva em qualquer lugar: Não fazemos suposições sobre o restante da sua pilha de tecnologia, para que você possa desenvolver novos recursos no React sem reescrever o código existente. O React também pode renderizar no servidor usando o Nó e ativar aplicativos móveis usando o React Native.


No Javascript, para colocar elementos iterativos repetitivos, tinha que inserir HTML (Com algum InnerHTML) para obter o seguinte resultado:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/horarios.png" />
    <br>
</h1>

No React, só precisamos iterar por um array. Porém, o React não fará isso automaticamente por padrão, mas pelo conceito de estados:

```bash
const scheduleItems = [
	{week_day: 0, from: "8:00 AM", to: "16:00 PM"},
    {week_day: 1, from: "10:00 AM", to: "6:00 PM"},
]
```
Repare que sempre que usarmos map na tela, tem que setar a propriedade key. 

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/propkey.png" />
    <br>
</h1>

Sempre que adicionarmos novos itens, um problema de key no mapa acontece, pois o índice inicial 0 é repetitdo para cada elemento incluso. 

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/comboerroragain.png" />
    <br>
</h1>

Para resolver isso, setamos o key para o index, que é incremental a cada elemento criado:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/keyindex.png" />
    <br>
</h1>


Para ativar o estados no React, precisamos importar o módulo, e alterar o array para que aceite os estados, assim:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/usestate.png" />
    <br>
</h1>

As variáveis depois que criadas pelo React pelo conceito de estado são imutáveis, por isso foi colocado este formato:

```bash
{ week_day: 0, from: '', to: ''}
```

A função setScheduleItems que o usa para copiar o array:
- A sintaxe Javascript de propagação (Spread) permite que um objeto iterável, como um array ou string, seja expandida em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para literais de array) sejam esperados ou uma expressão de objeto seja expandida em locais onde zero ou mais pares de chave-valor (para literais de objeto) são esperados.
    - Para chamadas de função: minhaFuncao(...objIteravel);
    - Para array literais: [...objIteravel, 4, 5, 6]
    - Desestruturação: [a, b, ...objIteravel] = [1, 2, 3, 4, 5];

Para recuperar o valor selecionado da caixa de seleção, precisamos atribuir o método Onchange:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/onchangestate.png" />
    <br>
</h1>

A função utilizada ficará como a seguir:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/setschedule.png" />
    <br>
</h1>

Que tem o seguinte funcionamento:

```bash
const [scheduleItems, setScheduleItems] = useState([
	{ week_day: 0, from: '', to: ''},
]);
```

Na função setScheduleItemValue(position: number, field: string, value: string), se tiver os valores iniciais como setScheduleItemValue(0, "week_day", '2'), quando passar por scheduleItems.map((scheduleItem, index) terá como valores:

```bash
scheduleItem = { week_day: 0, from: '', to: ''},
index = 0
```

Irá fazer a comparação if (index === position) e, sendo 0 === 0, retorna um objeto array return {...scheduleItem, [field]: value }; O valor de field é "week_day" que vai sobreescrever o valor do campo weekday do objeto array. Testando na aplicação;

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/inserthorario.png" />
    <br>
</h1>


## INTEGRANDO BACK E FRONT

### Get de dados

Pelo terminal, navegue até a pasta do projeto server e digite:

```bash
yarn start
```
<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/yarnstartcad.png" />
    <br>
</h1>

Às vezes, dá erro ao carregar e não reconhecer o cors e tem que reinstalar. Para confirmar que está funcionando vá ao Insomnia e teste em qualquer dos métodos criado anteriormente:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/insomniatest.png" />
    <br>
</h1>

Precisamos instalar outra biblioteca que facilita o consumo de API externas pela aplicação. Quase todo projeto precisa fazer interface com uma API REST em algum estágio. Axios é um cliente HTTP leve baseado no serviço $ http em Angular.js v1.x e semelhante à API Fetch.

Axios é um cliente HTTP, que funciona tanto no browser quanto em node.js. A biblioteca é basicamente uma API que sabe interagir tanto com XMLHttpRequest quanto com a interface http do node. Isso significa que o mesmo código utilizado para fazer requisições ajax no browser também funciona no servidor. Além disso, as requisições feitas através da biblioteca retornam uma promise, compatível com a nova versão do JavaScript - ES6 e, portanto, podemos aproveitar as vantagens do assíncrono e aguardar por um código assíncrono mais legível. Também podemos interceptar e cancelar solicitações, e há proteção integrada do lado do cliente contra falsificação de solicitação entre sites.
```bash
yarn add axios
```
<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/addaxios.png" />
    <br>
</h1>

Criamos uma nova pasta services com um arquivo api.tx com o seguinte código:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/servicefolder.png" />
    <br>
</h1>

Obrigatório colocar o URL de baseURL em maiúsculas e indicar a base do endereço. Vamos adicionar as informações primeiro na página Landing, vamos precisar novamente utilizar dos Estados. Para facilitar a inclusão das referências é possível teclar Crtl + . (ponto):

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/baseURL.png" />
    <br>
</h1>
 
Se quiser que o useEffect atualizasse os valores a cada mudança e não apenas no carregamento da página, teríamos que criar uma variável inclui-la no “Array de Dependências”. Se a variável alterar indica a função quando deve ser executada. O useEffect utiliza o método GET para obter os dados, e se colocássemos um console.log na função poderíamos analisar o retorno:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/useEffectGET.png" />
    <br>
</h1>

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/connections.png" />
    <br>
</h1>

### POST no Formulário

Na página de TeacherForm.tsx vamos adicionar nossas variáveis de Estado e inicialixa-las:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/statevariables.png" />
    <br>
</h1>

Depois relacionamos com o campo e adicionamos o método Onchange:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/inputname.png" />
    <br>
</h1>

A seguir, envolvemos todo o código do formulário com uma tag form e trocamos o tipo do botão para submit

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/tagform.png" />
    <br>
</h1>
 
Criamos o método handleCreateClass e para testa-lo emitimos um console.log com os dados da tela. O parâmetro e: FormEvent é necessário pois como a função está fora do HTML, precisamos dessa classe do React para especificar o tipo dos argumentos. O e.preventDefalt é colocado para interromper o POST de direcionamento da página que é o comportamento padrão do botão submit.

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/preventDefalt.png" />
    <br>
</h1>
 
Ao clicar o botão deve voltar os dados:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/returndata.png" />
    <br>
</h1>

Quando os dados estiverem retornando, podemos alterar a função para gravar a aula:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/createclass.png" />
    <br>
</h1>


E verifique se está gravando com o Insomnia e o Request List Classes

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/requestlistclass.png" />
    <br>
</h1>

Para redirecionarmos a página inicial depois de completar o cadastro, precisamos importar o módulo history:

```bash
import { useHistory } from 'react-router-dom';
```

	Criamos uma constante e aplicamos no método.

```bash
const history = useHistory();
```

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/usehistory.png" />
    <br>
</h1>

### GET Lista de Classes

A parte de filtragem é feita da mesma forma que foi feito do POST do formulário, mas até agora os items listados nesta tela TescherList.tsx estão na forma HARD-CODE, ou seja, estático e precisamos trocar por variáveis.

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/listhardcode.png" />
    <br>
</h1>

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/teachritems.png" />
    <br>
</h1>

Para isso precisamos primeiro alterar o componente TeacherItem criando a interface para passar os dados na tela. E também criamos outra interface para definir um objeto, já que as informações que iremos passar não são de tipo primitivo:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/interfaceteacher.png" />
    <br>
</h1>

Lembra-se quando criamos uma interface e precisamos passar os dados, devemos chamar o React.FC é uma abreviação de React.FuncionalComponent, mesma coisa que foi feito no input. E substituímos os campos.

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/FuncionalComponent.png" />
    <br>
</h1>

Por fim, alteramos a página TeacherList.tsx para ficar assim:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/TeacherListcompo.png" />
    <br>
</h1>

Ao realizar a filtragem:

<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/teacherfilter.png" />
    <br>
</h1>

Por fim, temos que ativar o botão de contato do Whatsapp que utilizará o procedimento “Como usar a conversa em um clique”

Com o recurso conversa em um clique, você pode iniciar uma conversa com alguém cujo número de telefone não está salvo na sua lista de contatos. Desde que você saiba o número de telefone dessa pessoa e que ela tenha uma conta do WhatsApp ativa, você poderá criar um link que permite iniciar uma conversa entre vocês. Ao clicar nesse link, a conversa com essa pessoa será criada automaticamente. A conversa em um clique funciona no seu celular e no WhatsApp Web.
Criar seu link

Utilize https://wa.me/<número> e insira seu número de telefone em formato internacional completo no lugar de <número>. Não é necessário adicionar zero à frente do número, parênteses nem travessões ao inserir o número de telefone em formato internacional.

Exemplos:
- Correto: https://wa.me/552196312XXXX
- Incorreto: https://wa.me/+55(021)96312-XXXX

Ao clicar no botão:


<h1 align="center">
    <img alt="Create Project" src="https://raw.githubusercontent.com/shyoutarou/NLW2_Web/master/.github/directlionk.png" />
    <br>
</h1>
