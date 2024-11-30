import { Productos } from "../Interfaces/Home.inteface";
export const Data: Productos[] = [
    { id:1, nombre: "Hamburguesa",codigo: "200100",precio: 10550,stock: 0,categoria: "Plato",cod_categoria: 1,imagen: "../../assets/productos/hamburguesa.jpg", variantes: []},
    { id:2, nombre: "Pizza Napolitana",codigo: "200101",precio: 11800,stock: 0,categoria: "Plato",cod_categoria: 1,imagen: "../../assets/productos/pizzaNapolitana.jpg", variantes: []},
    { id:3, nombre: "Pizza de Calabresa",codigo: "200102",precio: 12000,stock: 0,categoria: "Plato",cod_categoria: 1,imagen: "../../assets/productos/pizzaCalabresa.jpg", variantes: []},
    { id:4, nombre: "Torta",codigo: "300100",precio: 4000,stock: 0,categoria: "Postre",cod_categoria: 3,imagen: "../../assets/productos/torta.jpg", variantes: [{
        grupo: "Tipo", opciones: [
            { precio:0, nombre: "Chocolate"},{ precio:500, nombre: "Mousse de chocolate"},{ precio:600, nombre: "Fresas con crema de vainilla"},{ precio:300, nombre: "Cheesecake de Nutella"},
            { precio:200, nombre: "Banana cream pie"},{ precio:500, nombre: "Torta de 80 golpes"}
        ]
    }]},
    { id:5, nombre: "Helado",codigo: "400100",precio: 4500,stock: 0,categoria: "Postre",cod_categoria: 3,imagen: "../../assets/productos/helado.jpg", variantes: [{ grupo: "sabores", opciones: [
        { precio:0, nombre: "Chocolate"},{ precio:0, nombre: "Chocolate Cabsha"},{ precio:0, nombre: "Chocolate Imperial"},
        { precio:0, nombre: "Frutilla a la Crema"},{ precio:0, nombre: "Crema Americana"},{ precio:0, nombre: "Pistacho"},
        { precio:0, nombre: "Tramontana"},{ precio:0, nombre: "Menta Granizada"},{ precio:0, nombre: "Dulce de Leche Granizado"},
        { precio:0, nombre: "Frutos del Bosque"},{ precio:0, nombre: "Bombón de Avellanas"},{ precio:0, nombre: "Caramelo Cremoso"},
        { precio:0, nombre: "Dulce de Leche Imperial"},{ precio:0, nombre: "Vainilla"},{ precio:0, nombre: "Flan"},
        { precio:0, nombre: "Crema del Cielo"},{ precio:0, nombre: "Banana Split"}
    ]
    }]},
    { id:6, nombre: "Stick de Helado",codigo: "400101",precio: 3500,stock: 0,categoria: "Postre",cod_categoria: 3,imagen: "../../assets/productos/stickHelado.jpg", variantes: [
        { grupo: "Sabores", opciones: [
            { precio:0, nombre: "Chocolate"},{ precio:0, nombre: "Chocolate Cabsha"},{ precio:0, nombre: "Chocolate Imperial"},
            { precio:0, nombre: "Frutilla a la Crema"},{ precio:0, nombre: "Crema Americana"},{ precio:0, nombre: "Pistacho"},
            { precio:0, nombre: "Tramontana"},{ precio:0, nombre: "Menta Granizada"},{ precio:0, nombre: "Dulce de Leche Granizado"},
            { precio:0, nombre: "Frutos del Bosque"},{ precio:0, nombre: "Bombón de Avellanas"},{ precio:0, nombre: "Caramelo Cremoso"},
            { precio:0, nombre: "Dulce de Leche Imperial"},{ precio:0, nombre: "Vainilla"},{ precio:0, nombre: "Flan"},{ precio:0, nombre: "Crema del Cielo"},
            { precio:0, nombre: "Banana Split"}
        ]}
    ]},
    { id:7, nombre: "Sprite",codigo: "500100",precio: 2800,stock: 0,categoria: "Bebida",cod_categoria: 2,imagen: "../../assets/productos/sprite.jpg", variantes: []},
    { id:8, nombre: "Coca-Cola",codigo: "500101",precio: 2900,stock: 0,categoria: "Bebida",cod_categoria: 2,imagen: "../../assets/productos/coca-cola.jpg", variantes: []},
    { id:9, nombre: "Flan",codigo: "300101",precio: 5800,stock: 0,categoria: "Postre",cod_categoria: 3,imagen: "../../assets/productos/flan.jpg", variantes: []},
    { id:10, nombre: "Whisky",codigo: "500102",precio: 8500,stock: 0,categoria: "Bebida",cod_categoria: 2,imagen: "../../assets/productos/Whisky.jpg", variantes: []},
    { id:11, nombre: "Mojito",codigo: "500103",precio: 9000,stock: 0,categoria: "Bebida",cod_categoria: 2,imagen: "../../assets/productos/Mojito.jpg", variantes: []},
    { id:12, nombre: "papasFritas",codigo: "200104",precio: 7200,stock: 0,categoria: "Plato",cod_categoria: 1,imagen: "../../assets/productos/papasFritas.jpg", variantes: []},
    { id:13, nombre: "Té",codigo: "600100",precio: 0,stock: 4500,categoria: "Cafetería",cod_categoria: 4,imagen: "../../assets/productos/te.jpg", variantes: []},
    { id:14, nombre: "Plato de Carne",codigo: "200103",precio: 13500,stock: 0,categoria: "Plato",cod_categoria: 1,imagen: "../../assets/productos/platoCarne.jpg", variantes: []},
    { id:15, nombre: "Cappuccino",codigo: "600101",precio: 4600,stock: 0,categoria: "Cafetería",cod_categoria: 4,imagen: "../../assets/productos/Cappuccino.jpg", variantes: []}
]

export const Categorias = [
    { nombre:"Todos", numero:0 },
    { nombre:"Plato", numero:1 },
    { nombre:"Bebida", numero:2 },
    { nombre:"Postre", numero:3 },
    { nombre:"Cafetería", numero:4 },
]
