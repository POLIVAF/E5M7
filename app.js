const sequelize = require('./config/sequelize');
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