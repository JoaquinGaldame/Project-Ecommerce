import { Productos } from "../Interfaces/Home.inteface";
export const Data: Productos[] = [
    { nombre: "Hamburguesa",codigo: "200100",precio: 10550,stock: 0,categoria: "Plato",cod_categoria: 1,imagen: "../../assets/productos/hamburguesa.jpg", variantes: []},
    { nombre: "Pizza Napolitana",codigo: "200101",precio: 11800,stock: 0,categoria: "Plato",cod_categoria: 1,imagen: "../../assets/productos/pizzaNapolitana.jpg", variantes: []},
    { nombre: "Pizza de Calabresa",codigo: "200102",precio: 12000,stock: 0,categoria: "Plato",cod_categoria: 1,imagen: "../../assets/productos/pizzaCalabresa.jpg", variantes: []},
    { nombre: "Torta",codigo: "300100",precio: 6000,stock: 0,categoria: "Postre",cod_categoria: 3,imagen: "../../assets/productos/torta.jpg", variantes: [{
        grupo: "Tipo de tortas", opciones: [
            { precio:4500, nombre: "Mousse de chocolate"},{ precio:4600, nombre: "Fresas con crema de vainilla"},{ precio:5300, nombre: "Cheesecake de Nutella"},
            { precio:5200, nombre: "Banana cream pie"},{ precio:5500, nombre: "Torta de 80 golpes"}
        ]
    }]},
    { nombre: "Helado",codigo: "400100",precio: 4500,stock: 0,categoria: "Postre",cod_categoria: 3,imagen: "../../assets/productos/helado.jpg", variantes: [{ grupo: "sabores", opciones: [
        { precio:0, nombre: "Chocolate"},{ precio:0, nombre: "Chocolate Cabsha"},{ precio:0, nombre: "Chocolate Imperial"},
        { precio:0, nombre: "Frutilla a la Crema"},{ precio:0, nombre: "Crema Americana"},{ precio:0, nombre: "Pistacho"},
        { precio:0, nombre: "Tramontana"},{ precio:0, nombre: "Menta Granizada"},{ precio:0, nombre: "Dulce de Leche Granizado"},
        { precio:0, nombre: "Frutos del Bosque"},{ precio:0, nombre: "Bombón de Avellanas"},{ precio:0, nombre: "Caramelo Cremoso"},
        { precio:0, nombre: "Dulce de Leche Imperial"},{ precio:0, nombre: "Vainilla"},{ precio:0, nombre: "Flan"},
        { precio:0, nombre: "Crema del Cielo"},{ precio:0, nombre: "Banana Split"}
    ]
    }]},
    { nombre: "Stick de Helado",codigo: "400101",precio: 3500,stock: 0,categoria: "Postre",cod_categoria: 3,imagen: "../../assets/productos/stickHelado.jpg", variantes: [
        { grupo: "sabores", opciones: [
            { precio:0, nombre: "Chocolate"},{ precio:0, nombre: "Chocolate Cabsha"},{ precio:0, nombre: "Chocolate Imperial"},
            { precio:0, nombre: "Frutilla a la Crema"},{ precio:0, nombre: "Crema Americana"},{ precio:0, nombre: "Pistacho"},
            { precio:0, nombre: "Tramontana"},{ precio:0, nombre: "Menta Granizada"},{ precio:0, nombre: "Dulce de Leche Granizado"},
            { precio:0, nombre: "Frutos del Bosque"},{ precio:0, nombre: "Bombón de Avellanas"},{ precio:0, nombre: "Caramelo Cremoso"},
            { precio:0, nombre: "Dulce de Leche Imperial"},{ precio:0, nombre: "Vainilla"},{ precio:0, nombre: "Flan"},{ precio:0, nombre: "Crema del Cielo"},
            { precio:0, nombre: "Banana Split"}
        ]}
    ]},
    { nombre: "Sprite",codigo: "500100",precio: 2800,stock: 0,categoria: "Bebida",cod_categoria: 2,imagen: "../../assets/productos/sprite.jpg", variantes: []},
    { nombre: "Coca-Cola",codigo: "500101",precio: 2900,stock: 0,categoria: "Bebida",cod_categoria: 2,imagen: "../../assets/productos/coca-cola.jpg", variantes: []},
    { nombre: "Flan",codigo: "300101",precio: 5800,stock: 0,categoria: "Postre",cod_categoria: 3,imagen: "../../assets/productos/flan.jpg", variantes: []},
    { nombre: "Whisky",codigo: "500102",precio: 8500,stock: 0,categoria: "Bebida",cod_categoria: 2,imagen: "../../assets/productos/Whisky.jpg", variantes: []},
    { nombre: "Mojito",codigo: "500103",precio: 9000,stock: 0,categoria: "Bebida",cod_categoria: 2,imagen: "../../assets/productos/Mojito.jpg", variantes: []},
    { nombre: "papasFritas",codigo: "200104",precio: 7200,stock: 0,categoria: "Plato",cod_categoria: 1,imagen: "../../assets/productos/papasFritas.jpg", variantes: []},
    { nombre: "Té",codigo: "600100",precio: 0,stock: 4500,categoria: "Cafetería",cod_categoria: 4,imagen: "../../assets/productos/te.jpg", variantes: []},
    { nombre: "Plato de Carne",codigo: "200103",precio: 13500,stock: 0,categoria: "Plato",cod_categoria: 1,imagen: "../../assets/productos/platoCarne.jpg", variantes: []},
    { nombre: "Cappuccino",codigo: "600101",precio: 4600,stock: 0,categoria: "Cafetería",cod_categoria: 4,imagen: "../../assets/productos/Cappuccino.jpg", variantes: []}
]

export const Categorias = [
    { nombre:"Todos", numero:0 },
    { nombre:"Plato", numero:1 },
    { nombre:"Bebida", numero:2 },
    { nombre:"Postre", numero:3 },
    { nombre:"Cafetería", numero:4 },
]
