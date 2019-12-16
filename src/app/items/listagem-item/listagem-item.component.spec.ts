import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemItemComponent } from './listagem-item.component';

describe('ListagemItemComponent', () => {
  let component: ListagemItemComponent;
  let fixture: ComponentFixture<ListagemItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
