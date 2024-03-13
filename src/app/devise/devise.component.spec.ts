/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeviseComponent } from './devise.component';

describe('DeviseComponent', () => {
  let component: DeviseComponent;
  let fixture: ComponentFixture<DeviseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
