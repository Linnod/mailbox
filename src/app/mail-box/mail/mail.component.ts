import { Component, OnInit } from '@angular/core';
import { Mail } from '../mail';
import { ActivatedRoute } from '@angular/router';
import { MailProviderService } from '../mail-provider.service';
import { MailCategory } from '../mail-category';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  public mail: Mail;
  private mailId: number;

  constructor(private route: ActivatedRoute,
    private mailsProvider: MailProviderService) {
      route.params.subscribe(param => {
        this.mailId = Number(param.id);
      });
    }

    ngOnInit() {
      this.mailsProvider.getMailById(this.mailId)
        .subscribe(response => this.mail = response);
    }
}
