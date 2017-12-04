import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { Urls } from '../../../urls.consts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public contactList: Contact[];

  constructor(
    private contactService: ContactService,
    private router: Router) { }

  ngOnInit() {
    this.initContactList();
  }


  private initContactList(): void {
    this.contactService
      .getContacts()
      .subscribe(result => this.contactList = result);
  }


  public createContact(): void {
    this.router.navigate([Urls.contactsCreateContactUrl()]);
  }


  public deleteContact(contact: Contact): void {
    this.contactService.deleteContact(contact)
      .subscribe(response => {
        this.initContactList();
      });
  }
}
