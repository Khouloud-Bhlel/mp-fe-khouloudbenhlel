import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFactureViewComponent } from './detail-facture-view.component';

describe('DetailFactureViewComponent', () => {
  let component: DetailFactureViewComponent;
  let fixture: ComponentFixture<DetailFactureViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailFactureViewComponent]
    });
    fixture = TestBed.createComponent(DetailFactureViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
