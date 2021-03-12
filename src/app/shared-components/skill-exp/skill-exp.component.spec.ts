import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillExpComponent } from './skill-exp.component';

describe('SkillExpComponent', () => {
  let component: SkillExpComponent;
  let fixture: ComponentFixture<SkillExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
