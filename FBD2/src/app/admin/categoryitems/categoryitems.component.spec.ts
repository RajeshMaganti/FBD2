import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryitemsComponent } from './categoryitems.component';

describe('CategoryitemsComponent', () => {
  let component: CategoryitemsComponent;
  let fixture: ComponentFixture<CategoryitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
