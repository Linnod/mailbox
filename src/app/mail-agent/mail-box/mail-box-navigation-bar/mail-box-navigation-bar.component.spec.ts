import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailBoxNavigationBarComponent } from './mail-box-navigation-bar.component';

describe('MailBoxNavigationBarComponent', () => {
  let component: MailBoxNavigationBarComponent;
  let fixture: ComponentFixture<MailBoxNavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailBoxNavigationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailBoxNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
