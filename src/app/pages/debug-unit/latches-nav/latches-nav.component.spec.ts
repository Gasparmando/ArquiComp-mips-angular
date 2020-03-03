import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatchesNavComponent } from './latches-nav.component';

describe('LatchesNavComponent', () => {
  let component: LatchesNavComponent;
  let fixture: ComponentFixture<LatchesNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatchesNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatchesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
