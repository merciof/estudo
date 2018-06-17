import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBarMdlComponent } from './title-bar-mdl.component';

describe('TitleBarMdlComponent', () => {
  let component: TitleBarMdlComponent;
  let fixture: ComponentFixture<TitleBarMdlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleBarMdlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleBarMdlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
