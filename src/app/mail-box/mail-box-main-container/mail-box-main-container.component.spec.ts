import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailBoxMainContainerComponent } from './mail-box-main-container.component';

describe('MailBoxMainContainerComponent', () => {
  let component: MailBoxMainContainerComponent;
  let fixture: ComponentFixture<MailBoxMainContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailBoxMainContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailBoxMainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
