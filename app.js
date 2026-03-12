const sequelize = require('./config/sequelize');
require('dotenv').config();

console.log("HOST:", process.env.DB_HOST);
console.log("USER:", process.env.DB_USER);
console.log("PASS:", process.env.DB_PASSWORD);
console.log("DB:", process.env.DB_NAME);
const Producto = require('./models/producto');


async function main() {
  try {

    await sequelize.sync();
    console.log("Base de datos sincronizada");
    
    // CREATE
    const nuevoProducto = await Producto.create({
      nombre: "Laptop",
      precio: 1200
    });

    console.log("Producto creado:", nuevoProducto.toJSON());

    // READ
    const productos = await Producto.findAll();
    console.log("Productos:", productos.map(p => p.toJSON()));

    // UPDATE
    await Producto.update(
      { precio: 1000 },
      { where: { id: 1 } }
    );

    console.log("Producto actualizado");

    // DELETE
    await Producto.destroy({
      where: { id: 2 }
    });

    console.log("Producto eliminado");

  } catch (error) {
    console.error("Error:", error);
  }
}

main();