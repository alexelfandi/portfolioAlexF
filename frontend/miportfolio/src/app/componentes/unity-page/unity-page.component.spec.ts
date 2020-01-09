import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityPageComponent } from './unity-page.component';

describe('UnityPageComponent', () => {
  let component: UnityPageComponent;
  let fixture: ComponentFixture<UnityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
