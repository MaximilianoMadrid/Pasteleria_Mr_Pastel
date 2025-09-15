document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn-agregar, .producto button');
    const cartCountHeader = document.getElementById('cart-count-header');

    // Cargar el carrito desde localStorage al iniciar
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();

    // Añadir eventos a los botones de "Añadir al carrito"
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productElement = e.target.closest('.producto, article');
            
            if (productElement) {
                const productName = productElement.querySelector('h3').innerText;
                const productPriceText = productElement.querySelector('p').innerText;
                const productPrice = parseFloat(productPriceText.replace(/\$|\.|\sCLP/g, ''));
                const productImage = productElement.querySelector('img').src;

                const existingProductIndex = cart.findIndex(item => item.name === productName);

                if (existingProductIndex !== -1) {
                    // El producto ya existe, solo incrementa la cantidad
                    cart[existingProductIndex].quantity++;
                } else {
                    // El producto no existe, agrégalo al carrito
                    cart.push({
                        name: productName,
                        price: productPrice,
                        image: productImage,
                        quantity: 1
                    });
                }
                
                // Guardar el carrito actualizado en localStorage
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                alert(`${productName} ha sido añadido al carrito.`);
            }
        });
    });

    // Función para actualizar el contador de productos en el encabezado
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCountHeader) {
            cartCountHeader.innerText = totalItems;
        }
    }
});

// ========== LOGIN ==========
document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("form-login");

    const usuarioPredefinido = "usuario@gmail.com";
    const contrasenaPredefinida = "123456";

    const adminUsuario = "admin@mrpastel.com";
    const adminContrasena = "admin123";

    if (formLogin) {
        formLogin.addEventListener("submit", function (e) {
            e.preventDefault();

            const correo = document.getElementById("correo").value;
            const contrasena = document.getElementById("contrasena").value;

            // Primero, validamos si es el usuario regular
            if (correo === usuarioPredefinido && contrasena === contrasenaPredefinida) {
                const nombreUsuario = correo.split('@')[0];
                localStorage.setItem("usuario", nombreUsuario);
                
                alert("Inicio de sesión exitoso. ¡Bienvenido " + nombreUsuario + "!");
                window.location.href = "/PasteleriaMilSabores/index.html";

            // Si no es el usuario regular, validamos si es el administrador
            } else if (correo === adminUsuario && contrasena === adminContrasena) {
                const nombreAdmin = correo.split('@')[0];
                localStorage.setItem("usuario", nombreAdmin);
                
                alert("Inicio de sesión exitoso. ¡Bienvenido " + nombreAdmin + "!");
                window.location.href = "/PasteleriaMilSabores/pages/admin/home-admin.html";

            // Si no coincide con ninguno, mostramos el mensaje de error
            } else {
                alert("Correo o contraseña incorrectos. Por favor, intenta de nuevo.");
            }
        });
    }
});


// ========== MOSTRAR USUARIO EN HEADER ==========
document.addEventListener("DOMContentLoaded", function () {
    const usuario = localStorage.getItem("usuario");
    const headerIcons = document.querySelector(".header-icons");

    if (usuario && headerIcons) {
        headerIcons.innerHTML = `
            <a href="/PasteleriaMilSabores/pages/tienda/carrito.html" class="cart-icon">
                <i class="fas fa-shopping-cart"></i>
                <span id="cart-count-header" class="cart-count">0</span>
            </a>
            <span class="user-name">👤 ${usuario}</span>
            <a href="#" id="logout-link">Salir</a>
        `;

        // Acción de cerrar sesión
        document.getElementById("logout-link").addEventListener("click", function () {
            localStorage.removeItem("usuario");
            window.location.reload();
        });
    }
});