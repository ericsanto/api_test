const express = require("express");

const app = express();

const users = [
		{
			"id": 1,
			"name": "She-Ha",
			"type": "admin",
			"email": "she-ha.silva@example.com",
			"password": "password123",
			"image": "https://i0.wp.com/popoca.com.br/wp-content/uploads/2020/06/She-ra.jpg?resize=628%2C353",
			"isActive": true,
			"createdAt": "2024-01-15"
		},
		{
			"id": 3,
			"name": "John Doe",
			"type": "apoiador",
			"email": "john@example.com",
			"password": "123456",
			"image": "",
			"isActive": true,
			"createdAt": "2024-01-15"
		},
		{
			"id": 2,
			"name": "Jane Admin",
			"type": "admin",
			"email": "jane@example.com",
			"password": "123456",
			"image": "",
			"isActive": true,
			"createdAt": "2024-01-15"
		},
		{
			"id": "5813",
			"name": "Mayson's Corp",
			"cnpj": "12345678910112",
			"type": "doador",
			"address": "Itacity",
			"username": "elmayson",
			"email": "reis@mail.com",
			"phone": "12345678910",
			"password": "123456",
			"image": "https://i0.wp.com/popoca.com.br/wp-content/uploads/2020/06/She-ra.jpg?resize=628%2C353"
		}
];

// Rota para retornar o usuário com base no email vindo pela query string
app.get("/users", (req, res) => {
  const { email } = req.query; // Pega o email da query string

  // Verifica se o email foi enviado
  if (!email) {
    return res.status(400).json({ error: "Email is required in query string" });
  }

  // Busca o usuário pelo email
  const user = users.find(u => u.email === email);

  // Retorna erro caso o usuário não seja encontrado
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  // Retorna o usuário encontrado
  return res.status(200).json(user);
});

app.listen(8080, () => {
  console.log("API ready on port 8080");
});

