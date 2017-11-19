import { Component, OnInit } from '@angular/core';
import { ContactCreateEditCommonComponent } from '../contact-create-edit-common/contact-create-edit-common.component';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-create',
  templateUrl: './../contact-create-edit-common/contact-create-edit-common.component.html',
  styleUrls: ['./../contact-create-edit-common/contact-create-edit-common.component.css']
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


  protected saveChanges(): void {
    super.saveChanges();

    this.contactService
      .createContact(this.contact)
      .subscribe(response => {
        this.router.navigate(['/contacts/']);
      });
  }

}
