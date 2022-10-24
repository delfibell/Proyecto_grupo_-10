const express = require("express");
const path = require("path");
const mainRoutes = require("./src/routes/main");
const productsRoutes = require("./src/routes/products");
const usersRoutes = require("./src/routes/users");
const cartRoutes = require("./src/routes/cart");
const notFoundRoutes = require("./src/routes/notFound")

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "src/views"))

app.listen(3000, () => {
  console.log("Servidor funcionando");
});

app.use("/", mainRoutes);

app.use("/productos", productsRoutes);

app.use("/usuarios", usersRoutes);

app.use("/carrito", cartRoutes);

app.use("/*", notFoundRoutes);



(function() {
  const heart = document.getElementById('heart');
  heart.addEventListener('click', function() {
    heart.classList.toggle('red');
  });
})();