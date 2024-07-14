import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisuComponent } from './sisu.component';

describe('SisuComponent', () => {
  let component: SisuComponent;
  let fixture: ComponentFixture<SisuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
