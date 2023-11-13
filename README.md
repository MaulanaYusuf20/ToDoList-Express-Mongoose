# ToDoList Express & Mongoose

## Fitur

#### Auth

-   Login
-   Register

#### Todo

-   Get All Todo
-   Create TodoF
-   Get Todo By ID
-   Delete Todo
-   Delete All Todo
-   Edit Todo

## Endpoint Auth

| Method | Endpoint         | Description          |
| ------ | ---------------- | -------------------- |
| `POST` | `/auth/login`    | Melakukan Login Akun |
| `POST` | `/auth/register` | Membuat Akun         |

## Endpoint Todos

| Method   | Endpoint           | Description                                                 |
| -------- | ------------------ | ----------------------------------------------------------- |
| `GET`    | `/users/todos`     | `Require Authentication` Mendapatkan semua data Todo        |
| `POST`   | `/users/todos`     | `Require Authentication` Membuat Todo                       |
| `GET`    | `/users/todos/:id` | `Require Authentication` Mendapatkan Todo berdasarkan Id    |
| `DELETE` | `/users/todos/:id` | `Require Authentication` Menghapus Todo berdasarkan Id Todo |
| `DELETE` | `/users/todos`     | `Require Authentication` Menghapus seluruh Todo dari user   |
| `PUT`    | `/users/todos/:id` | `Require Authentication` Update Todo                        |

## Dokumentasi API

Untuk memudahkan dalam proses testing API, berikut link menuju dokumentasi API di Postman

Link Postman : https://s.id/DokumentasiAPIToDoList
