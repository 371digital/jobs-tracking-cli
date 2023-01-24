## 371 Jobs Tracking Cli

371 Tarafından oluşturulan projelerin, development change'lerinni kayıt alına alınmasını sağlayan cli'dır.

### Commands List

| Name           | Description                                                        | Example                     |
| -------------- | ------------------------------------------------------------------ | --------------------------- |
| login          | Cli'a giriş yapmak için kullanılır.                                | jobs-tracker login          |
| logout         | Cli'da çıkış yapmak için kullanılır.                               | jobs-tracker logout         |
| create project | Cli'da project oluşturmak için kullanılır.                         | jobs-tracker create project |
| create change  | Cli'da oluşturulan bir proje'de change yayınlamak için kullanılır. | jobs-tracker create change  |

## Commands

- login
  Cli'a giriş yapmak için kullanılır.

```
jobs-tracker login
```

- logout
  Cli'dan çıkış yapmak için kullanılır

```
jobs-tracker logout
```

- create project
  Cli'da project oluşturmak için kullanılır. Projenin root dizininde project.json adında bir dosya oluşturur. Change oluşturmak için bu komutun bir kereye mahsus çalışması gerekmektedir. Eğer istenirse `links` fieldı doldurularak oluşturacak change'ler için link gönderilmesi sağlanır.

```
jobs-tracker create project
```

```
// Example project.json
{
  "projectId": "63cbf64a5b80a5e4eb6599c6",
  "media": [],
  "type": "backEnd",
  "links": [
    {
      "title": "OAUTH NODE CLIENT",
      "content": "Github url:",
      "url": "https://github.com/371digital/oauth-node-client"
    },
    {
      "title": "Değişim branchi :",
      "content": "",
      "url": "https://github.com/371digital/oauth-node-client/tree/{{branchName}}"
    },
    {
      "title": "Değişim commiti :",
      "content": "",
      "url": "https://github.com/371digital/oauth-node-client/commit/{{commitId}}"
    }
  ]
}
```

- create change
  Cli'da oluşturulan bir proje'de change yayınlamak için kullanılır.

```
jobs-tracker create change
```
