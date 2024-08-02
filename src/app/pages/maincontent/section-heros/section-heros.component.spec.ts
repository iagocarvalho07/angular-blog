import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHerosComponent } from './section-heros.component';

describe('SectionHerosComponent', () => {
  let component: SectionHerosComponent;
  let fixture: ComponentFixture<SectionHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHerosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
