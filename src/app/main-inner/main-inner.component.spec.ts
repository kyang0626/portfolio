import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInnerComponent } from './main-inner.component';

describe('MainInnerComponent', () => {
  let component: MainInnerComponent;
  let fixture: ComponentFixture<MainInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
