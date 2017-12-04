import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { MailProviderService } from '../mail-provider.service';
import { Mail } from '../mail';
import { MailCategory } from '../mail-category';
import { Router } from '@angular/router';
import { Urls } from '../../../urls.consts';

@Component({
  selector: 'app-create-mail',
  templateUrl: './create-mail.component.html',
  styleUrls: ['./create-mail.component.css']
})
export class CreateMailComponent implements OnInit {

  public toControl: FormControl;
  public fromControl: FormControl;
  public subjectControl: FormControl;
  public bodyControl: FormControl;

  constructor(
    private mailService: MailProviderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.toControl = new FormControl();
    this.fromControl = new FormControl();
    this.subjectControl = new FormControl();
    this.bodyControl = new FormControl();
  }


  public sendMail(): void {
    const newMail = this.createMailFromForm();
    newMail.category = MailCategory.Outbox;

    this.mailService.sendMail(newMail)
      .subscribe(response => {
        alert('Mail was succesfully sent!');
        const sentMail = response;
        this.router.navigate([Urls.mailboxGoToMailUrl(sentMail.id)]);
      });
  }


  private createMailFromForm(): Mail {
    const newMail = new Mail();
    newMail.to = this.toControl.value;
    newMail.from = this.fromControl.value;
    newMail.body = this.bodyControl.value;
    newMail.subject = this.subjectControl.value;

    return newMail;
  }
}
