import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HslListComponent } from './hsl-list.component';

describe('HslListComponent', () => {
  let component: HslListComponent;
  let fixture: ComponentFixture<HslListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HslListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HslListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
