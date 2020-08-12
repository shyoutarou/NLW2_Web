# Aula 3: Finalizando Front-End

[Voltar as README.md](README.md)

## CRIAR PROJETO

Voltamos ao projeto Front-End, na p�gina Formul�rio de Cadastro da classe que ficou faltando da aula 1. Como j� foi mencionado, � poss�vel criar uma propriedade nula no componente.

<h1 align="center">
    <img alt="Create Project" src=".github/componente_form.png" />
    <br>
</h1>

Para renderizar condicionalmente essa informa��es no componente PageHeader temos duas sintaxe poss�veis:
- **Tern�rio**: {propriedade.description? <p>{propriedade.description}</p> : null}
- **Javacript**: {propriedade.description && <p>{propriedade.description}</p> }

Crie na pasta componentes uma pasta input com os arquivos padr�o index.tsx e styles.css. Para extender todos atributos de um componente padr�o para o seu componente tem que aplicar heran�a (extends) da classe InutHTMLAttributes do React, como abaixo:

<h1 align="center">
    <img alt="Create Project" src=".github/HTMLAttributes.png" />
    <br>
</h1>

Depois recorte e cole a css do input que estava no css da p�gina TeacheList no css desse componente.

[Voltar as README.md](README.md)