import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { forEach } from '@angular/router/src/utils/collection';
import { Gender } from './gender';
import { Contact } from './contact';

@Injectable()
export class ContactService {

  private contactList = [{
    id: 1,
    email: 'test@test.com',
    firstName: 'Test',
    secondName: 'Test',
    phoneNumber: '1234567',
    gender: Gender.Male
  }, {
    id: 2,
    email: 'test2@test.com',
    firstName: 'Test2',
    secondName: 'Test2',
    phoneNumber: '7654321',
    gender: Gender.Female
  }];

  constructor() { }


  public getContactById(id: number): Observable<Contact> {
    const contact = this.contactList.find(c => c.id === id);

    return Observable.of(contact);
  }


  public getContacts(): Observable<Contact[]> {
    return Observable.of(this.contactList);
  }


  public editContacts(contacts: Contact[]): Observable<any> {
    contacts.forEach(contactToEdit => {
      this.editContact(contactToEdit);
    });

    return Observable.of(null);
  }


  public editContact(contactToEdit: Contact): Observable<any> {
    let foundContact = this.contactList.find(contact => contact.id === contactToEdit.id);
    foundContact = contactToEdit;

    return Observable.of(null);
  }


  public createContacts(contacts: Contact[]): Observable<any> {
    contacts.forEach(newContact => {
      this.createContact(newContact);
    });

    return Observable.of(null);
  }


  public createContact(contact: Contact): Observable<any> {
    contact.id = this.findMaxId() + 1;
    this.contactList.push(contact);

    return Observable.of(null);
  }


  public deleteContacts(contacts: Contact[]): Observable<any> {
    contacts.forEach(c => {
      this.deleteContact(c);
    });

    return Observable.of(null);
  }


  public deleteContact(contact: Contact): Observable<any> {
    this.contactList = this.contactList.filter(c => c.id !== contact.id);

    return Observable.of(null);
  }


  private findMaxId(): number {
    let maxId = 0;

    this.contactList.map(c => {
      if (c.id > maxId) {
        maxId = c.id;
      }
    });

    return maxId;
  }
}
