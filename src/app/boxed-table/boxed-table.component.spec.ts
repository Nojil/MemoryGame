import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxedTableComponent } from './boxed-table.component';

describe('BoxedTableComponent', () => {
  let component: BoxedTableComponent;
  let fixture: ComponentFixture<BoxedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
