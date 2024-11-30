import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NgFor, DecimalPipe } from '@angular/common';
import { Productos, IVariantes, IVariante } from '../Interfaces/Home.inteface';
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
  public Variantes: IVariante[] = [];
  public viewModal: boolean = false;
  public nombreModal: string = '';
  public nombreVariantes: string = '';
  public nombreVariantesSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public nombreModalSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public productoModal: Productos;
  public cantidadModal: number = 1;
  public cantidadModalSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public importeModal: number= 0;
  public importeItemModal: number = 0;
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
    this.cantidadModalSubject.subscribe((cantidad) => {
      this.cantidadModal = cantidad;
    });
    this.importeModalSubject.subscribe((importe) => {
      this.importeModal = importe;
    });
    this.nombreModalSubject.subscribe((nombre) =>{
      this.nombreModal = nombre;
    });
    this.nombreVariantesSubject.subscribe((nombre) => {
      this.nombreVariantes = nombre;
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
      this.productoModal.variantes.forEach((element, index) => {
        element.opciones.forEach((item, indexItem) => {
          let Data: IVariante = { grupo:index,option:indexItem,precio:item.precio,active:0}
          this.Variantes.push(Data);
        })
      })
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
    this.Variantes = [];
    this.nombreVariantesSubject.next('');
  }

  public calcularImporteTotal(): void{
    const auxProducto = JSON.parse(JSON.stringify(this.productoModal));
    let importeTotal = auxProducto.precio;
    this.Variantes.forEach((element, index) =>{
        if(element.active===1){
            importeTotal += element.precio;
        }
    });
    this.precioProductoModal = importeTotal;
    importeTotal = importeTotal * this.cantidadModal;
    this.importeModalSubject.next(importeTotal);
  }

  sumarImporte(actived: boolean, varianteIndex: number, optionIndex: number, grupo: string, nombre: string):void{
    this.Variantes = this.Variantes.map((opcion) => {
      if (opcion.grupo === varianteIndex) {
          return { ...opcion, active: (opcion.option === optionIndex) && actived ? 1 : 0 };
      }
      return opcion;
    });
    const nombres = this.nombreVariantes.split('/');
    nombres[varianteIndex] = grupo.toUpperCase() + ':' + nombre.toUpperCase();
    const nombreFinal = nombres.join(' / ');
    this.nombreVariantesSubject.next(nombreFinal);
    this.calcularImporteTotal();
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
