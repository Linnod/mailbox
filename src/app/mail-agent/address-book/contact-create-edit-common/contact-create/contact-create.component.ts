import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactCreateEditCommonComponent } from '../contact-create-edit-common.component';
import { ContactService } from '../../contact.service';
import { Contact } from '../../contact';
import { Urls } from '../../../../urls.consts';
import { FormControl } from '@angular/forms';
import { Gender } from '../../gender';

@Component({
  selector: 'app-contact-create',
  templateUrl: './../contact-create-edit-common.component.html',
  styleUrls: ['./../contact-create-edit-common.component.css']
})
export class ContactCreateComponent extends ContactCreateEditCommonComponent  implements OnInit {

  constructor(
    protected router: Router,
    protected contactService: ContactService
  ) {
    super(router, contactService);
   }

  ngOnInit() {
    this._contact = new Contact();
    this.initFormControls();
  }

  protected initFormControls(): void {
    super.initFormControls();
    this.genderControl = new FormControl(Gender.Male.toString());
  }

  protected saveChanges(): void {
    super.saveChanges();

    this.contactService
      .createContact(this.contact)
      .subscribe(response => {
        this.router.navigate([Urls.contactsRootUrl()]);
      });
  }

}
