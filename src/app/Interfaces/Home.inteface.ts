export interface Productos
{
    nombre: string;
    codigo: string;
    precio: number;
    stock: number;
    categoria: string;
    cod_categoria: number;
    imagen: string;
    variantes: IVariantes[];
}

export interface IVariantes
{
    grupo: string;
    opciones: IOpciones[];
}

interface IOpciones
{
    precio: number;
    nombre: string;
}

export interface IVariante{
    grupo: number;
    option: number;
    precio: number;
    active: number;
}