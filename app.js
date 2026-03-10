const sequelize = require('./config/sequelize');
const Producto = require('./models/producto');

async function main() {
  try {

    // sincronizar base de datos
    await sequelize.sync();
    console.log("Base de datos sincronizada");

    // -------------------------
    // CREATE
    // -------------------------
    const nuevoProducto = await Producto.create({
      nombre: 'Laptop',
      precio: 1200.50
    });

    console.log("Producto creado:", nuevoProducto.toJSON());

    // -------------------------
    // READ (todos)
    // -------------------------
    const todosLosProductos = await Producto.findAll();
    console.log("Todos los productos:");
    todosLosProductos.forEach(p => console.log(p.toJSON()));

    // -------------------------
    // READ (por ID)
    // -------------------------
    const producto = await Producto.findByPk(1);

    if (producto) {
      console.log("Producto encontrado:", producto.toJSON());
    } else {
      console.log("Producto no encontrado");
    }

    // -------------------------
    // UPDATE
    // -------------------------
    await Producto.update(
      { precio: 1150.00 },
      { where: { id: 1 } }
    );

    console.log("Producto actualizado");

    // -------------------------
    // DELETE
    // -------------------------
    await Producto.destroy({
      where: { id: 2 }
    });

    console.log("Producto eliminado (si existía)");

  } catch (error) {
    console.error("Error:", error);
  }
}

main();