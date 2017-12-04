import { Component, OnInit } from '@angular/core';
import { Mail } from '../mail';
import { MailProviderService } from '../mail-provider.service';
import { ActivatedRoute } from '@angular/router';
import { MailBoxes } from '../mail-boxes';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-mail-box-main-container',
  templateUrl: './mail-box-main-container.component.html',
  styleUrls: ['./mail-box-main-container.component.css']
})
export class MailBoxMainContainerComponent implements OnInit {

  public mails: Mail[];

  constructor(
    private route: ActivatedRoute,
    private mailProvider: MailProviderService
  ) {
    this.route.params.subscribe(params => this.onRouteParamsReceived(params));
  }

  ngOnInit() {
  }


  private onRouteParamsReceived(params: any) {
    switch (params.tab) {
      case MailBoxes.inbox: {
        this.fillMails(this.mailProvider.getInboxMails());
        break;
      }
      case MailBoxes.spam: {
        this.fillMails(this.mailProvider.getSpamMails());
        break;
      }

      case MailBoxes.outbox: {
        this.fillMails(this.mailProvider.getOutboxMails());
        break;
      }
    }
  }


  private fillMails(getMailsResult: Observable<Mail[]>): void {
    getMailsResult.subscribe(response => {
      this.mails = response;
    });
  }
}
