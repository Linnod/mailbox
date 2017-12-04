import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactCreateEditCommonComponent } from './contact-create-edit-common.component';

describe('ContactCreateEditCommonComponent', () => {
  let component: ContactCreateEditCommonComponent;
  let fixture: ComponentFixture<ContactCreateEditCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCreateEditCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCreateEditCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
