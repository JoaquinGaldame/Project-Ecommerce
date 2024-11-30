import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Productos } from '../../../Interfaces/Home.inteface';

// Interfaz para definir un Producto
export interface Producto {
  id: number;           // ID único del producto
  nombre: string;       // Nombre del producto
  precio: number;       // Precio del producto
  cantidad: number;     // Cantidad del producto
}

@Injectable({
  providedIn: 'root' // Servicio global
})

export class CarroCompraService {
  public cantidadTotal: number = 0;
  // BehaviorSubject para manejar los productos del carrito
  private productosSubject = new BehaviorSubject<Productos[]>([]);
  
  // Observable para exponer el array de productos
  productos$: Observable<Productos[]> = this.productosSubject.asObservable();

  constructor() {}

  /**
   * Obtiene los productos actuales del carrito.
   * @returns Array de productos.
   */
  public get productos(): Productos[] {
    return this.productosSubject.getValue();
  }

  /**
   * Agrega un producto al carrito. Si ya existe, actualiza la cantidad.
   * @param producto Producto a agregar.
   */
  agregarProducto(producto: Productos, xcantidad: number): void {
    let cantidad = producto.cantidad === undefined ? 1: producto.cantidad;
    const productosActuales = this.productos;
    const productoExistente = productosActuales.find(p => p.id === producto.id);

    if (productoExistente) {
      // Si ya existe, actualiza la cantidad
      cantidad += xcantidad;
      productoExistente.cantidad = cantidad;
    } else {
      // Si no existe, lo agrega al carrito
      productosActuales.push(producto);
    }
    console.log('Esto guarda ' + JSON.stringify(productosActuales))
    // Actualiza el BehaviorSubject
    this.productosSubject.next([...productosActuales]);
  }

  /**
   * Elimina un producto del carrito por su ID.
   * @param id ID del producto a eliminar.
   */
  eliminarProducto(id: number): void {
    const productosActuales = this.productos.filter(p => p.id !== id);
    this.productosSubject.next([...productosActuales]);
  }

  /**
   * Limpia todos los productos del carrito.
   */
  limpiarCarrito(): void {
    this.productosSubject.next([]);
  }
}