import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDragComponent } from './cdk-drag.component';

describe('CdkDragComponent', () => {
  let component: CdkDragComponent;
  let fixture: ComponentFixture<CdkDragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkDragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
