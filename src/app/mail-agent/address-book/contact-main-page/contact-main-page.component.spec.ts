import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMainPageComponent } from './contact-main-page.component';

describe('ContactMainPageComponent', () => {
  let component: ContactMainPageComponent;
  let fixture: ComponentFixture<ContactMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
