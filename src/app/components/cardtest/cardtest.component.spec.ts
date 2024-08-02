import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtestComponent } from './cardtest.component';

describe('CardtestComponent', () => {
  let component: CardtestComponent;
  let fixture: ComponentFixture<CardtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardtestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
