import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditListCrewComponent } from './credit-list-crew.component';

describe('CreditListCrewComponent', () => {
  let component: CreditListCrewComponent;
  let fixture: ComponentFixture<CreditListCrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditListCrewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditListCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
