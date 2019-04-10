import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataPage } from './edit-data.page';

describe('EditDataPage', () => {
  let component: EditDataPage;
  let fixture: ComponentFixture<EditDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
