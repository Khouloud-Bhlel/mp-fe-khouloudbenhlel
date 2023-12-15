import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFactureIndexComponent } from './detail-facture-index.component';

describe('DetailFactureIndexComponent', () => {
  let component: DetailFactureIndexComponent;
  let fixture: ComponentFixture<DetailFactureIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailFactureIndexComponent]
    });
    fixture = TestBed.createComponent(DetailFactureIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
