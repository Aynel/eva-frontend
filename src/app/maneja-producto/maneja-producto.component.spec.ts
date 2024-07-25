import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejaProductoComponent } from './maneja-producto.component';

describe('ManejaProductoComponent', () => {
  let component: ManejaProductoComponent;
  let fixture: ComponentFixture<ManejaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManejaProductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManejaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
