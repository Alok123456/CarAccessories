import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadLightComponent } from './head-light.component';

describe('HeadLightComponent', () => {
  let component: HeadLightComponent;
  let fixture: ComponentFixture<HeadLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
