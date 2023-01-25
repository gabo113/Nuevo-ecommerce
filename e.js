const productos = [
   
    {
        id: "Queso-01",
        titulo: "Queso fuega lpitu",
        imagen: "./img/exclusivos/quesoafuegalpitu.jpg", 
        categoria: {
            nombre: "Exclusivos",
            id: "exclusivos"
        },
        precio: 1000
    },

        {
            id: "Queso-02",
            titulo: "Queso azul de vaca",
            imagen: "./img/exclusivos/quesoazulvaca.jpg",
            categoria: {
                nombre: "Exclusivos",
                id: "exclusivos"
            },
            precio: 1000
        },

        {
            id: "Queso-03",
            titulo: "Queso  oveja abredo",
            imagen: "./img/novedades/quesoovejaabredo.jpg",
            categoria: {
                nombre: "Novedades",
                id: "novedades"
            },
            precio: 1000
        },

        {
            id: "Queso-04",
            titulo: "Queso cabrales",
            imagen: "./img/novedades/quesocabrales.jpg",
            categoria: {
                nombre: "Novedades",
                id: "novedades"
            },
            precio: 1000
        },

        {
            id: "Queso-05",
            titulo: "Queso de coan",
            imagen: "./img/novedades/quesodecoan.jpg",
            categoria: {
                nombre: "Novedades",
                id: "novedades"
            },
            precio: 1000
        },

        {
            id: "Queso-06",
            titulo: "Queso de oveja",
            imagen: "./img/destacados/quesodeovejalacollada.jpg",
            categoria: {
                nombre: "Productos destacados",
                id: "productos-destacados"
            },
            precio: 1000
        },

        {
            id: "Queso-07",
            titulo: "Queso tres leches",
            imagen: "./img/destacados/quesomadurotresleches.jpg",
            categoria: {
                nombre: "Productos destacados",
                id: "productos-destacados"
            },
            precio: 1000
        },

        {
            id: "Queso-08",
            titulo: "Queso rojo cabra",
            imagen: "./img/destacados/quesorojocabra.jpg",
            categoria: {
                nombre: "Productos destacados",
                id: "productos-destacados"
            },
            precio: 1000
        },

];

const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar =document.querySelectorAll(".producto-agregar")

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = ''

    productosElegidos.forEach(producto => {
        const div =document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
        <img class="producto-imagen" src=" ${producto.imagen}" alt="">
        <div class="producto-detalles">
           <h3 class="producto-titulo">${producto.titulo}</h3>
           <p class="producto-precio">$${producto.precio}</p>
           <button class="producto-agregar" id="${producto.id}"></i>Agregrar</button>
        </div>
        `
        contenedorProductos.append(div)
    })
    actualizarBotonesAgregar()
    console.log(botonesAgregar)
}

cargarProductos(productos)

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
    
        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")
        
        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
    }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

