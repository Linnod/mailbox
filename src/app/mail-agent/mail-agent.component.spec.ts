import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailAgentComponent } from './mail-agent.component';

describe('MailAgentComponent', () => {
  let component: MailAgentComponent;
  let fixture: ComponentFixture<MailAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
