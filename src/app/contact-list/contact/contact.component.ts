import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Contact } from '../contact';
import { Router, Params } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private _contact: Contact;

  @Input()
  public set contact(contact: Contact) {
    this._contact = contact;
  }

  public get contact(): Contact {
    return this._contact;
  }

  @Output() public contactDeleted: EventEmitter<any> = new EventEmitter();


  constructor(private router: Router) { }


  ngOnInit() {

  }


  public delete(): void {
    this.contactDeleted.emit();
  }


  public edit(): void {
    const editUrl = `/contacts/${this.contact.id}/edit`;
    this.router.navigate([editUrl]);
  }
}
