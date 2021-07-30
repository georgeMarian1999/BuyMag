import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGroupedViewComponent } from './products-grouped-view.component';

describe('ProductsGroupedViewComponent', () => {
  let component: ProductsGroupedViewComponent;
  let fixture: ComponentFixture<ProductsGroupedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsGroupedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsGroupedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
