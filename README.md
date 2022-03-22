# Projeto Exames Laboratoriais

## Escopo
Esse projeto consiste em criar uma API, baseada em conceitos RESTFul, para manipulação de Laboratórios e Exames.

## Tecnologias envolvidas
Foi utilizado Javascript rodando no servidor com NodeJS na versão 16.14, juntamente com TypeScript e Express.

Para banco de dados, foi utilizado PostgreSQL na versão 13.4 e TypeORM como ORM para manipular os dados na aplicação.

Ambos estão rodando em containers Dockers.

## Instalação

Primeiramente, deve-se realizar o clone do projeto utilizando GIT. Após isso, deve-se duplicar e renomear o arquivo .env.dist para .env, conforme comando abaixo:
```shell
> mv .env.dist .env
```

Após isso, execute o comando para subir os container do Docker:
```shell
> docker-compose up
```
<sup>Obs: Por gosto pessoal, eu prefiro deixar o Docker rodando no terminal, sem usar o parametro -d. Isso facilita o
debug da aplicação.</sup>

<sup>Obs²: Quando o docker subir, ele deve criar o banco de dados automaticamente. Caso isso não aconteça, precisará criar
o banco de dados manualmente. Por padrão, o banco deverá se chamar "wa_laboratorio_dev", ou alterar os dados de conexão no arquivo _.env_

Depois que o container do Docker subir, abra outra aba ou outra janela do terminal e execute o seguinte codigo:
```shell
> docker-compose exec web bash
```
Esse comando irá habilitar a execução de comandos diretamente dentro do container. 

Agora, instale as dependencias do projeto utilizando npm ou yarn.
```shell
> yarn install
```

Nesse ponto, iremos executar o migration do TypeORM. Execute o seguinte comando:
```shell
> npm run typeorm migration:run
```


Após a tabela ser criada, as informações iniciais serem inseridas e as dependências instaladas, o projeto estará pronto
para ser utilizado, rodando na porta 4001. Pode ser alterada no arquivo _.env_.

Um usuário padrão será criado para teste de autenticação, com os dados:
```
Username: admin@admin.com
Password: dev123
```

Na raiz do projeto, existe um arquivo para importação das rotas para testar no Postman. Faça a importação. Já terá alguns
modelos de rotas prontos para ser executados.

<!--
## Testes
Para rodar os testes unitários, basta executar no terminal:
```shell
> yarn test
```
-->

---

Qualquer dúvida, estou a disposição para saná-las.

Muito obrigado!
