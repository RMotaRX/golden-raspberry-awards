# Golden Raspberry Awards API 🏆

API RESTful para consultar os produtores com maior e menor intervalo entre vitórias consecutivas no _Golden Raspberry Awards_ (Pior Filme).

---

## 📋 Pré-requisitos

- Node.js v18+
- npm v9+ ou Yarn 1.x
- Git (opcional)

---

## 🚀 Instalação e Execução

### 1. Clonar repositório

````bash
git clone https://github.com/RMotaRX/golden-raspberry-awards.git
cd golden-raspberry-awards

1. Instalar dependências

bash
Copy
npm install
# ou
yarn

2. Iniciar servidor

bash
Copy
npm start
# ou
yarn start
Servidor estará disponível em: http://localhost:3000

🔍 Testar Endpoint

Execute o seguinte comando para obter os intervalos dos produtores:

bash
Copy
curl --location 'http://localhost:3000/api/producers/intervals'
Exemplo de resposta:

json
Copy
{
  "min": [
    {
      "producer": "Producer A",
      "interval": 1,
      "previousWin": 2018,
      "followingWin": 2019
    }
  ],
  "max": [
    {
      "producer": "Producer B",
      "interval": 99,
      "previousWin": 1900,
      "followingWin": 1999
    }
  ]
}
🧪 Testes de Integração

bash
Copy
npm test
# ou
yarn test
📂 Estrutura do Projeto

Copy
golden-raspberry-awards/
├── src/                    # Código-fonte
├── tests/                  # Testes
├── .gitignore
├── movielist (6).csv # Dados do C
├── package.json
└── README.md
📄 Licença

MIT

Node.js
TypeScript

🔗 Referências

Golden Raspberry Awards
Documentação TypeORM

<div align="center"> <sub>Desenvolvido com ❤️ por <a href="https://www.linkedin.com/in/motarxrafael/">Rafael Mota</a></sub> </div> ```
````
