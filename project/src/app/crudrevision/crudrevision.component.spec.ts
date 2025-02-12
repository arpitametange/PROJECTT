import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudrevisionComponent } from './crudrevision.component';

describe('CrudrevisionComponent', () => {
  let component: CrudrevisionComponent;
  let fixture: ComponentFixture<CrudrevisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudrevisionComponent]
    });
    fixture = TestBed.createComponent(CrudrevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
