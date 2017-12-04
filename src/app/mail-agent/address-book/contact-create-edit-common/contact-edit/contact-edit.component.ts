import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContactCreateEditCommonComponent } from '../contact-create-edit-common.component';
import { ContactService } from '../../contact.service';
import { Urls } from '../../../../urls.consts';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './../contact-create-edit-common.component.html',
  styleUrls: ['./../contact-create-edit-common.component.css']
})
export class ContactEditComponent extends ContactCreateEditCommonComponent implements OnInit {

  constructor(
    protected router: Router,
    private activatedRoute: ActivatedRoute,
    protected contactService: ContactService
  ) {
    super(router, contactService);
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const contactId = parseInt(params['id']);
      this.contactService
        .getContactById(contactId)
        .subscribe(contact => {
          this.contact = contact;
          this.initFormControls();
        });
    });

    this.initFormControls();
  }


  protected saveChanges(): void {
    super.saveChanges();

    this.contactService
      .editContact(this.contact)
      .subscribe(response => {
        this.router.navigate([Urls.contactsRootUrl()]);
      });
  }
}
