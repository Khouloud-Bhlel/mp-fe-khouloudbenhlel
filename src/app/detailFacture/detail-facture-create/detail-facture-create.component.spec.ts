import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFactureCreateComponent } from './detail-facture-create.component';

describe('DetailFactureCreateComponent', () => {
  let component: DetailFactureCreateComponent;
  let fixture: ComponentFixture<DetailFactureCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailFactureCreateComponent]
    });
    fixture = TestBed.createComponent(DetailFactureCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
