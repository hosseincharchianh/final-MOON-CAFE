import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectComponent } from './sect.component';

describe('SectComponent', () => {
  let component: SectComponent;
  let fixture: ComponentFixture<SectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
