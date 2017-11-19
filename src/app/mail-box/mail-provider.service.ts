import { Injectable } from '@angular/core';
import { Mail } from './mail';
import { MailCategory } from './mail-category';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MailProviderService {

  private mails: Mail[] = new Array();

  constructor() {
    this.initMails();
  }

  private initMails(): void {
    this.mails.push({
      subject: 'Test Subject',
      body: 'Hello from test!',
      id: 1,
      from: 'test@test.com',
      to: '123@123.com',
      category: MailCategory.Inbox
    });

    this.mails.push({
      subject: 'Test spam Subject',
      body: 'Hello from spam!',
      id: 2,
      from: 'test@test.com',
      to: '123@123.com',
      category: MailCategory.Spam
    });

    this.mails.push({
      subject: 'Test outbox Subject',
      body: 'Hello from outbox!',
      id: 3,
      from: 'test@test.com',
      to: '123@123.com',
      category: MailCategory.Outbox
    });
  }


  public getInboxMails(): Observable<Mail[]> {
    return this.getMailsByCategory(MailCategory.Inbox);
  }

  public getSpamMails(): Observable<Mail[]> {
    return this.getMailsByCategory(MailCategory.Spam);
  }


  public getOutboxMails(): Observable<Mail[]> {
    return this.getMailsByCategory(MailCategory.Outbox);
  }


  public getMailById(id: number): Observable<Mail> {
    const result = this.mails.find(m => m.id === id);

    return Observable.of(result);
  }


  public sendMail(mail: Mail): Observable<Mail> {
    mail.id = this.findMaxId() + 1;

    this.mails.push(mail);

    return Observable.of(mail);
  }


  private getMailsByCategory(mailCategory: MailCategory): Observable<Mail[]> {
    const result = this.mails.filter(m => m.category === mailCategory);

    return Observable.of(result);
  }


  private findMaxId(): number {
    let maxId = 0;

    this.mails.map(c => {
      if (c.id > maxId) {
        maxId = c.id;
      }
    });

    return maxId;
  }
}
