//Productos disponibles
const productos = [

  {id: 1, 
    nombre: "Torta Cuadrada de Chocolate", 
    precio: {pequena:15000, mediana:30000, grande:45000}, 
    descripcion:"Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.",
    imagen: "/PasteleriaMilSabores/images/imagenes_producto/tarta-chocolate-ganache.jpg"},
  
  {id: 2, 
    nombre: "Torta Cuadrada de Frutas", 
    precio:{pequena:17000, mediana:35000, grande:50000},
    descripcion:"Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.", 
    imagen: "/PasteleriaMilSabores/images/imagenes_producto/torta-de-frutas.jpg"},
  
  {id: 3, 
    nombre: "Torta Circular de Vainilla", 
    precio:{pequena:15000, mediana:30000, grande:40000},
    descripcion:"Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.",
    imagen: "/PasteleriaMilSabores/images/imagenes_producto/torta de vainilla.jpg"},
  
  {id: 4, 
    nombre: "Torta Circular de Manjar", 
    precio:{pequena:20000, mediana:30000, grande:42000},
    descripcion:"Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.",
    imagen: "/PasteleriaMilSabores/images/imagenes_producto/torta-manjar-nuez.jpg"},
  
  {id: 5, 
    nombre: "Mousse de Chocolate", 
    precio: 5000, 
    descripcion:"Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.",
    imagen: "/PasteleriaMilSabores/images/imagenes_producto/mousse-chocolate.jpg"},
  
  {id: 6, 
    nombre: "Tiramisú Clásico", 
    precio: 6000, 
    descripcion:"Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.",
    imagen: "/PasteleriaMilSabores/images/imagenes_producto/tiramisu.jpg"},
  
  {id: 7, 
    nombre: "Torta Sin Azúcar de Naranja", 
    precio:{pequena:25000, mediana:35000, grande:48000}, 
    descripcion:"Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.",
    imagen: "/PasteleriaMilSabores/images/imagenes_producto/torta-naranja.jpg"},
  
  {id: 8, 
    nombre: "Postre Cheesecake Sin Azúcar", 
    precio:{pequena:20000, mediana:35000, grande:47000},  
    descripcion:"Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.",
    imagen: "/PasteleriaMilSabores/images/imagenes_producto/chesecake.jpg"},
  
  {id: 9, 
    nombre: "Empanada de Manzana",
    precio: 3000, 
    descripcion:"Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.",
    imagen: "/PasteleriaMilSabores/images/imagenes_producto/empanadas-manzana.jpg"},
  
  {id: 10, 
    nombre: "Tarta de Santiago", 
    precio: 6000, 
    descripcion:"Tradicional tarta española hecha con almendras, azúcar, y huevos, una delicia para los amantes de los postres clásicos.",
    imagen: "/PasteleriaMilSabores/images/imagenes_producto/tarta-santiago.jpg"},
  
  {id: 11, 
    nombre: "Brownie Sin Gluten", 
    precio: 4000, 
    descripcion:"Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.",
    imagen: "/PasteleriaMilSabores/images/imagenes_producto/brownie-sin-gluten.jpg"},
  
  {id: 12, 
    nombre: "Pan Sin Gluten", 
    precio: 3500, 
    descripcion:"Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.", 
    imagen: "/PasteleriaMilSabores/images/imagenes_producto/pan-sin-gluten.jpg"},
  
  {id: 13, 
    nombre: "Torta Vegana de Chocolate", 
    precio:{pequena:30000, mediana:40000, grande:50000}, 
    descripcion:"Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos.",
    imagen: "/PasteleriaMilSabores/images/imagenes_producto/chocolate-vegano.jpg"},
  
  {id: 14, 
    nombre: "Galletas Veganas de Avena", 
    precio: 4500, 
    descripcion:"Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano..", 
    imagen: "/PasteleriaMilSabores/images/imagenes_producto/galletas-avena.jpg"},
  
  {id: 15, 
    nombre: "Torta Especial de Cumpleaños", 
    precio:{pequena:35000, mediana:45000, grande:55000},  
    descripcion:"Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.",
    imagen: "/PasteleriaMilSabores/images/imagenes_producto/pastel-cumpleanos.jpg"},
  
  {id: 16, 
    nombre: "Torta Especial de Boda", 
    precio:{pequena:40000, mediana:50000, grande:60000},
    descripcion:"Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.",
    imagen: "/PasteleriaMilSabores/images/imagenes_producto/pastel-boda.jpg"},
  
    ];

    // Obtener el id desde la URL
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    // Buscar el producto
    const producto = productos.find(p => p.id === id);

    // Mostrar en el HTML
    if (producto) {
        function obtenerPrecio(tamano) {
    if (typeof producto.precio === "object") {
      if (tamano === "pequeño") return producto.precio.pequena;
      if (tamano === "mediano") return producto.precio.mediana;
      if (tamano === "grande") return producto.precio.grande;
    }
    return producto.precio;
  }

  // Tamaño por defecto
  let tamanoSeleccionado = "pequeño";
  let precioActual = obtenerPrecio(tamanoSeleccionado);


  document.getElementById("detalle-producto").innerHTML = `
    <article class="detalle-contenedor">
     <img src="${producto.imagen}" alt="${producto.nombre}">
     <div class="detalle-info">
         <h2>${producto.nombre}</h2>
         <p class="descripcion">${producto.descripcion ? producto.descripcion : ""}</p>
         <p class="precio" id="precio-producto">$${precioActual.toLocaleString()} CLP</p>
         <label for="tamano">Tamaño:</label>
         <select id="tamano">
             <option value="pequeño">Pequeño</option>
             <option value="mediano">Mediano</option>
             <option value="grande">Grande</option>
         </select>
         <br><br>
         <label for="nota">Nota personalizada:</label><br>
         <textarea id="nota" rows="4" cols="40" placeholder="Escribe tu mensaje..."></textarea>
         <br><br>
         <button onclick="agregarAlCarrito(${producto.id})">Añadir al Carrito</button>
     </div>
</article>
    `;
    document.getElementById("tamano").addEventListener("change", function() {
       const tamano = this.value;
       const nuevoPrecio = obtenerPrecio(tamano);
       document.getElementById("precio-producto").textContent = `$${nuevoPrecio.toLocaleString()} CLP`;
    });

} else {
      document.getElementById("detalle-producto").innerHTML = "<p>Producto no encontrado.</p>";
}

    // Función para añadir al carrito
    function agregarAlCarrito(id) {
      const tamano = document.getElementById("tamano")? document.getElementById("tamano").value : null;
      const nota = document.getElementById("nota") ? document.getElementById("nota").value : "";
      const producto = productos.find(p => p.id === id);
      if (!producto) return;
      // Obtener el precio correcto
      let precio = producto.precio;
      if (typeof precio === "object" && tamano) {
        if (tamano === "pequeño") precio = precio.pequena;
        if (tamano === "mediano") precio = precio.mediana;
        if (tamano === "grande") precio = precio.grande;
      }
      // Guardar en el carrito (ejemplo usando localStorage)
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        tamano: tamano,
        nota: nota,
        precio: precio
      });
      localStorage.setItem("carrito", JSON.stringify(carrito));
      
      alert(`Agregado al carrito: ${producto.nombre}\nTamaño: ${tamano}\nPrecio: $${precio.toLocaleString()} CLP\nNota: ${nota}`);
      // Aquí podrías guardar en localStorage o enviarlo al backend
    }
