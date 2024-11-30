import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarroCompraService } from './carro-compras.service';
import { Productos } from '../../../Interfaces/Home.inteface';

@Component({
  selector: 'app-carro-compras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carro-compras.component.html',
  styleUrl: './carro-compras.component.css',
  encapsulation: ViewEncapsulation.None
})

export class CarroComprasComponent implements OnInit, OnDestroy {
  public viewShoppingCart: boolean = false;
  public productosCarro: Productos[] = [];
  public cantidadCarro: number = 0;
  public totalCarro: number = 0;
  constructor(
    private serviceCarro: CarroCompraService
  ){ }
  ngOnInit(): void
  {
    this.serviceCarro.productos$.subscribe((productos) => {
      this.productosCarro = [];
      this.productosCarro = productos;
      this.totalCarro = 0;
      this.cantidadCarro = 0;
      let contador = 0;
      this.productosCarro.forEach((item) => {
        let importe = 0;
        let cantidad = 0;
        cantidad = (item.cantidad === undefined) ? 1: item.cantidad
        importe = item.precio;
        this.totalCarro += cantidad * importe;
        // console.log(' esto tiene carro ' + JSON.stringify(this.productosCarro));
      })
      this.cantidadCarro += this.productosCarro.length;
      console.log(' total de carro ' + this.cantidadCarro );
    });
  }

  ngOnDestroy(): void
  {

  }

  verCarro(): void{
    this.viewShoppingCart = true;
  }
  closeCarro() {
    this.viewShoppingCart = false;
  }

  eliminarCarro(): void{
    this.serviceCarro.limpiarCarrito()
    this.totalCarro = 0;
    this.cantidadCarro = 0;
  }

  eliminarProductoCarro(id: number):void{
    this.serviceCarro.eliminarProducto(id);
    this.cantidadCarro = this.productosCarro.length;
  }
}
