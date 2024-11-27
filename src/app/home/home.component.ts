import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NgFor, DecimalPipe } from '@angular/common';
import { Productos, IVariantes } from '../Interfaces/Home.inteface';
import { CompactComponent } from '../layout/Common/compact/compact.component';
import { LayoutComponent } from '../layout/Common/layout.component';
import { Data, Categorias } from './data';
import { CommonModule } from '@angular/common';
// import { MatIconModule } from '@angular/material/icon';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CompactComponent,LayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  public data: Productos[] = Data;
  public productos: Productos[] = [];
  public productosModal: Productos[] = [];
  public productosSubject: BehaviorSubject<Productos[]> = new BehaviorSubject<Productos[]>([]);
  public Categorias: any[] = [];
  public categoriaSeleccionada: number = 0;
  public Variantes: any[] = [];
  public viewModal: boolean = false;
  public nombreModal: string = '';
  public nombreVariantes: string = '';
  public productoModal: Productos;
  public cantidadModal: number = 1;
  public cantidadModalSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public importeModal: number= 0;
  public precioProductoModal: number = 0;
  public importeModalSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(){
    this.productos = Data;
    this.Categorias = Categorias;
    this.productoModal = { nombre: '',codigo:'', precio: 0,stock: 0,categoria: '',cod_categoria: 0,imagen:'', variantes: [] }
  }

  ngOnInit(){
    console.log('Esto tiene data ' + JSON.stringify(this.data));
    this.productosSubject.subscribe((producto) => {
      this.productosModal = producto;
    });
    this.importeModalSubject.subscribe((importe) => {
      this.importeModal = importe;
    });
    this.productosSubject.next(this.productos);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  ngAfterViewInit(): void {
  }

  agregarCarrito(variantes: IVariantes[],codigo: string): void{
    if(variantes.length > 0){
      console.log("abrir modal")
      const productSeleccionado = this.productos.filter((item) => item.codigo === codigo);
      this.productoModal = productSeleccionado[0];
      this.nombreModal = this.productoModal.nombre;
      this.importeModalSubject.next(this.productoModal.precio);
      //this.nombreVariantes = this.productoModal.variantes.nombreVariante;
      this.viewModal = true;

    } else{
      console.log("no abrir")
    }
  }

  isOpen(): boolean{
    return this.viewModal;
  }

  closeModal(): void{
    this.viewModal = false;
  }

  public calcularImporteTotal(): void{
    const auxProducto = JSON.parse(JSON.stringify(this.productoModal));
    let importeTotal = auxProducto.precio1;
    // this.variantes.forEach((element, index) =>{
    //     if(element.active===1){
    //         importeTotal += element.precio;
    //     }
    // });
    this.precioProductoModal = importeTotal;
    importeTotal = importeTotal * this.cantidadModal;
    this.importeModalSubject.next(importeTotal);
  }

  public sumarCantidadModal(): void{
    let auxCantidad = 0;
    auxCantidad = this.cantidadModal + 1;
    this.cantidadModalSubject.next(auxCantidad);
    this.calcularImporteTotal();
  }

  public restarCantidadModal(): void{
    let auxCantidad = 0;
    auxCantidad = this.cantidadModal;
    if(auxCantidad-1 !== 0){
        this.cantidadModalSubject.next(auxCantidad-1);
        this.calcularImporteTotal();
    }
  }

  public agregarProdCarritoModal(): void{
    if(this.productoModal){
        const auxProducto = JSON.parse(JSON.stringify(this.productoModal));
        auxProducto.cantidad = this.cantidadModal;
        auxProducto.nombre = this.nombreModal + ' (' + this.nombreVariantes + ')';
        if(this.precioProductoModal !== 0){
            auxProducto.precio1 = this.precioProductoModal;
        }
        console.log(auxProducto);
        // this.agregarCarro(auxProducto);
        this.cantidadModal=1;
        // this.modalSubject.next(false);
    }
  }

  public seleccionarCategoria(numero: number): void{
    if(numero !== 0){
      // Seleccionar Categoria
      const auxProductos = this.productos.filter(item => item.cod_categoria === numero);
      this.productosSubject.next(auxProductos)
    } else{
      // Seleccionar todos los productos
      this.productosSubject.next(Data)
    }
    this.categoriaSeleccionada = numero;
  }
}
