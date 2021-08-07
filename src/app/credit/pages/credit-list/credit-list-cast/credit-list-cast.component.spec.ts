import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditListCastComponent } from './credit-list-cast.component';

describe('CreditListCastComponent', () => {
  let component: CreditListCastComponent;
  let fixture: ComponentFixture<CreditListCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditListCastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditListCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
