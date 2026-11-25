const express=require("express");
const app=express();
app.use=express.json();
let users=[
    {
        id:1,
        name:"John Doe",
        email:"john.doe@example.com"
    },
    {
    
        id:2,
        name:"Jane Smith",
        email:"jane.gmail.com"
    }
 
];
app.post("/users", (req, res) => {
  const newUser = { id: Date.now(), name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});
app.get("/users", (req, res) => {
  res.json(users);
});
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: "User nahi mila" });
  res.json(user);
});
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: "User nahi mila" });
  user.name = req.body.name;
  res.json(user);
});
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: "User nahi mila" });
  user.name = req.body.name;
  res.json(user);
});
app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id !== Number(req.params.id));
  res.json({ message: "User delete ho gaya" });
});
app.listen(5000, () => console.log("Server chal raha hai: port 5000"));