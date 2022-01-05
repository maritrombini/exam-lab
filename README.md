API para controle e organização de exames.

---

Informações contidas em cada exame:

| Chave         | Descrição                          | Tipo    | Exemplo               |
| ------------- | ---------------------------------- | ------- | --------------------- |
| id            | Código do exame                    | BigInt  | 1                     |
| name          | Nome do exame                      | String  | "Eletroencefalograma" |
| doctor        | Nome do médico(a)                  | String  | "Mariana Pacheco"     |
| specialty     | Especialidade                      | String  | "Neurologia"          |
| clinic        | Clínica                            | String  | "Health Care"         |
| expected_date | Data do agendamento                | String  | "02/08/2021"          |
| done          | Determina se o exame foi realizado | Boolean | true                  |

---

A API é capaz de cadastrar um novo exame, visualizar os exames cadastrados, buscar exame por ID, por médico(a) ou por realizados, atualizar registros dos exames e marcar se o exame foi realizado. Para isso:

| Verbo  | Recurso                 | Descrição                                        |
| ------ | ----------------------- | ------------------------------------------------ |
| GET    | `/exams `               | Retornar todos os exames cadastrados             |
| GET    | `/exams/:id`            | Retornar apenas exame com ID específico          |
| GET    | `/exams/doctor/:doctor` | Retornar apenas exame de médico(a) específico(a) |
| GET    | `/exams/done/:done`     | Retornar apenas exames realizados                |
| POST   | `/exams`                | Cadastrar um novo exame                          |
| PATCH  | `/exams/:id/done`       | Marcar se o exame foi realizado                  |
| PUT    | `/exams/:id`            | Atualizar dados do exame                         |
| DELETE | `/exams/:id`            | Deletar exame                                    |

---

API utilizando o NodeJS, banco de dados e a plataforma Heroku.

https://exam-lab.herokuapp.com/
