import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../models/producto';

export interface DialogData {
  data: Product;
  mode: 'edit' | 'add' | 'delete';
}

@Component({
  selector: 'app-dialogs',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose, ReactiveFormsModule],
  templateUrl: './maneja-producto.component.html',
  styleUrl: './maneja-producto.component.scss'
})

export class ManejaProductoComponent {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    product: new FormControl(''),
    precio: new FormControl(''),
    descripcion: new FormControl(''),
    codigo: new FormControl(''),
  });

  readonly dialogRef = inject(MatDialogRef<ManejaProductoComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  constructor() {
    if (this.data.mode !== 'add') {
      this.form.setValue(this.data.data);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.dialogRef.close(this.form.value);
  }
}
