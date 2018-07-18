import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOneProductComponent } from './read-one-product.component';

describe('ReadOneProductComponent', () => {
  let component: ReadOneProductComponent;
  let fixture: ComponentFixture<ReadOneProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOneProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOneProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
