/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserResumeFormComponent } from './user-resume-form.component';

describe('UserResumeFormComponent', () => {
  let component: UserResumeFormComponent;
  let fixture: ComponentFixture<UserResumeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserResumeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserResumeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
