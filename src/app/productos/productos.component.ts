import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ManejaProductoComponent } from '../maneja-producto/maneja-producto.component';
import { Product } from '../models/producto';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductosService } from '../services/productos.service';

const ELEMENT_DATA: Product[] = [];
// = [
//   { id: '1', product: 'Hydrogen', precio: 1.0079, codigo: 'H', descripcion: '' },
//   { id: '2', product: 'Helium', precio: 4.0026, codigo: 'He', descripcion: '' },
//   { id: '3', product: 'Lithium', precio: 6.941, codigo: 'Li', descripcion: '' },
//   { id: '4', product: 'Beryllium', precio: 9.0122, codigo: 'Be', descripcion: '' },
//   { id: '5', product: 'Boron', precio: 10.811, codigo: 'B', descripcion: '' },
//   { id: '6', product: 'Carbon', precio: 12.0107, codigo: 'C', descripcion: '' },
//   { id: '7', product: 'Nitrogen', precio: 14.0067, codigo: 'N', descripcion: '' },
//   { id: '8', product: 'Oxygen', precio: 15.9994, codigo: 'O', descripcion: '' },
//   { id: '9', product: 'Fluorine', precio: 18.9984, codigo: 'F', descripcion: '' },
//   { id: '10', product: 'Neon', precio: 20.1797, codigo: 'Ne', descripcion: '' },
// ];

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {
  displayedColumns: string[] = ['id', 'product', 'precio', 'codigo', 'edits'];
  dataSource = ELEMENT_DATA;

  readonly dialog = inject(MatDialog);

  constructor(private productosService: ProductosService) {
    // llamar a obtenerProductos y actualizar ELEMENT_DATA
    this.getProduct();
  }


  adicionarProducto(): void {
    const dialogRef = this.dialog.open(ManejaProductoComponent, {
      data: {
        data: {},
        mode: 'add',
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log('The dialog was closed  ', result);
        this.productosService.addProduct(result).subscribe(data => {
          console.log(data)
          this.getProduct();
        });
      }
    });
  }

  editarProducto(data: Product): void {
    const dialogRef = this.dialog.open(ManejaProductoComponent, {
      data: {
        data: data,
        mode: 'edit',
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.productosService.editProduct(result).subscribe(data => {
          console.log(data)
          this.getProduct();
        });
      }
    });
  }

  eliminarProducto(data: Product): void {
    const dialogRef = this.dialog.open(ManejaProductoComponent, {
      data: {
        data: data,
        mode: 'delete',
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this.productosService.deleteProduct(result).subscribe(data => {
          console.log(data)
          this.getProduct();
        });
      }
    });
  }

  getProduct(): void {
    this.productosService.getProducts().subscribe(data => {
      this.dataSource = data
    })
  }
}
