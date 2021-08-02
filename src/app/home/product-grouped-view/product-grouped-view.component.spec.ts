import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupedViewComponent } from './product-grouped-view.component';

describe('ProductGroupedViewComponent', () => {
  let component: ProductGroupedViewComponent;
  let fixture: ComponentFixture<ProductGroupedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGroupedViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGroupedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
