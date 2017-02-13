/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentDataComponent } from './student-data.component';

describe('StudentDataComponent', () => {
  let component: StudentDataComponent;
  let fixture: ComponentFixture<StudentDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
