import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { Gender } from './gender';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';

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
    const createNewContactUrl = '/contacts/new';
    this.router.navigate([createNewContactUrl]);
  }


  public deleteContact(contact: Contact): void {
    this.contactService.deleteContact(contact)
      .subscribe(response => {
        this.initContactList();
      });
  }
}
