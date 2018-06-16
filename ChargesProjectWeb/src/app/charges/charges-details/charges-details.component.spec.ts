import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargesDetailsComponent } from './charges-details.component';

describe('ChargesDetailsComponent', () => {
  let component: ChargesDetailsComponent;
  let fixture: ComponentFixture<ChargesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
