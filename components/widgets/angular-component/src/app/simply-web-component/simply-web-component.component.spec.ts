import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplyWebComponentComponent } from './simply-web-component.component';

describe('SimplyWebComponentComponent', () => {
  let component: SimplyWebComponentComponent;
  let fixture: ComponentFixture<SimplyWebComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplyWebComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplyWebComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
