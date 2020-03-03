import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugUnitComponent } from './debug-unit.component';

describe('DebugUnitComponent', () => {
  let component: DebugUnitComponent;
  let fixture: ComponentFixture<DebugUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
