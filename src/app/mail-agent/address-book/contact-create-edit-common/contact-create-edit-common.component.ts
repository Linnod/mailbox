import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Urls } from '../../../urls.consts';
import { Gender } from '../gender';

export abstract class ContactCreateEditCommonComponent implements OnInit {
  protected _contact: Contact;

  @Input()
  public set contact(contact: Contact) {
    this._contact = contact;
  }

  public get contact(): Contact {
    return this._contact;
  }

  public emailControl: FormControl;
  public firstNameControl: FormControl;
  public secondNameControl: FormControl;
  public phoneNumberControl: FormControl;
  public genderControl: FormControl;

  constructor(
    protected router: Router,
    protected contactService: ContactService
  ) {  }

  ngOnInit(): void {

  }

  public save(): void {
    this.saveChanges();
  }


  public cancel(): void {
    this.resetForm();
    this.router.navigate([Urls.contactsRootUrl()]);
  }

  protected initFormControls(): void {
    this.emailControl = new FormControl(this.contact.email);
    this.firstNameControl = new FormControl(this.contact.firstName);
    this.secondNameControl = new FormControl(this.contact.secondName);
    this.phoneNumberControl = new FormControl(this.contact.phoneNumber);
  }

  protected saveChanges(): void {
    this.contact.email = this.emailControl.value;
    this.contact.firstName = this.firstNameControl.value;
    this.contact.secondName = this.secondNameControl.value;
    this.contact.phoneNumber = this.phoneNumberControl.value;
    this.contact.gender = parseInt(this.genderControl.value);
  }

  private resetForm(): void {
    this.emailControl.reset();
    this.firstNameControl.reset();
    this.secondNameControl.reset();
    this.phoneNumberControl.reset();
  }
}
