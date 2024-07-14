import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisupageComponent } from './sisupage.component';

describe('SisupageComponent', () => {
  let component: SisupageComponent;
  let fixture: ComponentFixture<SisupageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisupageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisupageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
