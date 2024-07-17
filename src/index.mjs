import express from "express";


const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
  {
    id: 1,
    username: "ali",
    displayname: "mohmmad",
  },
  {
    id: 1,
    username: "hosin",
    displayname: "asghar",
  },
  {
    id: 2,
    username: "mohammad",
    displayname: "taheri",
  },
  {
    id: 3,
    username: "ali",
    displayname: "mohmmad",
  },
];

app.use(express.json())
app.get("/", (request, response) => {
  response.status(201).send({ msg: "hello" });
});

app.get("/api/users", (req, res) => {
  console.log(req.query);
  const {
    query: { filter, value },
  } = req;
  if ((!value, !filter)) return res.send(mockUsers);
  return res.send(
    mockUsers.filter((user) => user[filter].includes(value))
  );
  res.send(mockUsers) ;
});

app.get("/api/products/:id", (req, res) => {
  console.log(req.params);
  const parsId = parseInt(req.params.id);
  if (isNaN(parsId)) {
    res.status(401).send({ message: "id is not number" });
  }
  const findUser = mockUsers.find((user) => user.id === parsId);
  if (!findUser) return res.sendStatus(404);

  return res.send(findUser);
});

app.post("/api/user" , (req , res) => {
    console.log(req.body);
    if(req.body == "username") {
      const NewProduct = req.body
      return res.sendDate()
    }
    // res.status(201).send(req.body)
})
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
