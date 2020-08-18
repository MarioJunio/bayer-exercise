___
**Para executar a API é necessário instalar as dependências, execute o seguinte comandoo no diretório raiz do projeto e aguarde o download finalizar.**
- npm install

**Parar iniciar a API na porta 8182, execute o seguinte comando no diretório raiz do projeto.**
- npm start
> Caso necessite alterar a porta padrão que o servidor está iniciando acesso o arquivo 'config/default.json

**Para rodar os testes, execute o seguinte comando no diretório raiz do projeto.**
- npm install jest -g
- npm test
___

**Segue abaixo os dados mockados para utilização**
```[
    {
        "id": "1",
        "document": {
            "documentNumber": "114.202.376-15",
            "documentType": "A"
        },
        "name": "Mario Marques",
        "address": {
            "street": "Rua Duarte da Costa",
            "address": "1575",
            "state": "MG",
            "country": "Brazil"
        }
    },
    {
        "id": "2",
        "document": {
            "documentNumber": null,
            "documentType": "C"
        },
        "name": "Luiz Antonio",
        "address": {
            "street": "Rua B",
            "address": "311",
            "state": "GO",
            "country": null
        }
    },
    {
        "id": "3",
        "document": {
            "documentNumber": "042.152.376-04",
            "documentType": "D"
        },Os dados mockados
        "name": "Alexandra Caroline Monteiro Braga",
        "address": {
            "street": "Rua G",
            "address": "621",
            "state": "MG",
            "country": "Brazil"
        }
    },
    {
        "id": "4",
        "document": {
            "documentNumber": "069.682.135-17",
            "documentType": "E"
        },
        "name": "Roberto Moura",
        "address": {
            "street": "Rua das laranjeiras",
            "address": "9922",
            "state": "SP",
            "country": "Brazil"
        }
    }
]```
