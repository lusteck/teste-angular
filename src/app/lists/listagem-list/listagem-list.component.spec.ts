import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemListComponent } from './listagem-list.component';

describe('ListagemListComponent', () => {
  let component: ListagemListComponent;
  let fixture: ComponentFixture<ListagemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
