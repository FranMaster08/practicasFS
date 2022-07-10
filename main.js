const fs = require("fs");
const path = require("path");
const pathFile = path.join(__dirname, "./users.json");

const findAllUser = () => {
  return JSON.parse(fs.readFileSync(pathFile, "utf8"));
};

const saveUser = (usuario) => {
  const db = leerUsuarios();
  db.push(usuario);
  fs.writeFileSync(pathFile, JSON.stringify(db), "utf8");
};

let user = {
  name: "John",
  lastName: "Doe",
};

crearUsuario(user);
